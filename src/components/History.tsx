import React from 'react';

const History: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>スマブラDX年代記</h2>
      
      <div className="glass-panel" style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'var(--gc-accent-green)', marginBottom: '10px' }}>2001年：創世記</h3>
        <p style={{ lineHeight: '1.6', color: 'var(--gc-silver)' }}>
          桜井政博氏の指揮の下、HAL研究所によってわずか13ヶ月で開発された『大乱闘スマッシュブラザーズDX』は、
          ニンテンドーゲームキューブのフラッグシップタイトルとして発売されました。
          前作N64版のフォーミュラを洗練させ、14体の新キャラクターを追加し、世代を定義する技術的深みをもたらしました。
        </p>
      </div>

      <div className="glass-panel" style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'var(--gc-accent-red)', marginBottom: '10px' }}>対戦シーンの爆発的普及</h3>
        <p style={{ lineHeight: '1.6', color: 'var(--gc-silver)' }}>
          パーティゲームとして意図されていましたが、プレイヤーたちは「絶（ウェーブダッシュ）」や「Lキャンセル」
          といった意図しないメカニクスを発見しました。これにより、DXは超高速でテクニカルな格闘ゲームへと変貌を遂げました。
          「五神」（Mew2King, Mango, Armada, Hungrybox, PPMD）の時代を経て、続編の発売後もシーンは生き残り、強化されていきました。
        </p>
      </div>

      <div className="glass-panel">
        <h3 style={{ color: 'var(--gc-accent-orange)', marginBottom: '10px' }}>類まれなる遺産</h3>
        <p style={{ lineHeight: '1.6', color: 'var(--gc-silver)' }}>
          今日でも、DXは『Genesis』や『The Big House』といった主要なトーナメントの主役であり続けています。
          『Slippi』のようなコミュニティ主導のプロジェクトが、20年以上前のタイトルにロールバック・ネットコードをもたらし、
          ゲームキューブ最大の傑作は現代においても繁栄し続けています。
        </p>
      </div>
    </div>
  );
};

export default History;
