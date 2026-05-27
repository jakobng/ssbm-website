export type MotionKind =
  | 'laser'
  | 'shine'
  | 'pillar'
  | 'tipper'
  | 'needle'
  | 'float'
  | 'rest'
  | 'knee'
  | 'thunder'
  | 'dash'
  | 'orb'
  | 'warp';

export interface MoveData {
  name: string;
  note: string;
  detail: string;
  motion: MotionKind;
}

export interface FighterData {
  id: string;
  name: string;
  title: string;
  color: string;
  image?: string;
  emblem: string;
  summary: string;
  style: string;
  strengths: string[];
  moves: MoveData[];
}

export interface TechniqueData {
  name: string;
  input: string;
  purpose: string;
  detail: string;
  motion: MotionKind;
}

const getAssetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const fighters: FighterData[] = [
  {
    id: 'fox',
    name: 'フォックス',
    title: '最速の圧力',
    color: '#E60012',
    image: getAssetUrl('images/characters/fox.png'),
    emblem: 'FX',
    summary: '触れた瞬間に試合の流れを持っていく、スピード特化の近距離アタッカー。',
    style: 'スピード / 差し返し / 即展開',
    strengths: ['ダッシュ性能', '崩しの速さ', '撃墜の圧'],
    moves: [
      {
        name: 'ブラスター',
        note: '遠距離の起点',
        detail: '小ジャンプやダッシュの合間に弾を置き、相手の移動を止める。',
        motion: 'laser',
      },
      {
        name: 'リフレクター',
        note: '割り込みの核',
        detail: '密着での暴れと反撃を兼ねる、フォックスの代表的な切り返し。',
        motion: 'shine',
      },
      {
        name: '下空中攻撃',
        note: '差し込みの連結点',
        detail: '着地前後の連携に組み込みやすく、コンボの流れを作りやすい。',
        motion: 'dash',
      },
      {
        name: '上スマッシュ',
        note: '撃墜の締め',
        detail: '台上や着地狩りに合わせて、大きなリターンを取りにいく。',
        motion: 'orb',
      },
    ],
  },
  {
    id: 'falco',
    name: 'ファルコ',
    title: '弾幕と圧殺',
    color: '#6B5CB1',
    image: getAssetUrl('images/characters/falco.png'),
    emblem: 'FC',
    summary: '弾で崩し、空中戦で刈り取る。相手に地上の自由を与えないレンジ支配型。',
    style: '飛び道具 / 連携 / 崩し',
    strengths: ['レーザー制圧', '落下の追撃', 'リターンの高さ'],
    moves: [
      {
        name: 'ブラスター',
        note: 'テンポを奪う弾',
        detail: 'ファルコらしいけん制。相手の歩きやジャンプを先に止める。',
        motion: 'laser',
      },
      {
        name: '下空中攻撃',
        note: 'ピラーの起点',
        detail: 'コンボを縦に積み上げる、ファルコの象徴的な一打。',
        motion: 'pillar',
      },
      {
        name: 'リフレクター',
        note: '近距離の圧',
        detail: 'フォックスと同じように切り返しとして強く、着地ぎわの押し返しにも使える。',
        motion: 'shine',
      },
      {
        name: '下強攻撃',
        note: '置きの追撃',
        detail: '低い姿勢で相手を捕まえ、端での崩しと連携を作る。',
        motion: 'dash',
      },
    ],
  },
  {
    id: 'marth',
    name: 'マルス',
    title: '間合いの王',
    color: '#007FFF',
    image: getAssetUrl('images/characters/marth.png'),
    emblem: 'MR',
    summary: '剣先を当てるだけで、火力と制圧力が一段階上がる。位置取りで勝つ剣士。',
    style: '間合い管理 / 差し返し / 撃墜',
    strengths: ['リーチ', '先端判定', '端での圧力'],
    moves: [
      {
        name: '前空中攻撃',
        note: '先端の主軸',
        detail: '空中戦で距離を守りながら、着地狩りを拒否する。',
        motion: 'tipper',
      },
      {
        name: '横スマッシュ',
        note: '読み勝ちの一撃',
        detail: '剣先を合わせれば一気に撃墜が見える、象徴的なフィニッシュ。',
        motion: 'tipper',
      },
      {
        name: 'カウンター',
        note: '割り込み',
        detail: '相手の強気な差し込みに対して、反撃の起点を作る。',
        motion: 'warp',
      },
      {
        name: '下投げ',
        note: '展開維持',
        detail: '相手を外に散らし、再び先端の間合いを押しつける。',
        motion: 'dash',
      },
    ],
  },
  {
    id: 'sheik',
    name: 'シーク',
    title: '針と崩しの職人',
    color: '#FF69B4',
    image: getAssetUrl('images/characters/sheik.png'),
    emblem: 'SK',
    summary: '細かい差し込みと高速の連携で、相手の選択肢をどんどん削っていく。',
    style: '崩し / 連携 / 反応',
    strengths: ['差し込みの速さ', '追撃の安定感', '着地狩り'],
    moves: [
      {
        name: '針',
        note: '安全な牽制',
        detail: '空中でも地上でも使いやすく、相手の動き出しを止める。',
        motion: 'needle',
      },
      {
        name: 'ブーストグラブ',
        note: '滑り掴み',
        detail: 'ダッシュの勢いを残して、離れた位置の相手を一気に捕まえる。',
        motion: 'dash',
      },
      {
        name: '空後',
        note: '差し返しの主力',
        detail: '空中での追い払いに優れ、端の制圧にも向いている。',
        motion: 'tipper',
      },
      {
        name: 'バースト択',
        note: '撃墜の締め',
        detail: '地上・空中を問わず、相手の空振りに合わせて一気に倒し切る。',
        motion: 'orb',
      },
    ],
  },
  {
    id: 'peach',
    name: 'ピーチ',
    title: '浮遊する制圧',
    color: '#F4A7C1',
    emblem: 'PC',
    summary: '浮遊とアイテムで高さを変えながら、相手の上と横を同時に封じる。',
    style: '浮遊 / 置き / 崩し',
    strengths: ['空中滞在', '接近拒否', '端の継続圧'],
    moves: [
      {
        name: '浮遊',
        note: '高さの支配',
        detail: '通常ジャンプとは違う軌道で空間を取り、相手の対空をずらす。',
        motion: 'float',
      },
      {
        name: '野菜引き',
        note: '置きのアクセント',
        detail: 'ランダム性を使って、相手の前進を少しずつ削る。',
        motion: 'orb',
      },
      {
        name: '前空中攻撃',
        note: '広い判定',
        detail: '浮遊からの差し込みと拒否に両対応の、ピーチの基本技。',
        motion: 'tipper',
      },
      {
        name: '下スマッシュ',
        note: '端のバースト',
        detail: '地上の読み合いをまとめて返し、撃墜ラインを押し上げる。',
        motion: 'shine',
      },
    ],
  },
  {
    id: 'jigglypuff',
    name: 'プリン',
    title: '空中支配の軽量級',
    color: '#FFB6C1',
    emblem: 'JP',
    summary: '低い地上性能を空中機動で補い、相手の視界外から一気に崩す。',
    style: '空中戦 / 持久戦 / 逆転力',
    strengths: ['滞空時間', '復帰力', '一発逆転'],
    moves: [
      {
        name: 'ねむる',
        note: '超高リスク高火力',
        detail: '密着の読み合いをひっくり返す、最終兵器のような一撃。',
        motion: 'rest',
      },
      {
        name: 'うたう',
        note: '接近阻止',
        detail: '相手の崖際や着地に合わせると、試合を一気にひっくり返せる。',
        motion: 'warp',
      },
      {
        name: '前空中攻撃',
        note: '壁のような判定',
        detail: '空中の先出しで相手の前進を止め、押し返しを作る。',
        motion: 'tipper',
      },
      {
        name: 'ころがる',
        note: '意表を突く移動',
        detail: '読み合いのタイミングをずらして、相手の反応を崩す。',
        motion: 'dash',
      },
    ],
  },
  {
    id: 'captain-falcon',
    name: 'キャプテン・ファルコン',
    title: '爆発力の塊',
    color: '#FF8C00',
    emblem: 'CF',
    summary: '一度触れば大ダメージ。対戦を「読んだ側」が全部持っていくキャラ。',
    style: '爆発力 / スピード / 読み勝ち',
    strengths: ['瞬間火力', '移動力', '観客を沸かせる圧'],
    moves: [
      {
        name: '膝',
        note: '象徴的な撃墜',
        detail: '当てる位置が合えば、空中でも地上でも試合を決めるフィニッシュ。',
        motion: 'knee',
      },
      {
        name: 'ファルコンパンチ',
        note: '大振りの読み',
        detail: 'リスクは高いが、当たった時のリターンは格別。',
        motion: 'orb',
      },
      {
        name: '空中N',
        note: '差し込みの要',
        detail: '接近しながら展開を始める、細かな連携の入口。',
        motion: 'dash',
      },
      {
        name: 'ダッシュ掴み',
        note: '崩しの一歩',
        detail: '速い地上移動からの掴みで、読み合いを一気に前へ進める。',
        motion: 'dash',
      },
    ],
  },
  {
    id: 'pikachu',
    name: 'ピカチュウ',
    title: '電撃のトリックスター',
    color: '#FFD400',
    emblem: 'PK',
    summary: '小柄な体と素早い動きで、角度の変化と電撃の圧を重ねていく。',
    style: '機動力 / 連携 / 崩し',
    strengths: ['復帰の柔軟さ', '低い姿勢', '奇襲'],
    moves: [
      {
        name: '電光石火',
        note: '復帰と奇襲',
        detail: '角度を変えて滑るように動き、相手の予測を外す。',
        motion: 'warp',
      },
      {
        name: 'かみなり',
        note: '縦の撃墜',
        detail: '空中からの落下を合わせると、上方向の圧が一気に強くなる。',
        motion: 'thunder',
      },
      {
        name: 'でんこうせっか',
        note: 'ライン移動',
        detail: '素早く位置をずらして、差し返しや復帰阻止に繋げる。',
        motion: 'dash',
      },
      {
        name: '空上',
        note: '追撃の柱',
        detail: '低い姿勢で差し込み、空中戦の流れを継続する。',
        motion: 'orb',
      },
    ],
  },
];

export const commonTechniques: TechniqueData[] = [
  {
    name: '絶（ウェーブダッシュ）',
    input: 'ジャンプ -> 空中回避（下/斜め下）',
    purpose: '滑るように位置を変え、差し込みと着地狩りの両方を強くする。',
    detail: '移動の読み合いに強く、地上にいながら速い横移動を実現できる。',
    motion: 'dash',
  },
  {
    name: 'Lキャンセル',
    input: '着地直前（7F以内）にL / R / Z',
    purpose: '空中攻撃の硬直を短縮して、攻めのテンポを切らさない。',
    detail: 'コンボ継続とシールド圧の両面で、DXの基礎になる重要テクニック。',
    motion: 'shine',
  },
  {
    name: 'ダッシュダンス',
    input: 'スティックを左右に素早く弾く',
    purpose: '相手の反応を揺さぶり、差し返しのタイミングをずらす。',
    detail: '足を止めずに間合いをいじれるため、横軸の読み合いが強くなる。',
    motion: 'dash',
  },
  {
    name: 'シールドドロップ',
    input: '台上でシールド -> スティック下',
    purpose: '高台から素早く降りて、台上の圧を解除する。',
    detail: '相手の台上制圧を崩し、反撃の角度を作りやすい。',
    motion: 'float',
  },
  {
    name: 'ウェーブランド',
    input: '空中回避を台や床に斜めで当てる',
    purpose: '着地の勢いをそのまま移動に変える。',
    detail: '台移動や微調整が鋭くなり、位置取りの選択肢が増える。',
    motion: 'orb',
  },
  {
    name: '崖キャンセル',
    input: '移動や技を崖で細かく止める',
    purpose: '行動の硬直を短くし、崖周りの択を増やす。',
    detail: '復帰阻止や着地狩りの密度が上がり、読み合いが立体的になる。',
    motion: 'warp',
  },
  {
    name: 'DI',
    input: '被弾中に吹っ飛び方向へ垂直に入力',
    purpose: '撃墜ラインをずらし、生存率を上げる。',
    detail: '守りの基本。相手のコンボや撃墜から少しでも逃げやすくなる。',
    motion: 'thunder',
  },
  {
    name: 'パワーシールド',
    input: '飛び道具や攻撃に合わせてジャストガード',
    purpose: '防御から一気に反撃へ転じる。',
    detail: 'タイミングが合えば、相手のテンポを完全に奪い返せる。',
    motion: 'shine',
  },
];
