import React from 'react';

const Techniques: React.FC = () => {
  const techs = [
    {
      name: 'WAVEDASH',
      input: 'Jump -> Air Dodge (Down/Diagonal)',
      desc: 'The foundational movement tech. Allows sliding while standing, enabling any ground attack while moving.'
    },
    {
      name: 'L-CANCEL',
      input: 'L, R, or Z (7 frames before landing)',
      desc: 'Halves landing lag on aerial attacks. Crucial for maintaining pressure and continuing combos.'
    },
    {
      name: 'DASH DANCE',
      input: 'Flick Stick Left/Right rapidly',
      desc: 'Weaving in and out of range during initial dash. Baits attacks and creates movement ambiguity.'
    },
    {
      name: 'DI (Directional Influence)',
      input: 'Hold Stick perpendicular to launch',
      desc: 'The primary survival mechanic. Changes your trajectory after being hit to avoid blast zones.'
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>UNIVERSAL TECHNIQUES</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {techs.map(tech => (
          <div key={tech.name} className="glass-panel" style={{ borderLeft: '5px solid var(--gc-accent-orange)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{tech.name}</h3>
            <p style={{ color: 'var(--gc-accent-green)', fontSize: '0.8rem', marginBottom: '10px', fontFamily: 'var(--font-pixel)' }}>
              INPUT: {tech.input}
            </p>
            <p style={{ color: 'var(--gc-silver)', fontSize: '0.9rem' }}>{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techniques;
