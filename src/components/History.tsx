import React from 'react';

const History: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>CHRONICLES OF MELEE</h2>
      
      <div className="glass-panel" style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'var(--gc-accent-green)', marginBottom: '10px' }}>2001: THE GENESIS</h3>
        <p style={{ lineHeight: '1.6', color: 'var(--gc-silver)' }}>
          Developed in just 13 months by HAL Laboratory under the direction of Masahiro Sakurai, 
          Super Smash Bros. Melee was released as a flagship title for the Nintendo GameCube. 
          It refined the formula of the N64 original, adding 14 new characters and introducing 
          technical depth that would define a generation.
        </p>
      </div>

      <div className="glass-panel" style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'var(--gc-accent-red)', marginBottom: '10px' }}>THE COMPETITIVE BOOM</h3>
        <p style={{ lineHeight: '1.6', color: 'var(--gc-silver)' }}>
          While intended as a party game, players discovered unintended mechanics like Wavedashing 
          and L-canceling. This transformed Melee into a high-speed, technical fighting game. 
          The scene survived the release of sequels, bolstered by the "Five Gods" era (Mew2King, 
          Mango, Armada, Hungrybox, and PPMD).
        </p>
      </div>

      <div className="glass-panel">
        <h3 style={{ color: 'var(--gc-accent-orange)', marginBottom: '10px' }}>A LEGACY UNMATCHED</h3>
        <p style={{ lineHeight: '1.6', color: 'var(--gc-silver)' }}>
          Today, Melee remains a staple at major tournaments like Genesis and The Big House. 
          With community-driven projects like Slippi bringing rollback netplay to the 20-year-old 
          title, the GameCube's greatest masterpiece continues to thrive in the modern era.
        </p>
      </div>
    </div>
  );
};

export default History;
