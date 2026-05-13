import React from 'react';

const Techniques: React.FC = () => {
  const techs = [
    {
      name: '絶（ウェーブダッシュ）',
      input: 'ジャンプ -> 空中回避（下/斜め下）',
      desc: '基礎となる移動テクニック。立った状態のまま滑るように移動でき、移動しながら地上技を出すことが可能になります。'
    },
    {
      name: 'Lキャンセル',
      input: '着地直前（7フレーム以内）にL/R/Z',
      desc: '空中攻撃の着地硬直を半分に短縮します。攻めを継続し、コンボを繋げるために不可欠な技術です。'
    },
    {
      name: 'ダッシュダンス',
      input: 'スティックを左右に素早く弾く',
      desc: 'ステップ中に反転を繰り返すことで、間合いを管理し、相手の攻撃を誘ったり動きを翻弄したりします。'
    },
    {
      name: 'ベクトルのずらし (DI)',
      input: '吹っ飛び方向に対して垂直にスティックを倒す',
      desc: '主要な防御メカニクス。攻撃を受けた瞬間にスティックを入力することで、吹っ飛びの軌道を変え、撃墜を免れます。'
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>共通テクニック</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {techs.map(tech => (
          <div key={tech.name} className="glass-panel" style={{ borderLeft: '5px solid var(--gc-accent-orange)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{tech.name}</h3>
            <p style={{ color: 'var(--gc-accent-green)', fontSize: '0.8rem', marginBottom: '10px', fontFamily: 'var(--font-pixel)' }}>
              入力: {tech.input}
            </p>
            <p style={{ color: 'var(--gc-silver)', fontSize: '0.9rem' }}>{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techniques;
