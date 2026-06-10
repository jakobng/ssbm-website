import React, { useState } from 'react';

type HistoryMilestone = {
  year: string;
  label: string;
  detail: string;
};

type HistoryImage = {
  src: string;
  alt: string;
  label: string;
};

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
  accent: string;
  ribbon: string;
  images: HistoryImage[];
  milestones: HistoryMilestone[];
};

const asset = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

const heroArt = new URL('../assets/hero.png', import.meta.url).href;

const eras: HistoryEra[] = [
  {
    id: 'pre-era',
    era: '前の時代',
    years: '2001 - 2004',
    title: '最初の強い人たち',
    summary:
      'Ken、Isai、Azen たちが、DX を本気の対戦ゲームにしていきました。まだ人は少ないですが、強いプレイの形が少しずつ見えてきた時代です。',
    takeaway: 'ここは土台の時代です。小さい場でも、発見はすごく多かったです。',
    visualTitle: '土台づくり',
    visualNote: '最初の有名な人たちが、DX の見方を変えました。',
    players: ['Ken', 'Isai', 'Azen', 'PC Chris'],
    accent: '#9b8bd5',
    ribbon: 'はじまり',
    images: [
      { src: heroArt, alt: 'DX の土台を見せるアイコン', label: 'Stage' },
      { src: asset('images/characters/fox.png'), alt: 'Fox', label: 'Fox' },
      { src: asset('images/characters/marth.png'), alt: 'Marth', label: 'Marth' },
    ],
    milestones: [
      {
        year: '2001',
        label: '地域の大会',
        detail: '小さな集まりから、強さの話が広がっていきました。',
      },
      {
        year: '2003',
        label: 'Ken と Isai',
        detail: 'それぞれのやり方で勝つ人が、はっきり目立ちました。',
      },
      {
        year: '2004',
        label: 'Azen の流れ',
        detail: '自由な動きや発想が、シーンの空気を明るくしました。',
      },
    ],
  },
  {
    id: 'dark-ages',
    era: '暗黒期 / 五神',
    years: '2008 - 2014',
    title: '人はへっても、頂点はもっと強い',
    summary:
      'Brawl の時代になり、Nintendo の支えも弱くなりました。でも Armada、Mew2King、Mang0、Hungrybox、PPMD が、ずっと強いままシーンを引っぱりました。',
    takeaway: 'ここで DX は伝説になりました。小さくなっても、上の戦いはずっと熱かったです。',
    visualTitle: '五神',
    visualNote: 'トップの強さがものさしになり、毎回そこが話題でした。',
    players: ['Armada', 'Mew2King', 'Mang0', 'Hungrybox', 'PPMD'],
    accent: '#ff5a5f',
    ribbon: '伝説',
    images: [
      { src: asset('images/characters/sheik.png'), alt: 'Sheik', label: 'Sheik' },
      { src: asset('images/characters/marth.png'), alt: 'Marth', label: 'Marth' },
      { src: asset('images/characters/falco.png'), alt: 'Falco', label: 'Falco' },
    ],
    milestones: [
      {
        year: '2008',
        label: 'Brawl が出る',
        detail: '話題は少しうつり、DX への見方も大きく変わりました。',
      },
      {
        year: '2010',
        label: '五神が支配',
        detail: 'Armada たちが、何年も上の位置を守りつづけました。',
      },
      {
        year: '2013',
        label: '伝説の空気',
        detail: '人が少なくても、上の試合はずっと見ごたえがありました。',
      },
    ],
  },
  {
    id: 'modern',
    era: '今の時代',
    years: '2015 - now',
    title: '神話をこわして、今につなぐ',
    summary:
      'Leffen が五神をたおし、Zain が新しい基準を作りました。Slippi も広がって、初心者も入りやすい場がふえました。',
    takeaway: '今もシーンは生きています。昔の話ではなく、今も動いているゲームです。',
    visualTitle: '新しい基準',
    visualNote: 'Leffen から Zain まで、今のシーンは前より広く、速くなりました。',
    players: ['Leffen', 'Zain', 'Slippi', '新しい世代'],
    accent: '#a4c639',
    ribbon: '現在',
    images: [
      { src: asset('images/characters/fox.png'), alt: 'Fox', label: 'Fox' },
      { src: asset('images/characters/falco.png'), alt: 'Falco', label: 'Falco' },
      { src: heroArt, alt: 'DX の土台を見せるアイコン', label: 'Slippi' },
    ],
    milestones: [
      {
        year: '2015',
        label: 'Leffen が勝つ',
        detail: '昔の並びは変えられると、はっきり見えました。',
      },
      {
        year: '2018',
        label: 'Zain が台頭',
        detail: '安定して強い人が、新しい標準になりました。',
      },
      {
        year: '2020',
        label: 'Slippi で広がる',
        detail: 'ネット対戦が広がって、初心者も入りやすくなりました。',
      },
    ],
  },
];

const History: React.FC = () => {
  const [activeEraId, setActiveEraId] = useState(eras[0].id);
  const activeEra = eras.find((era) => era.id === activeEraId) ?? eras[0];

  return (
    <div className="page page--history">
      <section className="page-hero">
        <div>
          <p className="eyebrow">年表</p>
          <h2>なぜ DX が 今も 大事か</h2>
          <p className="page-copy">
            3つの時代で、DX が どう大きくなったかを ざっくり見ます。上のカードを クリックすると、時代ごとの話に 変わります。
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">3</span>
            <span className="stat-chip__label">時代</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">5</span>
            <span className="stat-chip__label">五神</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">今</span>
            <span className="stat-chip__label">まだ続く</span>
          </div>
        </div>
      </section>

      <section className="history-selector glass-panel" aria-label="時代を選ぶ">
        {eras.map((era, index) => {
          const isActive = era.id === activeEraId;

          return (
            <button
              key={era.id}
              type="button"
              className={`history-selector__card${isActive ? ' is-active' : ''}`}
              style={{ '--era-accent': era.accent } as React.CSSProperties}
              aria-pressed={isActive}
              onClick={() => setActiveEraId(era.id)}
            >
              <span className="history-selector__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="history-selector__ribbon">{era.ribbon}</span>

              <div className="history-selector__poster">
                {era.images.map((image, imageIndex) => (
                  <span key={image.label} className={`history-selector__tile history-selector__tile--${imageIndex + 1}`}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <span>{image.label}</span>
                  </span>
                ))}
              </div>

              <div className="history-selector__copy">
                <p className="history-selector__years">{era.years}</p>
                <strong>{era.era}</strong>
                <p>{era.title}</p>
              </div>
            </button>
          );
        })}
      </section>

      <section className="history-stage glass-panel" style={{ '--era-accent': activeEra.accent } as React.CSSProperties}>
        <div className="history-stage__header">
          <div className="history-stage__heading">
            <p className="eyebrow">{activeEra.era}</p>
            <h3>{activeEra.title}</h3>
            <p className="history-stage__summary">{activeEra.summary}</p>
          </div>

          <div className="history-stage__badge">
            <span>{activeEra.years}</span>
            <strong>{activeEra.visualTitle}</strong>
          </div>
        </div>

        <div className="history-stage__body">
          <div className="history-stage__art" aria-label={`${activeEra.era} のイメージ`}>
            {activeEra.images.map((image, imageIndex) => (
              <figure key={image.label} className={`history-stage__art-tile history-stage__art-tile--${imageIndex + 1}`}>
                <div className="history-stage__art-frame">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="history-stage__copy">
            <div className="history-stage__callout">
              <span>初心者メモ</span>
              <p>{activeEra.takeaway}</p>
            </div>

            <div className="history-stage__note">
              <span>{activeEra.visualTitle}</span>
              <p>{activeEra.visualNote}</p>
            </div>

            <div className="history-stage__players" aria-label={`${activeEra.era} の選手`}>
              {activeEra.players.map((player) => (
                <span key={player}>{player}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="history-stage__timeline" aria-label={`${activeEra.era} の年表メモ`}>
          {activeEra.milestones.map((milestone, index) => (
            <article key={milestone.year} className={`history-note history-note--${(index % 3) + 1}`}>
              <div className="history-note__header">
                <span className="history-note__tag">メモ</span>
                <span className="history-note__year">{milestone.year}</span>
              </div>
              <h4>{milestone.label}</h4>
              <p>{milestone.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default History;
