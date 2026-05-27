import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page page--home">
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">初心者ガイド</p>
          <h1>スマブラDX</h1>
          <p className="hero-copy__lede">
            まずは ルール と うごき を おぼえて、あそぶ場所を みつけて、れきしを すこし知る。
            このサイトは、はじめての人が ゲームを りかいして、まわりに まざれるように つくりました。
          </p>

          <div className="hero-actions">
            <Link to="/techniques" className="gc-button a-button">
              遊び方
            </Link>
            <Link to="/events" className="gc-button b-button">
              遊ぶ場所
            </Link>
            <Link to="/history" className="gc-button">
              なぜ遊ぶか
            </Link>
          </div>

          <div className="stat-strip stat-strip--hero">
            <div className="stat-chip">
              <span className="stat-chip__value">3</span>
              <span className="stat-chip__label">おもな3つ</span>
            </div>
            <div className="stat-chip">
              <span className="stat-chip__value">Slippi</span>
              <span className="stat-chip__label">ネット対戦</span>
            </div>
            <div className="stat-chip">
              <span className="stat-chip__value">東京</span>
              <span className="stat-chip__label">オフの場</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel glass-panel">
          <p className="hero-panel__label">ここから</p>
          <div className="guide-steps">
            <div className="guide-step">
              <span className="guide-step__index">01</span>
              <div>
                <h3>ゲームを知る</h3>
                <p>うごき、シールド、崖、そして さいしょに おぼえる技を みます。</p>
              </div>
            </div>
            <div className="guide-step">
              <span className="guide-step__index">02</span>
              <div>
                <h3>対戦の場を見つける</h3>
                <p>Slippi で ネット対戦をしたり、東京の会場や大会に 行けます。</p>
              </div>
            </div>
            <div className="guide-step">
              <span className="guide-step__index">03</span>
              <div>
                <h3>なぜ遊ぶかを知る</h3>
                <p>れきしを知ると、このゲームが 今も おもしろい理由が わかります。</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="home-grid">
        <div className="glass-panel home-card">
          <p className="eyebrow">遊び方</p>
          <h3>まずは きほん</h3>
          <p>
            ルール、うごき方、そして どの試合でも つかう きほんの技を まとめています。
          </p>
          <Link to="/techniques" className="card-link">
            遊び方を見る
          </Link>
        </div>
        <div className="glass-panel home-card">
          <p className="eyebrow">遊ぶ場所</p>
          <h3>Slippi と 東京</h3>
          <p>
            すぐに Slippi で ネット対戦をしたり、東京で 会場や大会を さがせます。
          </p>
          <Link to="/events" className="card-link">
            遊ぶ場所を見る
          </Link>
        </div>
        <div className="glass-panel home-card">
          <p className="eyebrow">なぜ遊ぶか</p>
          <h3>対戦のよろこび</h3>
          <p>
            たいせんゲームが好きなら、上をめざす楽しさや、自分を 変えていく感じが あります。
          </p>
          <Link to="/history" className="card-link">
            なぜ遊ぶかを見る
          </Link>
        </div>
      </section>

      <section className="home-footer glass-panel">
        <div>
          <p className="eyebrow">もう少し見る</p>
          <h3>ファイターと 相性</h3>
          <p>
            きほんが わかったら、ファイターのページで それぞれの ちがいを 見るのが おすすめです。
          </p>
        </div>
        <Link to="/characters" className="gc-button">
          ファイターを見る
        </Link>
      </section>
    </div>
  );
};

export default Home;
