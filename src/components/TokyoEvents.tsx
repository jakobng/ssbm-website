import React, { useMemo, useState } from 'react';
import eventsData from '../data/tokyoEvents.json';
import manualEventsData from '../data/manualTokyoEvents.json';
import type { EventRecord } from '../types/events';

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'short',
});

const timeFormatter = new Intl.DateTimeFormat('ja-JP', {
  timeZone: 'Asia/Tokyo',
  hour: '2-digit',
  minute: '2-digit',
});

const mapCenter = { latitude: 35.6812, longitude: 139.7671 };
const mapZoom = 10;
const mapTileSize = 256;
const mapTileOffsets = [-2, -1, 0, 1, 2];
const mapPixelSize = mapTileSize * mapTileOffsets.length;

const lonLatToWorldPixel = (longitude: number, latitude: number, zoom: number) => {
  const scale = mapTileSize * 2 ** zoom;
  const sinLatitude = Math.sin((latitude * Math.PI) / 180);

  return {
    x: ((longitude + 180) / 360) * scale,
    y: (0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI)) * scale,
  };
};

const mapCenterPixel = lonLatToWorldPixel(mapCenter.longitude, mapCenter.latitude, mapZoom);
const mapStartPixel = {
  x: mapCenterPixel.x - mapPixelSize / 2,
  y: mapCenterPixel.y - mapPixelSize / 2,
};
const mapCenterTile = {
  x: Math.floor(mapCenterPixel.x / mapTileSize),
  y: Math.floor(mapCenterPixel.y / mapTileSize),
};

const mapTiles = mapTileOffsets.flatMap((yOffset) =>
  mapTileOffsets.map((xOffset) => {
    const x = mapCenterTile.x + xOffset;
    const y = mapCenterTile.y + yOffset;

    return {
      key: `${x}-${y}`,
      src: `https://tile.openstreetmap.org/${mapZoom}/${x}/${y}.png`,
      left: ((x * mapTileSize - mapStartPixel.x) / mapPixelSize) * 100,
      top: ((y * mapTileSize - mapStartPixel.y) / mapPixelSize) * 100,
    };
  })
);

const getMapPosition = (event: EventRecord) => {
  const eventPixel = lonLatToWorldPixel(event.longitude, event.latitude, mapZoom);

  return {
    x: ((eventPixel.x - mapStartPixel.x) / mapPixelSize) * 100,
    y: ((eventPixel.y - mapStartPixel.y) / mapPixelSize) * 100,
  };
};
const typeLabels: Record<EventRecord['type'], string> = {
  tournament: '大会',
  meetup: '交流会',
};

const prefectureLabels: Record<EventRecord['prefecture'], string> = {
  Tokyo: '東京',
  Kanagawa: '神奈川',
  Saitama: '埼玉',
  Chiba: '千葉',
};

const formatWindow = (startAt: string, endAt?: string): string => {
  const start = new Date(startAt);
  const end = endAt ? new Date(endAt) : null;

  if (!end) {
    return `${dateFormatter.format(start)} ${timeFormatter.format(start)}`;
  }

  return `${dateFormatter.format(start)} ${timeFormatter.format(start)} - ${timeFormatter.format(end)}`;
};

const getSortTime = (event: EventRecord) => {
  return event.startAt ? new Date(event.startAt).getTime() : Number.MAX_SAFE_INTEGER;
};

const getEventWindow = (event: EventRecord) => {
  if (event.startAt) {
    return formatWindow(event.startAt, event.endAt);
  }

  return event.scheduleNote || '日程は公式ページで確認';
};

const TokyoEvents: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tournament' | 'meetup'>('all');
  const [now] = useState(() => Date.now());

  const allEvents = useMemo(() => {
    return ([...(eventsData as EventRecord[]), ...(manualEventsData as EventRecord[])])
      .sort((a, b) => getSortTime(a) - getSortTime(b));
  }, []);

  const upcomingEvents = useMemo(() => {
    return allEvents.filter((event) => !event.startAt || new Date(event.startAt).getTime() >= now);
  }, [allEvents, now]);

  const hasUpcomingEvents = upcomingEvents.length > 0;
  const activeEvents = upcomingEvents;

  const visibleEvents = useMemo(
    () => activeEvents.filter((event) => filter === 'all' || event.type === filter),
    [activeEvents, filter]
  );

  const venueCount = new Set(activeEvents.map((event) => event.venue)).size;
  const latestVerification = useMemo(() => {
    return activeEvents.reduce<string | undefined>((latest, event) => {
      if (!latest) {
        return event.lastVerifiedAt;
      }

      return new Date(event.lastVerifiedAt).getTime() > new Date(latest).getTime() ? event.lastVerifiedAt : latest;
    }, undefined);
  }, [activeEvents]);

  const latestDataVerification = useMemo(() => {
    return allEvents.reduce<string | undefined>((latest, event) => {
      if (!latest) {
        return event.lastVerifiedAt;
      }

      return new Date(event.lastVerifiedAt).getTime() > new Date(latest).getTime() ? event.lastVerifiedAt : latest;
    }, undefined);
  }, [allEvents]);

  return (
    <div className="page page--events">
      <section className="page-hero">
        <div>
          <p className="eyebrow">遊ぶ場所</p>
          <h2>首都圏イベント</h2>
          <p className="page-copy">
            東京・神奈川・埼玉・千葉のスマブラDXイベントを、地図と一覧で見られるページです。
            start.gg と公式SNSを見ながら、場所とリンクがすぐわかるようにしています。
          </p>
        </div>

        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">{activeEvents.length}</span>
            <span className="stat-chip__label">掲載中</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">{venueCount}</span>
            <span className="stat-chip__label">会場</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">3日</span>
            <span className="stat-chip__label">更新間隔</span>
          </div>
        </div>
      </section>

      <section className="event-toolbar glass-panel" aria-label="イベントのしぼりこみ">
        <div>
          <p className="eyebrow">しぼりこみ</p>
          <h3>表示を切り替える</h3>
        </div>
        <div className="event-filters" role="tablist" aria-label="イベントの種類">
          <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
            すべて
          </button>
          <button type="button" aria-pressed={filter === 'tournament'} onClick={() => setFilter('tournament')}>
            大会
          </button>
          <button type="button" aria-pressed={filter === 'meetup'} onClick={() => setFilter('meetup')}>
            交流会
          </button>
        </div>
      </section>

      <div className="events-layout">
        <section className="event-map-panel glass-panel">
          <div className="event-panel__header">
          <div>
            <p className="eyebrow">地図</p>
            <h3>首都圏の開催位置</h3>
          </div>
            <div className="event-legend">
              <span>
                <i className="event-legend__dot event-legend__dot--tournament" />
                大会
              </span>
              <span>
                <i className="event-legend__dot event-legend__dot--meetup" />
                交流会
              </span>
            </div>
          </div>

          <div className="metro-map" role="img" aria-label="OpenStreetMapを使った東京周辺イベントの地図">
            <div className="osm-map">
              {mapTiles.map((tile) => (
                <img
                  key={tile.key}
                  className="osm-map__tile"
                  src={tile.src}
                  alt=""
                  loading="lazy"
                  style={{ left: `${tile.left}%`, top: `${tile.top}%` }}
                />
              ))}
              {visibleEvents.map((event) => {
                const position = getMapPosition(event);
                const markerStyle = {
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                };

                return (
                  <a
                    key={event.id}
                    className={`osm-map__marker osm-map__marker--${event.type}`}
                    href={event.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={markerStyle}
                    aria-label={`${event.title}、${prefectureLabels[event.prefecture]}`}
                    title={`${event.title} · ${prefectureLabels[event.prefecture]}`}
                  >
                    <span />
                  </a>
                );
              })}
              <span className="osm-map__label osm-map__label--tokyo">東京</span>
              <span className="osm-map__label osm-map__label--yokohama">横浜</span>
              <span className="osm-map__label osm-map__label--chiba">千葉</span>
              <span className="osm-map__label osm-map__label--saitama">さいたま</span>
              <a className="osm-map__attribution" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
                OpenStreetMap
              </a>
            </div>
          </div>

          <p className="event-panel__note">
            {hasUpcomingEvents && latestVerification
              ? `最新確認: ${formatWindow(latestVerification)}。自動更新は3日に1回です。`
              : latestDataVerification
                ? `今後の予定はまだ見つかっていません。最後の確認: ${formatWindow(latestDataVerification)}。`
              : 'まだ確認できたイベントはありません。'}
          </p>
        </section>

        <section className="event-list-panel glass-panel">
          <div className="event-panel__header">
            <div>
              <p className="eyebrow">一覧</p>
              <h3>開催一覧</h3>
            </div>
            <p className="event-panel__note">いま {visibleEvents.length}件</p>
          </div>

          {visibleEvents.length === 0 ? (
            <div className="event-empty-state">
              <h4>該当するイベントはありません</h4>
              <p>しぼりこみを変えるか、次の自動更新を待ってください。</p>
            </div>
          ) : (
            <ul className="event-list">
              {visibleEvents.map((event) => (
                <li key={event.id} className="event-card">
                  <div className="event-card__top">
                    <div>
                      <p className="event-card__prefecture">{prefectureLabels[event.prefecture]}</p>
                      <h4>{event.title}</h4>
                      <p className="event-card__tournament">{event.tournamentName}</p>
                    </div>
                    <span className={`event-badge event-badge--${event.type}`}>{typeLabels[event.type]}</span>
                  </div>

                  <p className="event-card__window">{getEventWindow(event)}</p>
                  <p className="event-card__venue">{event.venue}{event.address ? ` · ${event.address}` : ''}</p>

                  <div className="event-card__meta">
                    <span>{event.sourceName}</span>
                    <span>さいごの確認 {formatWindow(event.lastVerifiedAt)}</span>
                  </div>

                  <a className="event-card__link" href={event.sourceUrl} target="_blank" rel="noreferrer">
                    元ページを開く
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default TokyoEvents;
