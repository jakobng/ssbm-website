import React from 'react';

const Techniques: React.FC = () => {
  return (
    <div className="page page--techniques">
      <section className="page-hero">
        <div>
          <p className="eyebrow">遊び方</p>
          <h2>Xの特徴</h2>
        </div>
      </section>

      <section className="technique-notes glass-panel">
        <h3>Xの特徴</h3>
        <div className="technique-lines">
          <p>入力バッファがない</p>
          <p>アニメーション中でコンソールがプレイヤーのインプットに反応しない</p>
          <p>他のスマブラより</p>
          <p>コンボができます。</p>
          <p>早いスピード</p>
          <p>難しいテクニックがある</p>
        </div>
      </section>

      <section className="technique-notes glass-panel">
        <h3>絶空・Wavedash</h3>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/HEwgKpLtqP4"
            title="絶空・Wavedash"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a className="video-link" href="https://www.youtube.com/watch?v=HEwgKpLtqP4" target="_blank" rel="noreferrer">
          https://www.youtube.com/watch?v=HEwgKpLtqP4
        </a>
      </section>

      <section className="technique-notes glass-panel">
        <h3>着地キャンセル</h3>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/-h9x8zrAUdE"
            title="着地キャンセル"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a className="video-link" href="https://www.youtube.com/watch?v=-h9x8zrAUdE" target="_blank" rel="noreferrer">
          https://www.youtube.com/watch?v=-h9x8zrAUdE
        </a>
      </section>

      <section className="technique-notes glass-panel">
        <h3>大会ルールセット</h3>
        <p>ステージ中で六つだけを使用している。</p>
        <ul className="stage-list">
          <li>ヨッシーストーリー</li>
          <li>夢の泉</li>
          <li>ポケモンスタジアム</li>
          <li>旧プププランド</li>
          <li>戦場</li>
          <li>終点</li>
        </ul>
        <p>四ストック、八分</p>
      </section>

      <section className="technique-notes glass-panel">
        <h3>メインを選ぶ</h3>
        <p>DXが難しいゲームなので、キャラクター中で、一人だけを選ぶのほうがいい。大半の人は上位のファイターを選びます。</p>
      </section>
    </div>
  );
};

export default Techniques;
