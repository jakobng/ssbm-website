import React from 'react';
import { Link } from 'react-router-dom';

const Techniques: React.FC = () => {
  return (
    <div className="page page--placeholder">
      <section className="page-hero">
        <div>
          <p className="eyebrow">遊び方</p>
          <h2>準備中</h2>
          <p className="page-copy">
            ここは いま まっしろです。あとで、初心者むけの 技のページを 入れます。
          </p>
        </div>
      </section>

      <div className="glass-panel placeholder-card">
        <p className="placeholder-card__label">仮ページ</p>
        <h3>技の説明は これから</h3>
        <p>
          うごき方、シールド、崖の動き、そして さいしょに おぼえる大事な技を、わかりやすく まとめます。
        </p>
        <Link to="/" className="gc-button a-button">
          ホームへ
        </Link>
      </div>
    </div>
  );
};

export default Techniques;
