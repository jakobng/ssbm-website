import React, { useState } from 'react';

interface CharacterData {
  id: string;
  name: string;
  color: string;
  image: string;
  techs: { name: string; desc: string; gif?: string }[];
}

const characters: CharacterData[] = [
  {
    id: 'fox',
    name: 'FOX',
    color: '#E60012',
    // HD Render by David V. Kimball
    image: 'https://i.imgur.com/v8p0E9o.png', 
    techs: [
      { 
        name: 'WAVESHINE', 
        desc: 'Jump-canceling a Frame-1 Reflector (Shine) into a Wavedash. Allows Fox to slide across the stage while the opponent is in hitstun.',
        gif: 'https://www.ssbwiki.com/images/a/a2/Waveshine.gif'
      },
      { 
        name: 'DRILL SHINE', 
        desc: 'Using a multi-hit Down-Air (Drill) and immediate Shine upon landing. A high-pressure shield-poking tool.',
        gif: 'https://i.imgur.com/5ihvX5z.gif'
      },
      { 
        name: 'SHINE GRAB', 
        desc: 'Jump-canceling a Shine into a grab to punish opponents holding shield after a hit.',
        gif: 'https://www.ssbwiki.com/images/c/c8/Shine_grab.gif'
      }
    ]
  },
  {
    id: 'falco',
    name: 'FALCO',
    color: '#6B5CB1',
    image: 'https://i.imgur.com/GisL3Xm.png',
    techs: [
      { 
        name: 'PILLAR COMBOS', 
        desc: 'Chaining Down-Air spikes into Shine pop-ups. Keeps opponents in a devastating vertical loop.',
        gif: 'https://media.tenor.com/F0-R0M6pM80AAAAC/falco-pillar.gif'
      },
      { 
        name: 'SHORT HOP LASER', 
        desc: 'Firing the blaster during a short hop to cancel lag. Essential for controlling space and locking down opponents.',
        gif: 'https://www.ssbwiki.com/images/d/d3/SSBM_Falco_Short_Hop_Laser.gif'
      },
      { 
        name: 'POWER SHIELD', 
        desc: 'A frame-perfect shield that reflects projectiles. Falco\'s reflector speeds up the projectile significantly.',
        gif: 'https://www.ssbwiki.com/images/e/e0/Power_shield.gif'
      }
    ]
  },
  {
    id: 'marth',
    name: 'MARTH',
    color: '#007FFF',
    image: 'https://i.imgur.com/Lsh2Dte.png',
    techs: [
      { 
        name: 'TIPPER SPACING', 
        desc: 'Landing hits with the very edge of the blade for massive knockback. This is Marth\'s primary win condition.',
        gif: 'https://www.ssbwiki.com/images/1/14/Marth_Forward_Aerial_Hitbox_Melee.gif'
      },
      { 
        name: 'KEN COMBO', 
        desc: 'Forward-Air into a Down-Air spike. The most iconic Marth finisher, named after Ken Hoang.',
        gif: 'https://www.ssbwiki.com/images/8/87/Kencombo.gif'
      },
      { 
        name: 'CHAIN GRABBING', 
        desc: 'Repeatedly using Up-Throw on fast-falling characters like Fox and Falco to rack up 0-to-death damage.',
        gif: 'https://www.ssbwiki.com/images/d/dc/MarthChainGrab.gif'
      }
    ]
  },
  {
    id: 'sheik',
    name: 'SHEIK',
    color: '#FF69B4',
    image: 'https://i.imgur.com/I2kPz8n.png',
    techs: [
      { 
        name: 'TECH CHASING', 
        desc: 'Reacting to an opponent\'s get-up option after a Down-Throw to continue the combo with another grab or tilt.',
        gif: 'https://media.tenor.com/FwV6E8S0SnoAAAAC/sheik-easy-mode-plup.gif'
      },
      { 
        name: 'NEEDLE TURNAROUND', 
        desc: 'Charging needles in mid-air to instantly flip direction. Used for recovery and edge-guarding mix-ups.',
        gif: 'https://www.ssbwiki.com/images/a/a2/NeedleTurnaround.gif'
      },
      { 
        name: 'BOOST GRAB', 
        desc: 'Canceling a dash attack into a grab to gain a massive burst of forward momentum during the grab animation.',
        gif: 'https://www.ssbwiki.com/images/2/2e/Sheik_Boost_Grab.gif'
      }
    ]
  }
];

const Characters: React.FC = () => {
  const [selected, setSelected] = useState<CharacterData | null>(null);

  if (selected) {
    return (
      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <button 
          onClick={() => setSelected(null)} 
          className="gc-button b-button" 
          style={{ marginBottom: '20px' }}
        >
          BACK
        </button>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
          <div className="glass-panel" style={{ textAlign: 'center', borderBottom: `5px solid ${selected.color}`, height: 'fit-content' }}>
            <img 
              src={selected.image} 
              alt={selected.name} 
              style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} 
            />
            <h2 style={{ color: selected.color, marginTop: '20px' }}>{selected.name}</h2>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            <div className="glass-panel" style={{ borderTop: `10px solid ${selected.color}` }}>
              <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>COMPETITIVE TECH & ANIMATIONS</h3>
              <div style={{ display: 'grid', gap: '40px' }}>
                {selected.techs.map(tech => (
                  <div key={tech.name} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '25px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--gc-accent-green)' }}>{tech.name}</h3>
                      <p style={{ color: 'var(--gc-silver)', marginTop: '10px', lineHeight: '1.6' }}>{tech.desc}</p>
                    </div>
                    {tech.gif && (
                      <div className="glass-panel" style={{ padding: '5px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', minHeight: '150px' }}>
                        <img 
                          src={tech.gif} 
                          alt={tech.name} 
                          style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>SELECT YOUR FIGHTER</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {characters.map(char => (
          <div 
            key={char.id} 
            className="glass-panel" 
            style={{ 
              cursor: 'pointer', 
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              border: '2px solid transparent',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={() => setSelected(char)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = char.color;
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ 
              height: '200px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '15px',
              background: `linear-gradient(to bottom, transparent, ${char.color}22)`
            }}>
              <img 
                src={char.image} 
                alt={char.name} 
                style={{ height: '90%', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
            <h3 style={{ color: char.color, position: 'relative', zIndex: 1 }}>{char.name}</h3>
            <p style={{ fontSize: '0.7rem', color: 'var(--gc-silver)', marginTop: '10px' }}>VIEW DATA</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
