import React from 'react';

type HistoryEra = {
  id: string;
  era: string;
  years: string;
  title: string;
  summary: string;
  takeaway: string;
  visualTitle: string;
  visualNote: string;
  players: string[];
  milestones: Array<{
    label: string;
    detail: string;
  }>;
  accent: string;
  reverse?: boolean;
};

const eras: HistoryEra[] = [
  {
    id: 'pre-era',
    era: 'Pre-era',
    years: '2001 - 2004',
    title: 'The first regional heroes',
    summary:
      'Melee starts out as a game people discover through local events and word of mouth. The early scene is smaller, rawer, and very personality-driven, with players like Ken, Isai, and Azen showing what the game can become when people push it hard.',
    takeaway:
      'For beginners, this is the origin story: the game was always deep, but the scene had to learn that depth together.',
    visualTitle: 'Scene foundations',
    visualNote: 'The first stars make Melee feel like a real competitive game instead of a party game with secrets.',
    players: ['Ken', 'Isai', 'Azen', 'PC Chris'],
    milestones: [
      {
        label: 'Local identity',
        detail: 'Different regions develop their own habits, rivalries, and play styles.',
      },
      {
        label: 'Discovery era',
        detail: 'Players keep finding new movement and combo ideas that were never really explained by the game.',
      },
      {
        label: 'Tournament culture',
        detail: 'The game starts building a real match-and-rivalry history instead of just casual play.',
      },
    ],
    accent: '#9b8bd5',
  },
  {
    id: 'dark-ages',
    era: 'Dark Ages / Five Gods',
    years: '2008 - 2014',
    title: 'The scene shrinks, but the ceiling gets higher',
    summary:
      'Brawl comes out, Nintendo pulls support, and the community loses mainstream momentum. But the top level becomes legendary anyway: Armada, Mew2King, Mang0, Hungrybox, and PPMD dominate so consistently that people start calling them the Five Gods.',
    takeaway:
      'This is the era that made Melee feel mythical. Even when the outside world cooled off, the best players kept raising the standard.',
    visualTitle: 'Five Gods',
    visualNote: 'Elite play becomes the benchmark, and every major run gets measured against the gods.',
    players: ['Armada', 'Mew2King', 'Mang0', 'Hungrybox', 'PPMD'],
    milestones: [
      {
        label: 'Brawl changes the spotlight',
        detail: 'The broader Smash conversation moves away from Melee, and support gets thinner.',
      },
      {
        label: 'Five Gods rule the top',
        detail: 'A small group of players defines what “best in the world” means for years.',
      },
      {
        label: 'Mythic status',
        detail: 'The scene gets smaller, but the story gets bigger because the rivalry at the top is so strong.',
      },
    ],
    accent: '#e60012',
  },
  {
    id: 'modern',
    era: 'Modern',
    years: '2015 - now',
    title: 'Gods can be beaten, and the scene stays alive',
    summary:
      'Leffen starts slaying gods, proving that the top tier is not untouchable. Later, Zain helps consolidate the competitive scene around a new standard of consistency, while Slippi and online play make it easier for more people to join and stay involved.',
    takeaway:
      'This era shows why Melee still matters now: the scene is old, but it is still active, still evolving, and still open to new players.',
    visualTitle: 'New standard',
    visualNote: 'From Leffen to Zain, the modern scene feels both historic and current at the same time.',
    players: ['Leffen', 'Zain', 'Slippi', 'New generation'],
    milestones: [
      {
        label: 'Leffen breaks the myth',
        detail: 'A new champion proves the old hierarchy can be challenged.',
      },
      {
        label: 'Zain consolidates the top',
        detail: 'Consistent championship-level play becomes the new expectation.',
      },
      {
        label: 'Accessibility improves',
        detail: 'Online tooling and local scenes make it much easier for beginners to get involved.',
      },
    ],
    accent: '#a4c639',
    reverse: true,
  },
];

const History: React.FC = () => {
  return (
    <div className="page page--history">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Timeline</p>
          <h2>Why Melee still matters</h2>
          <p className="page-copy">
            If you are new, this is the fast version of the story. Three eras explain how Melee went from a local curiosity
            to a living competitive scene that still has room for new players.
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">3</span>
            <span className="stat-chip__label">major eras</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">5</span>
            <span className="stat-chip__label">Five Gods</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">Now</span>
            <span className="stat-chip__label">still growing</span>
          </div>
        </div>
      </section>

      <section className="history-rail glass-panel" aria-label="History overview">
        {eras.map((era, index) => (
          <a key={era.id} href={`#${era.id}`} className="history-rail__card" style={{ '--era-accent': era.accent } as React.CSSProperties}>
            <span className="history-rail__index">{String(index + 1).padStart(2, '0')}</span>
            <strong>{era.era}</strong>
            <p>{era.years}</p>
          </a>
        ))}
      </section>

      <div className="history-timeline">
        {eras.map((era, index) => (
          <article
            key={era.id}
            id={era.id}
            className={`history-era glass-panel${era.reverse ? ' history-era--reverse' : ''}`}
            style={{ '--era-accent': era.accent } as React.CSSProperties}
          >
            <span className="history-era__marker" aria-hidden="true" />
            <div className="history-era__content">
              <p className="eyebrow">{era.era}</p>
              <h3>{era.title}</h3>
              <p className="history-era__summary">{era.summary}</p>

              <div className="history-era__takeaway">
                <span>Beginner takeaway</span>
                <p>{era.takeaway}</p>
              </div>

              <ul className="history-era__milestones">
                {era.milestones.map((milestone) => (
                  <li key={milestone.label}>
                    <strong>{milestone.label}</strong>
                    <p>{milestone.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="history-era__visual">
              <p className="history-era__years">{era.years}</p>
              <div className="history-era__hero">
                <span>{index === 1 ? 'Legendary top era' : index === 2 ? 'Modern revival' : 'Origin story'}</span>
                <h4>{era.visualTitle}</h4>
                <p>{era.visualNote}</p>
              </div>

              <div className="history-era__players" aria-label={`${era.era} players`}>
                {era.players.map((player) => (
                  <span key={player}>{player}</span>
                ))}
              </div>
            </aside>
          </article>
        ))}
      </div>
    </div>
  );
};

export default History;
