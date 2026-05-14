import React, { useState } from 'react';
import MovePreview from './MovePreview';
import { fighters, type FighterData } from '../data/gameData';

const getCardStyle = (fighter: FighterData): React.CSSProperties => ({
  '--fighter-accent': fighter.color,
} as React.CSSProperties);

const Characters: React.FC = () => {
  const [selectedId, setSelectedId] = useState(fighters[0].id);
  const selected = fighters.find((fighter) => fighter.id === selectedId) ?? fighters[0];

  return (
    <div className="page page--roster">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Character Lab</p>
          <h2>ファイターを選択</h2>
          <p className="page-copy">
            4体だった一覧を、試合の見え方が変わる8体のロスターへ拡張しました。
            それぞれの代表技は、GIFの代わりにローカルアニメーションで再現しています。
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">{fighters.length}</span>
            <span className="stat-chip__label">fighters</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">{fighters.reduce((total, fighter) => total + fighter.moves.length, 0)}</span>
            <span className="stat-chip__label">moves</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">100%</span>
            <span className="stat-chip__label">local motion</span>
          </div>
        </div>
      </section>

      <div className="roster-layout">
        <aside className="roster-list glass-panel">
          {fighters.map((fighter) => {
            const isSelected = fighter.id === selected.id;

            return (
              <button
                key={fighter.id}
                type="button"
                className={`fighter-card${isSelected ? ' fighter-card--active' : ''}`}
                style={getCardStyle(fighter)}
                onClick={() => setSelectedId(fighter.id)}
              >
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
                  <div>
                    <h3>{fighter.name}</h3>
                    <p className="fighter-card__title">{fighter.title}</p>
                  </div>
                  <p className="fighter-card__summary">{fighter.summary}</p>
                  <div className="fighter-card__tags">
                    {fighter.strengths.slice(0, 2).map((strength) => (
                      <span key={strength}>{strength}</span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </aside>

        <section className="fighter-detail glass-panel" style={getCardStyle(selected)}>
          <div className="fighter-detail__header">
            <div className="fighter-detail__identity">
              <p className="eyebrow">Selected Fighter</p>
              <h3>{selected.name}</h3>
              <p className="fighter-detail__title">{selected.title}</p>
              <p className="fighter-detail__summary">{selected.summary}</p>
            </div>

            <div className="fighter-detail__portrait">
              {selected.image ? (
                <img src={selected.image} alt={selected.name} />
              ) : (
                <div className="fighter-card__emblem fighter-card__emblem--large">
                  <span>{selected.emblem}</span>
                </div>
              )}
            </div>
          </div>

          <div className="fighter-detail__meta">
            <div className="info-pill">
              <span className="info-pill__label">style</span>
              <span className="info-pill__value">{selected.style}</span>
            </div>
            <div className="info-pill">
              <span className="info-pill__label">moves</span>
              <span className="info-pill__value">{selected.moves.length}</span>
            </div>
            <div className="info-pill">
              <span className="info-pill__label">accent</span>
              <span className="info-pill__value">{selected.color}</span>
            </div>
          </div>

          <div className="fighter-detail__strengths">
            {selected.strengths.map((strength) => (
              <span key={strength} className="strength-pill">
                {strength}
              </span>
            ))}
          </div>

          <div className="move-grid">
            {selected.moves.map((move) => (
              <article key={move.name} className="move-card">
                <div className="move-card__copy">
                  <p className="move-card__note">{move.note}</p>
                  <h4>{move.name}</h4>
                  <p className="move-card__detail">{move.detail}</p>
                </div>
                <MovePreview motion={move.motion} accent={selected.color} label={move.name} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Characters;
