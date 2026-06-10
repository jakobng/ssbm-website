export type EventRecord = {
  id: string;
  title: string;
  tournamentName: string;
  startAt: string;
  endAt?: string;
  venue: string;
  address?: string;
  prefecture: 'Tokyo' | 'Kanagawa' | 'Saitama' | 'Chiba';
  latitude: number;
  longitude: number;
  type: 'tournament' | 'meetup';
  sourceUrl: string;
  sourceName: string;
  lastVerifiedAt: string;
};
