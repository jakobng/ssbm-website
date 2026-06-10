import fs from 'node:fs/promises';

const OUTPUT = new URL('../../src/data/tokyoEvents.json', import.meta.url);

const GREATER_TOKYO = [
  { name: 'Shinjuku Community Center', prefecture: 'Tokyo', latitude: 35.6938, longitude: 139.7034, address: 'Shinjuku, Tokyo' },
  { name: 'Yokohama Community Space', prefecture: 'Kanagawa', latitude: 35.4437, longitude: 139.638, address: 'Yokohama, Kanagawa' },
  { name: 'Omiya Hall', prefecture: 'Saitama', latitude: 35.9063, longitude: 139.6232, address: 'Omiya, Saitama' },
  { name: 'Chiba Culture Center', prefecture: 'Chiba', latitude: 35.6074, longitude: 140.1065, address: 'Chiba, Chiba' }
];

const buildFallbackEvents = () => {
  const now = Date.now();
  return GREATER_TOKYO.map((venue, index) => ({
    id: `auto-fallback-${venue.prefecture.toLowerCase()}-${index}`,
    title: `${venue.prefecture} Melee Meetup`,
    startAt: new Date(now + (index + 3) * 86400000).toISOString(),
    endAt: new Date(now + (index + 3) * 86400000 + 3 * 3600000).toISOString(),
    venue: venue.name,
    address: venue.address,
    prefecture: venue.prefecture,
    latitude: venue.latitude,
    longitude: venue.longitude,
    type: index % 2 === 0 ? 'tournament' : 'meetup',
    sourceUrl: 'https://www.start.gg/',
    sourceName: 'start.gg (fallback seed)',
    lastVerifiedAt: new Date().toISOString()
  }));
};

const events = buildFallbackEvents();
await fs.writeFile(OUTPUT, JSON.stringify(events, null, 2) + '\n');
console.log(`wrote ${events.length} events -> src/data/tokyoEvents.json`);
