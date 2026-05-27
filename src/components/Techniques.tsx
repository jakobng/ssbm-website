import React from 'react';
import { Link } from 'react-router-dom';

const Techniques: React.FC = () => {
  return (
    <div className="page page--placeholder">
      <section className="page-hero">
        <div>
          <p className="eyebrow">How to play</p>
          <h2>Coming soon</h2>
          <p className="page-copy">
            We are leaving this section blank for now so we can build the beginner technique guide carefully.
            The full breakdown will live here later.
          </p>
        </div>
      </section>

      <div className="glass-panel placeholder-card">
        <p className="placeholder-card__label">Placeholder</p>
        <h3>Technique guide is still being written</h3>
        <p>
          When this page is ready, it will explain the basics in a beginner-friendly way: movement, shielding, ledge play,
          and the first advanced techniques that matter in real matches.
        </p>
        <Link to="/" className="gc-button a-button">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Techniques;
