import React from 'react';
import MovePreview from './MovePreview';
import { commonTechniques } from '../data/gameData';

const Techniques: React.FC = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Core Movement</p>
          <h2>共通テクニック</h2>
          <p className="page-copy">
            以前より密度を増やし、試合中に本当に使う基礎を並べました。
            それぞれに簡単な動きの表現を付けて、見た目でも思い出しやすくしています。
          </p>
        </div>
        <div className="stat-strip">
          <div className="stat-chip">
            <span className="stat-chip__value">{commonTechniques.length}</span>
            <span className="stat-chip__label">techniques</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip__value">DX</span>
            <span className="stat-chip__label">movement first</span>
          </div>
        </div>
      </section>

      <div className="technique-grid">
        {commonTechniques.map((tech) => (
          <article key={tech.name} className="technique-card glass-panel">
            <div className="technique-card__header">
              <div>
                <p className="technique-card__input">入力: {tech.input}</p>
                <h3>{tech.name}</h3>
              </div>
              <span className="technique-card__tag">{tech.purpose}</span>
            </div>
            <p className="technique-card__detail">{tech.detail}</p>
            <MovePreview motion={tech.motion} accent="var(--gc-accent-green)" label={tech.name} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Techniques;
