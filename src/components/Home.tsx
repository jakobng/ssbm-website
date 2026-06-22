import React from 'react';

const asset = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

const Home: React.FC = () => {
  return (
    <div className="page page--home">
      <section className="hero-shell">
        <figure className="home-hero-image" aria-label="スマブラDXのパッケージ">
          <img src={asset('images/history/melee-box.jpg')} alt="スマブラDXのゲームキューブ版パッケージ" />
        </figure>

        <div className="hero-copy">
          <p className="eyebrow">初心者ガイド</p>
          <h1>スマブラDX</h1>
          <p className="hero-copy__lede">
            スマブラDXは、2001年にゲームキューブで出た任天堂の対戦アクションゲームです。
            今も世界中で大会が開かれ、プロの選手もいます。
            このサイトは、はじめての人がゲームとコミュニティを知るための入門ページです。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
