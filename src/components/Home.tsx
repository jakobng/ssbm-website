import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>大乱闘スマッシュブラザーズ</h1>
        <h1 style={{ fontSize: '4.5rem', color: 'white', textShadow: '4px 4px var(--gc-accent-red)' }}>DX</h1>
        <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--gc-silver)' }}>
          究極のガイド ＆ 歴史
        </p>
      </div>

      <Link to="/history" className="gc-button a-button" style={{ fontSize: '1.5rem', padding: '20px 40px' }}>
        スタートボタンを押して
      </Link>

      <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
        <div style={{ border: '2px solid var(--gc-indigo)', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'var(--gc-accent-green)', fontWeight: 'bold' }}>A</span>
        </div>
        <p style={{ alignSelf: 'center' }}>歴史</p>
        
        <div style={{ border: '2px solid var(--gc-indigo)', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'var(--gc-accent-red)', fontWeight: 'bold' }}>B</span>
        </div>
        <p style={{ alignSelf: 'center' }}>テクニック</p>
      </div>
    </div>
  );
};

export default Home;
