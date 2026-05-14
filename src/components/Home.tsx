import React from 'react';
import { Link } from 'react-router-dom';
import { fighters } from '../data/gameData';

const Home: React.FC = () => {
  const featuredFighters = fighters.slice(0, 4);
  const totalMoves = fighters.reduce((total, fighter) => total + fighter.moves.length, 0);

  return (
    <div className="page page--home">
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Smash Bros. Melee Field Guide</p>
          <h1>大乱闘スマッシュブラザーズ DX</h1>
          <p className="hero-copy__lede">
            ただの紹介サイトではなく、キャラの個性と実戦で使う動きを一目で掴める
            フィールドガイドに更新しました。
          </p>

          <div className="hero-actions">
            <Link to="/characters" className="gc-button a-button">
              ファイターを見る
            </Link>
            <Link to="/techniques" className="gc-button b-button">
              テクニックを見る
            </Link>
          </div>

          <div className="stat-strip stat-strip--hero">
            <div className="stat-chip">
              <span className="stat-chip__value">{fighters.length}</span>
              <span className="stat-chip__label">fighters</span>
            </div>
            <div className="stat-chip">
              <span className="stat-chip__value">{totalMoves}</span>
              <span className="stat-chip__label">signature moves</span>
            </div>
            <div className="stat-chip">
              <span className="stat-chip__value">8</span>
              <span className="stat-chip__label">core movement drills</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel glass-panel">
          <p className="hero-panel__label">featured roster</p>
          <div className="featured-grid">
            {featuredFighters.map((fighter) => (
              <div key={fighter.id} className="featured-card" style={{ '--fighter-accent': fighter.color } as React.CSSProperties}>
                <div className="featured-card__portrait">
                  {fighter.image ? (
                    <img src={fighter.image} alt={fighter.name} />
                  ) : (
                    <span>{fighter.emblem}</span>
                  )}
                </div>
                <div>
                  <h3>{fighter.name}</h3>
                  <p>{fighter.title}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="home-grid">
        <div className="glass-panel home-card">
          <p className="eyebrow">What changed</p>
          <h3>より多くのキャラ、より多くの動き</h3>
          <p>
            4体だけの一覧から、8体のロスターに拡張しました。各キャラは4つの代表技を持ち、
            それぞれに合わせたミニアニメーションを再生します。
          </p>
        </div>
        <div className="glass-panel home-card">
          <p className="eyebrow">Preview style</p>
          <h3>GIFより正確で統一感のある表現</h3>
          <p>
            既存のGIFが合わない場合でも、ローカルで描く演出なら技ごとの形を正確に保てます。
            これは見た目の統一にも、読みやすさにも効きます。
          </p>
        </div>
        <div className="glass-panel home-card">
          <p className="eyebrow">Explore</p>
          <h3>キャラから入って、テクニックに降りる</h3>
          <p>
            上から下へ読む導線にしてあるので、好きなファイターを見つけてから共通技へ戻る流れが自然です。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
