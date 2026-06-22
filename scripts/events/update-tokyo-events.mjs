import fs from 'node:fs/promises';

const OUTPUT = new URL('../../src/data/tokyoEvents.json', import.meta.url);
const START_GG_URL = 'https://www.start.gg/api/-/gql-public';
const CLIENT_VERSION = '20';
const GAME_ID = '1';
const TOKYO_COORDS = '35.6812,139.7671';
const SEARCH_RADIUS = '120km';
const PER_PAGE = 25;
const MAX_PAGES = 6;

const toIso = (seconds) => new Date(seconds * 1000).toISOString();

const normalizePrefecture = (tournament) => {
  const haystack = [
    tournament.addrState,
    tournament.city,
    tournament.venueName,
    tournament.venueAddress,
    tournament.fullAddress,
    tournament.locationDisplayName,
  ]
    .filter(Boolean)
    .join(' ');

  if (haystack.includes('東京')) return 'Tokyo';
  if (haystack.includes('神奈川')) return 'Kanagawa';
  if (haystack.includes('埼玉')) return 'Saitama';
  if (haystack.includes('千葉')) return 'Chiba';

  if (haystack.includes('Tokyo')) return 'Tokyo';
  if (haystack.includes('Kanagawa')) return 'Kanagawa';
  if (haystack.includes('Saitama')) return 'Saitama';
  if (haystack.includes('Chiba')) return 'Chiba';

  return null;
};

const pickMeleeEvent = (events = []) => {
  const meleeEvents = events.filter((event) => event?.videogame?.id === 1);

  if (meleeEvents.length === 0) {
    return null;
  }

  const scoreEvent = (event) => {
    const name = event.name.toLowerCase();
    if (name.includes('singles') || name.includes('シングル')) return 0;
    if (name.includes('doubles') || name.includes('ダブル')) return 1;
    return 2;
  };

  return [...meleeEvents].sort((a, b) => scoreEvent(a) - scoreEvent(b))[0];
};

const graphQL = async (query, variables) => {
  const response = await fetch(START_GG_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'client-version': CLIENT_VERSION,
    },
    body: JSON.stringify({ query, variables }),
  });

  const payload = await response.json();

  if (!response.ok || payload.errors?.length) {
    const message = payload.errors?.[0]?.message || payload.message || `start.gg request failed (${response.status})`;
    throw new Error(message);
  }

  return payload.data;
};

const fetchTournamentPage = async ({ page }) => {
  const variables = {
    page,
    perPage: PER_PAGE,
    coords: TOKYO_COORDS,
    distance: SEARCH_RADIUS,
  };

  const query = `
    query TokyoEvents($page: Int!, $perPage: Int!, $coords: String!, $distance: String!) {
      tournaments(query: {
        page: $page,
        perPage: $perPage,
        filter: {
          countryCode: "JP",
          published: true,
          publiclySearchable: true,
          upcoming: true,
          videogameIds: [${GAME_ID}],
          location: { distanceFrom: $coords, distance: $distance }
        }
      }) {
        nodes {
          id
          name
          slug
          city
          addrState
          venueName
          venueAddress
          fullAddress
          locationDisplayName
          lat
          lng
          startAt
          endAt
          events {
            id
            name
            slug
            videogame {
              id
              displayName
            }
          }
        }
      }
    }
  `;

  const data = await graphQL(query, variables);
  return data.tournaments.nodes;
};

const gatherTournaments = async () => {
  const collected = [];
  const seenTournamentIds = new Set();

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const nodes = await fetchTournamentPage({ page });

    if (nodes.length === 0) {
      break;
    }

    for (const tournament of nodes) {
      if (seenTournamentIds.has(String(tournament.id))) {
        continue;
      }

      seenTournamentIds.add(String(tournament.id));
      collected.push(tournament);
    }

    if (nodes.length < PER_PAGE) {
      break;
    }
  }

  return collected;
};

const tournamentToRecord = (tournament) => {
  const meleeEvent = pickMeleeEvent(tournament.events);

  if (!meleeEvent) {
    return null;
  }

  const address = tournament.venueAddress || tournament.fullAddress || tournament.locationDisplayName || undefined;
  const venue = address?.includes('万代町')
    ? '横浜市技能文化会館'
    : tournament.venueName || tournament.locationDisplayName || tournament.city || tournament.addrState || '東京';

  const prefecture = normalizePrefecture(tournament);

  if (!prefecture) {
    return null;
  }

  return {
    id: `startgg-${tournament.id}-${meleeEvent.id}`,
    title: meleeEvent.name,
    tournamentName: tournament.name,
    startAt: toIso(tournament.startAt),
    endAt: tournament.endAt ? toIso(tournament.endAt) : undefined,
    venue,
    address,
    prefecture,
    latitude: tournament.lat,
    longitude: tournament.lng,
    type: 'tournament',
    sourceUrl: `https://www.start.gg/${meleeEvent.slug}`,
    sourceName: 'start.gg',
    lastVerifiedAt: new Date().toISOString(),
  };
};

const main = async () => {
  const records = (await gatherTournaments())
    .map(tournamentToRecord)
    .filter(Boolean)
    .sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime());

  await fs.writeFile(OUTPUT, `${JSON.stringify(records, null, 2)}\n`);
  console.log(`wrote ${records.length} events -> src/data/tokyoEvents.json`);
};

await main();
