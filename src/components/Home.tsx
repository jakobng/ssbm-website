import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page page--home">
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Beginner Guide</p>
          <h1>Learn Melee without getting lost</h1>
          <p className="hero-copy__lede">
            Start with the basics, find a place to play, and understand the history that made the scene what it is.
            This site is built to help beginners learn the game, get involved, and figure out why Melee still matters.
          </p>

          <div className="hero-actions">
            <Link to="/techniques" className="gc-button a-button">
              How to play
            </Link>
            <Link to="/events" className="gc-button b-button">
              Where to play
            </Link>
            <Link to="/history" className="gc-button">
              Why to play
            </Link>
          </div>

          <div className="stat-strip stat-strip--hero">
            <div className="stat-chip">
              <span className="stat-chip__value">3</span>
              <span className="stat-chip__label">core sections</span>
            </div>
            <div className="stat-chip">
              <span className="stat-chip__value">Slippi</span>
              <span className="stat-chip__label">online play</span>
            </div>
            <div className="stat-chip">
              <span className="stat-chip__value">Tokyo</span>
              <span className="stat-chip__label">offline scene</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel glass-panel">
          <p className="hero-panel__label">start here</p>
          <div className="guide-steps">
            <div className="guide-step">
              <span className="guide-step__index">01</span>
              <div>
                <h3>Learn the game</h3>
                <p>Movement, shield, ledge, and the beginner tech that changes everything.</p>
              </div>
            </div>
            <div className="guide-step">
              <span className="guide-step__index">02</span>
              <div>
                <h3>Find a scene</h3>
                <p>Use Slippi online or jump into Tokyo venues and tournaments when you want offline games.</p>
              </div>
            </div>
            <div className="guide-step">
              <span className="guide-step__index">03</span>
              <div>
                <h3>Understand the why</h3>
                <p>The history explains why Melee still feels alive, competitive, and worth learning now.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="home-grid">
        <div className="glass-panel home-card">
          <p className="eyebrow">How to play</p>
          <h3>Start with the basics</h3>
          <p>
            Learn how the game flows, what movement looks like, and the beginner techniques that show up in every match.
          </p>
          <Link to="/techniques" className="card-link">
            Go to how to play
          </Link>
        </div>
        <div className="glass-panel home-card">
          <p className="eyebrow">Where to play</p>
          <h3>Slippi and the Tokyo scene</h3>
          <p>
            Play online right away with Slippi, or find local venues and tournaments in Tokyo when you want real bracket energy.
          </p>
          <Link to="/events" className="card-link">
            Go to where to play
          </Link>
        </div>
        <div className="glass-panel home-card">
          <p className="eyebrow">Why to play</p>
          <h3>Competition, identity, and history</h3>
          <p>
            If you like fighting games, Melee gives you a deep competitive scene and a place to grow into a new version of yourself.
          </p>
          <Link to="/history" className="card-link">
            Go to why to play
          </Link>
        </div>
      </section>

      <section className="home-footer glass-panel">
        <div>
          <p className="eyebrow">Optional deep dive</p>
          <h3>Characters and matchup culture</h3>
          <p>
            Once the basics make sense, the fighter roster page is a good next stop for seeing how different characters shape the game.
          </p>
        </div>
        <Link to="/characters" className="gc-button">
          View fighters
        </Link>
      </section>
    </div>
  );
};

export default Home;
