import React, { useMemo, useState } from 'react';
import eventsData from '../data/tokyoEvents.json';
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

const bounds = { minLat: 35.3, maxLat: 36.1, minLng: 139.3, maxLng: 140.3 };
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

const TokyoEvents: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tournament' | 'meetup'>('all');
  const [now] = useState(() => Date.now());

  const allEvents = useMemo(() => {
    return (eventsData as EventRecord[])
      .sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime());
  }, []);

  const upcomingEvents = useMemo(() => {
    return allEvents.filter((event) => new Date(event.startAt).getTime() >= now);
  }, [allEvents, now]);

  const hasUpcomingEvents = upcomingEvents.length > 0;
  const activeEvents = hasUpcomingEvents ? upcomingEvents : allEvents;

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

  return (
    <div className="page page--events">
      <section className="page-hero">
        <div>
          <p className="eyebrow">遊ぶ場所</p>
          <h2>首都圏イベント</h2>
          <p className="page-copy">
            東京・神奈川・埼玉・千葉のスマブラDXイベントを、地図と一覧で見られるページです。
            start.gg から毎日まとめて、場所とリンクが すぐわかるようにしています。
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
            <span className="stat-chip__value">start.gg</span>
            <span className="stat-chip__label">元ソース</span>
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

          <div className="metro-map" role="img" aria-label="首都圏イベントの地図">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="metro-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100" height="100" fill="#0b1120" />
              <rect x="0" y="0" width="100" height="100" fill="url(#metro-grid)" />
              <circle cx="41" cy="36" r="18" fill="rgba(164, 198, 57, 0.08)" />
              <circle cx="63" cy="53" r="22" fill="rgba(255, 140, 0, 0.06)" />
              {visibleEvents.map((event) => {
                const x = ((event.longitude - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
                const y = 100 - ((event.latitude - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 100;
                const fill = event.type === 'tournament' ? '#a4c639' : '#ff8c00';

                return (
                  <circle key={event.id} cx={x} cy={y} r="1.7" fill={fill}>
                    <title>{`${event.title} · ${prefectureLabels[event.prefecture]}`}</title>
                  </circle>
                );
              })}
            </svg>
          </div>

          <p className="event-panel__note">
            {latestVerification
              ? hasUpcomingEvents
                ? `最新確認: ${formatWindow(latestVerification)}`
                : `今後の予定がないため、最後に確認できた記録を表示中: ${formatWindow(latestVerification)}`
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

                  <p className="event-card__window">{formatWindow(event.startAt, event.endAt)}</p>
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
