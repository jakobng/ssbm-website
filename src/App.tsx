import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Techniques from './components/Techniques';
import Characters from './components/Characters';
import './App.css';

const NavigationHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = event.key.toLowerCase();
      if (key === 'a') {
        navigate('/history');
      } else if (key === 'b') {
        navigate('/techniques');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <NavigationHandler />
      <div className="crt-overlay"></div>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation Bar */}
        <nav style={{
          background: 'var(--gc-indigo)',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '4px solid var(--gc-indigo-dark)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            fontFamily: 'var(--font-pixel)', 
            color: 'white',
            fontSize: '1.2rem'
          }}>
            SSBM<span style={{ color: 'var(--gc-accent-orange)' }}>64</span>
          </Link>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/history" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-pixel)' }}>HISTORY</Link>
            <Link to="/techniques" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-pixel)' }}>GENERAL</Link>
            <Link to="/characters" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-pixel)' }}>FIGHTERS</Link>
          </div>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{
          padding: '20px',
          textAlign: 'center',
          color: 'var(--gc-silver)',
          fontSize: '0.7rem',
          borderTop: '2px solid var(--gc-indigo)'
        }}>
          <p>PROPERTY OF NINTENDO. NO RIGHTS RESERVED. (JUST A PROJECT)</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
