import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Techniques from './components/Techniques';
import Characters from './components/Characters';
import TokyoEvents from './components/TokyoEvents';
import './App.css';

const App: React.FC = () => {
  return (
    <Router basename="/ssbm-website">
      <div className="crt-overlay" />
      <div className="app-shell">
        <header className="topbar">
          <NavLink to="/" className="topbar__brand">
            スマブラ<span>DX</span>
          </NavLink>

          <nav className="topbar__nav" aria-label="メインメニュー">
            <NavLink to="/history" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              歴史
            </NavLink>
            <NavLink to="/techniques" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              遊び方
            </NavLink>
            <NavLink to="/characters" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              ファイター
            </NavLink>
            <NavLink to="/events" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              大会
            </NavLink>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/events" element={<TokyoEvents />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
