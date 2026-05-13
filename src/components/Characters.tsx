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
    name: 'フォックス',
    color: '#E60012',
    image: 'https://i.imgur.com/v8p0E9o.png', 
    techs: [
      { 
        name: 'ウェーブシャイン', 
        desc: 'リフレクター（1フレーム発生）から絶（ウェーブダッシュ）でキャンセルする技術。コンボの起点や撃墜に繋げます。',
        gif: 'https://www.ssbwiki.com/images/a/a2/Waveshine.gif'
      },
      { 
        name: 'ドリルシャイン', 
        desc: '下空中攻撃（多段ヒット）から着地後に即リフレクターを出す連携。強力なシールドプレッシャーとなります。',
        gif: 'https://i.imgur.com/5ihvX5z.gif'
      },
      { 
        name: 'シャイン掴み', 
        desc: 'リフレクターをジャンプキャンセルして即座に掴む技術。ガードを固める相手に対して非常に有効です。',
        gif: 'https://www.ssbwiki.com/images/c/c8/Shine_grab.gif'
      }
    ]
  },
  {
    id: 'falco',
    name: 'ファルコ',
    color: '#6B5CB1',
    image: 'https://i.imgur.com/GisL3Xm.png',
    techs: [
      { 
        name: 'ピラーコンボ', 
        desc: '下空中攻撃のメテオとリフレクターの打ち上げを交互に繰り返す、ファルコ特有の垂直コンボ。',
        gif: 'https://media.tenor.com/F0-R0M6pM80AAAAC/falco-pillar.gif'
      },
      { 
        name: 'ショートホップブラスター', 
        desc: '小ジャンプ中にブラスターを撃つことで、着地硬直をなくしつつ相手の動きを制限する立ち回りの要。',
        gif: 'https://www.ssbwiki.com/images/d/d3/SSBM_Falco_Short_Hop_Laser.gif'
      },
      { 
        name: 'パワーシールド', 
        desc: '飛び道具をジャストガードで反射する技術。ファルコの反射は弾速が上がり非常に強力です。',
        gif: 'https://www.ssbwiki.com/images/e/e0/Power_shield.gif'
      }
    ]
  },
  {
    id: 'marth',
    name: 'マルス',
    color: '#007FFF',
    image: 'https://i.imgur.com/Lsh2Dte.png',
    techs: [
      { 
        name: '先端の間合い管理', 
        desc: '剣の先端で捉えることで、最大の威力と吹っ飛ばしを発生させる。マルスの生命線とも言える技術。',
        gif: 'https://www.ssbwiki.com/images/1/14/Marth_Forward_Aerial_Hitbox_Melee.gif'
      },
      { 
        name: 'ケンコンボ', 
        desc: '前空中攻撃から、ジャンプを挟んで下空中攻撃のメテオに繋げる、最も有名な即死コンボの一つ。',
        gif: 'https://www.ssbwiki.com/images/8/87/Kencombo.gif'
      },
      { 
        name: '投げ連 (チェイングラブ)', 
        desc: '終点などでフォックス等の速落下キャラに対し、上投げから再び掴みを繋げ続けるハメ技に近い連携。',
        gif: 'https://www.ssbwiki.com/images/d/dc/MarthChainGrab.gif'
      }
    ]
  },
  {
    id: 'sheik',
    name: 'シーク',
    color: '#FF69B4',
    image: 'https://i.imgur.com/I2kPz8n.png',
    techs: [
      { 
        name: '受け身狩り', 
        desc: '下投げ後に相手の受け身を完全に反応で見て、再び掴みや攻撃を叩き込むシークの強力なパターン。',
        gif: 'https://media.tenor.com/FwV6E8S0SnoAAAAC/sheik-easy-mode-plup.gif'
      },
      { 
        name: '針反転', 
        desc: '空中で針を溜める動作を利用して瞬時に反転し、崖を掴んだり後方の相手を牽制する技術。',
        gif: 'https://www.ssbwiki.com/images/a/a2/NeedleTurnaround.gif'
      },
      { 
        name: 'ブーストグラブ', 
        desc: 'ダッシュ攻撃の出だしを掴みでキャンセルすることで、滑りながら遠くの相手を掴むテクニック。',
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
          戻る
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
              <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>対戦用テクニック ＆ アニメーション</h3>
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
      <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>ファイターを選択</h2>
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
            <p style={{ fontSize: '0.7rem', color: 'var(--gc-silver)', marginTop: '10px' }}>技データを見る</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
