import React from 'react';
import { fighters, type FighterData } from '../data/gameData';

const getCardStyle = (fighter: FighterData): React.CSSProperties => ({
  '--fighter-accent': fighter.color,
} as React.CSSProperties);

const Characters: React.FC = () => {
  return (
    <div className="page page--roster">
      <section className="page-hero">
        <div>
          <p className="eyebrow">ファイター</p>
          <h2>大会でよく見るファイター</h2>
          <p className="page-copy">
            ここでは、まず大会でよく使われる上位キャラだけにしぼります。
            細かい技より先に、落下タイプと戦い方のイメージをつかむための一覧です。
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">{fighters.length}</span>
            <span className="stat-chip__label">掲載キャラ</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">上位のみ</span>
            <span className="stat-chip__label">大会目線</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">3</span>
            <span className="stat-chip__label">落下タイプ</span>
          </div>
        </div>
      </section>

      <section className="fighter-overview" aria-label="大会で使われるファイター一覧">
        {fighters.map((fighter) => (
          <article key={fighter.id} className="fighter-card fighter-card--overview glass-panel" style={getCardStyle(fighter)}>
            <div className="fighter-card__portrait">
              {fighter.image ? (
                <img src={fighter.image} alt={fighter.name} />
              ) : (
                <div className="fighter-card__emblem">
                  <span>{fighter.emblem}</span>
                </div>
              )}
            </div>

            <div className="fighter-card__body">
              <div className="fighter-card__heading">
                <div>
                  <p className="fighter-card__tier">{fighter.tier}</p>
                  <h3>{fighter.name}</h3>
                  <p className="fighter-card__title">{fighter.title}</p>
                </div>
              </div>

              <p className="fighter-card__summary">{fighter.summary}</p>

              <div className="fighter-card__meta">
                <div className="info-pill">
                  <span className="info-pill__label">落下</span>
                  <span className="info-pill__value">{fighter.fallType}</span>
                </div>
                <div className="info-pill">
                  <span className="info-pill__label">型</span>
                  <span className="info-pill__value">{fighter.archetype}</span>
                </div>
              </div>

              <div className="fighter-card__tags">
                {fighter.strengths.map((strength) => (
                  <span key={strength}>{strength}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Characters;
