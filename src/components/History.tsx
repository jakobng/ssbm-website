import React from 'react';

type TimelineEvent = {
  year: string;
  title: string;
  detail: string;
  media: TimelineMedia[];
  side: 'left' | 'right';
};

type TimelineMedia = {
  src: string;
  label: string;
  alt: string;
};

const asset = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: '2001',
    title: 'DX が発売される',
    detail: '最初はパーティーゲームとして遊ばれましたが、すぐに速い動きやコンボを研究する人が出てきました。',
    media: [{ src: asset('images/history/melee-box.jpg'), label: 'スマブラDX', alt: 'スマブラDXのパッケージ' }],
    side: 'left',
  },
  {
    year: '2003 - 2007',
    title: 'Ken の時代',
    detail: 'Ken がマルスで大きく勝ち続け、強い間合い管理と「Ken Combo」が有名になりました。',
    media: [{ src: asset('images/history/ken.jpg'), label: 'Ken', alt: 'Ken Hoang' }],
    side: 'right',
  },
  {
    year: '2008',
    title: 'Brawl 後も DX が残る',
    detail: '新作が出て人は減りました。それでも、DX の深さが好きな人たちは大会と練習を続けました。',
    media: [{ src: asset('images/history/brawl-cover.jpg'), label: 'Brawl', alt: 'スマブラXのパッケージ' }],
    side: 'left',
  },
  {
    year: '2009 - 2014',
    title: '五神の時代',
    detail: 'Armada、Mew2King、Mang0、Hungrybox、PPMD が大きな大会を長く支配しました。',
    media: [
      { src: asset('images/history/armada.jpg'), label: 'Armada', alt: 'Armada' },
      { src: asset('images/history/mew2king.png'), label: 'Mew2King', alt: 'Mew2King' },
      { src: asset('images/history/mang0.jpg'), label: 'Mang0', alt: 'Mang0' },
      { src: asset('images/history/hungrybox.jpg'), label: 'Hungrybox', alt: 'Hungrybox' },
      { src: asset('images/history/ppmd.jpg'), label: 'PPMD', alt: 'PPMD' },
    ],
    side: 'right',
  },
  {
    year: '2013',
    title: 'EVO とドキュメンタリー',
    detail: 'EVO 2013 と映像作品で、DX はまた広く見られるようになりました。昔のゲームではなく、今も戦えるゲームだと伝わりました。',
    media: [
      { src: asset('images/history/evo-2013.png'), label: 'EVO 2013', alt: 'EVO 2013のロゴ' },
      { src: asset('images/history/smash-brothers-dvd.jpg'), label: 'The Smash Brothers', alt: 'The Smash BrothersのDVD画像' },
    ],
    side: 'left',
  },
  {
    year: '2015',
    title: 'Leffen が五神をくずす',
    detail: 'Leffen が五神に勝ち、トップの形は固定ではないと見せました。ここから新しい世代の期待が大きくなります。',
    media: [{ src: asset('images/history/leffen.jpg'), label: 'Leffen', alt: 'Leffen' }],
    side: 'right',
  },
  {
    year: '2018 - 2020',
    title: 'Zain が新しい基準になる',
    detail: 'Zain のマルスは、現代的な練習量と安定感を見せました。スペーシー相手の火力も大きな話題でした。',
    media: [{ src: asset('images/history/zain.jpg'), label: 'Zain', alt: 'Zain' }],
    side: 'left',
  },
  {
    year: '2020',
    title: 'Slippi でネット対戦が広がる',
    detail: 'ロールバックネットコードで、家からでも本格的に対戦できるようになりました。新しい人が入りやすくなった大きな転機です。',
    media: [{ src: asset('images/history/slippi.png'), label: 'Project Slippi', alt: 'Project Slippiのロゴ' }],
    side: 'right',
  },
  {
    year: '2024 - 2026',
    title: '今も大会が続いている',
    detail: '世界大会、地域大会、オンライン大会が続き、DX は今もプレイヤーが研究し続けるゲームです。',
    media: [{ src: asset('images/history/supernova.png'), label: 'Supernova', alt: 'Supernovaのロゴ' }],
    side: 'left',
  },
];

const History: React.FC = () => {
  return (
    <div className="page page--history">
      <section className="page-hero">
        <div>
          <p className="eyebrow">年表</p>
          <h2>DX の大会史</h2>
          <p className="page-copy">
            DX がどう残り、どう強くなってきたかを、一本の年表で見ます。
            細かい話より、まず大きな流れがわかるようにしています。
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">2001</span>
            <span className="stat-chip__label">始まり</span>
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

      <section className="history-timeline" aria-label="スマブラDXの大会史">
        {timelineEvents.map((event) => (
          <article key={`${event.year}-${event.title}`} className={`history-entry history-entry--${event.side}`}>
            <div className="history-entry__marker" aria-hidden="true" />
            <div className={`history-entry__card glass-panel${event.media.length > 1 ? ' history-entry__card--gallery' : ''}`}>
              <div className={`history-entry__media${event.media.length > 1 ? ' history-entry__media--gallery' : ''}`}>
                {event.media.map((media) => (
                  <figure key={media.label} className="history-entry__photo">
                    <img src={media.src} alt={media.alt} loading="lazy" />
                    <figcaption>{media.label}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="history-entry__copy">
                <p className="history-entry__year">{event.year}</p>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default History;
