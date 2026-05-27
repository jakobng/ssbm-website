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
    era: '前の時代',
    years: '2001 - 2004',
    title: '最初の つよい人たち',
    summary:
      'スマブラDXは、ちいさな大会や 口コミから 広がっていきました。まだ 人は少ないですが、Ken、Isai、Azen たちが ゲームの強さを しめしました。',
    takeaway:
      'ここは はじまりの話です。ゲームは ずっと深くて、みんなで その深さを 見つけていきました。',
    visualTitle: '土台づくり',
    visualNote: '最初の有名な人たちが、DXを 本気の対戦ゲームに しました。',
    players: ['Ken', 'Isai', 'Azen', 'PC Chris'],
    milestones: [
      {
        label: '地域ごとの色',
        detail: '場所ごとに、ちがう くせや たたかい方が できました。',
      },
      {
        label: '発見の時代',
        detail: 'だれも教えていない うごきや コンボを、みんなで 見つけていきました。',
      },
      {
        label: '大会の文化',
        detail: 'ただの遊びではなく、試合とライバルの 文化が 生まれました。',
      },
    ],
    accent: '#9b8bd5',
  },
  {
    id: 'dark-ages',
    era: '暗黒期 / 五神',
    years: '2008 - 2014',
    title: '人はへっても、強さはもっと上へ',
    summary:
      'Brawl の発売や 任天堂のサポート低下で、シーンは しばらく しずかになりました。でも その中で、Armada、Mew2King、Mang0、Hungrybox、PPMD が いつも強く、五神と よばれるようになりました。',
    takeaway:
      'この時代で、DXは 伝説みたいなゲームに なりました。まわりが さめても、最強の人たちは ずっと基準を 上げつづけました。',
    visualTitle: '五神',
    visualNote: 'トップの強さが ものさしになり、どの大会も その人たちと くらべられました。',
    players: ['Armada', 'Mew2King', 'Mang0', 'Hungrybox', 'PPMD'],
    milestones: [
      {
        label: 'Brawl で流れが変わる',
        detail: 'スマブラの話は いったん Brawl に うつり、DXへの ささえは へりました。',
      },
      {
        label: '五神が頂点',
        detail: '少ない人たちが、何年も 「世界一」の 形を きめました。',
      },
      {
        label: '伝説になる',
        detail: 'シーンは小さくなっても、上の戦いが強くて 物語は もっと大きく なりました。',
      },
    ],
    accent: '#e60012',
  },
  {
    id: 'modern',
    era: '今の時代',
    years: '2015 - now',
    title: '強い人は こわせる。シーンは 今も 生きている',
    summary:
      'Leffen が 五神を たおし、最強は ぜったいでは ないと しめしました。そのあと Zain が 安定した強さを ひっぱり、Slippi と ネット対戦で もっと多くの人が 入りやすく なりました。',
    takeaway:
      'この時代を見ると、DX が 今も大事な理由が わかります。古いゲームでも、今も うごいていて、新しい人にも 開かれています。',
    visualTitle: '新しい基準',
    visualNote: 'Leffen から Zain まで、今のシーンは むかしと今が いっしょに ある感じです。',
    players: ['Leffen', 'Zain', 'Slippi', '新しい世代'],
    milestones: [
      {
        label: 'Leffen が神話をこわす',
        detail: 'あたらしい王者が、昔の並びは 変えられると しめしました。',
      },
      {
        label: 'Zain が頂点をまとめる',
        detail: '安定して強い人が、新しい ふつうに なりました。',
      },
      {
        label: '入りやすくなる',
        detail: 'ネットの道具や 地元の場で、初心者も 入りやすく なりました。',
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
          <p className="eyebrow">年表</p>
          <h2>なぜ DX が 今も 大事か</h2>
          <p className="page-copy">
            はじめての人向けに、3つの時代で ざっくり まとめました。小さな流れから、今も つづく 対戦の場に なるまでの話です。
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">3</span>
            <span className="stat-chip__label">3つの時代</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">5</span>
            <span className="stat-chip__label">五神</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">今</span>
            <span className="stat-chip__label">今も成長中</span>
          </div>
        </div>
      </section>

      <section className="history-rail glass-panel" aria-label="歴史のまとめ">
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
                <span>初心者メモ</span>
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
                <span>{index === 1 ? '伝説の時代' : index === 2 ? '今の流れ' : 'はじまり'}</span>
                <h4>{era.visualTitle}</h4>
                <p>{era.visualNote}</p>
              </div>

              <div className="history-era__players" aria-label={`${era.era} の選手`}>
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
