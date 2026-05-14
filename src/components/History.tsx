import React from 'react';

const History: React.FC = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Timeline</p>
          <h2>スマブラDX年代記</h2>
          <p className="page-copy">
            発売の背景から対戦シーンの成熟まで、DXがどうやって今の形になったのかを短く追えるページです。
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">2001</span>
            <span className="stat-chip__label">release year</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">Slippi</span>
            <span className="stat-chip__label">modern revival</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">20+</span>
            <span className="stat-chip__label">years of legacy</span>
          </div>
        </div>
      </section>

      <div className="home-grid">
        <article className="glass-panel home-card">
          <p className="eyebrow">2001</p>
          <h3>創世記</h3>
          <p>
            『大乱闘スマッシュブラザーズDX』は、ニンテンドーゲームキューブの旗艦タイトルとして発売されました。
            前作からキャラ数、スピード、技術的な深さのすべてが大きく拡張されました。
          </p>
        </article>

        <article className="glass-panel home-card">
          <p className="eyebrow">Discovery</p>
          <h3>対戦シーンの爆発</h3>
          <p>
            ウェーブダッシュやLキャンセルなど、開発側が全面的に想定していなかったテクニックが発見され、
            DXは一気に超高速の対戦ゲームとして再発見されました。
          </p>
        </article>

        <article className="glass-panel home-card">
          <p className="eyebrow">Today</p>
          <h3>現在の遺産</h3>
          <p>
            Major大会やSlippiの普及を通じて、20年以上前の作品が今も遊ばれ続けています。
            競技シーンの成熟とコミュニティの熱量が、DXを継続的に更新し続けています。
          </p>
        </article>
      </div>
    </div>
  );
};

export default History;
