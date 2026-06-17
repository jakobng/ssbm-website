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
  fallType: string;
  archetype: string;
  tier: string;
  strengths: string[];
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
    summary: '移動、火力、撃墜力が高く、上級者ほど自由に動ける万能キャラです。',
    fallType: '高速落下タイプ',
    archetype: 'ラッシュダウン',
    tier: 'トップティア',
    strengths: ['スピード', '火力', '撃墜力'],
  },
  {
    id: 'falco',
    name: 'ファルコ',
    title: '弾幕と圧殺',
    color: '#6B5CB1',
    image: getAssetUrl('images/characters/falco.png'),
    emblem: 'FC',
    summary: 'レーザーで相手の動きを止めて、強いコンボにつなげる制圧型です。',
    fallType: '高速落下タイプ',
    archetype: 'ゾーナー',
    tier: 'トップティア',
    strengths: ['レーザー', 'コンボ火力', '空中制圧'],
  },
  {
    id: 'marth',
    name: 'マルス',
    title: '間合いの王',
    color: '#007FFF',
    image: getAssetUrl('images/characters/marth.png'),
    emblem: 'MR',
    summary: '長い剣で間合いを作り、相手の入り方を読んで大きく返すキャラです。',
    fallType: '中量級',
    archetype: 'スペーサー',
    tier: 'トップティア',
    strengths: ['リーチ', '間合い管理', '着地狩り'],
  },
  {
    id: 'sheik',
    name: 'シーク',
    title: '針と崩しの職人',
    color: '#FF69B4',
    image: getAssetUrl('images/characters/sheik.png'),
    emblem: 'SK',
    summary: '安定した差し込みと投げ展開で、相手を少しずつ苦しくします。',
    fallType: '中量級',
    archetype: 'グラップラー',
    tier: 'トップティア',
    strengths: ['投げ展開', '安定感', '復帰阻止'],
  },
  {
    id: 'jigglypuff',
    name: 'プリン',
    title: '空中支配の軽量級',
    color: '#FFB6C1',
    image: getAssetUrl('images/characters/jigglypuff.jpg'),
    emblem: 'JP',
    summary: '空中で長く動きながら待ち、ミスを見て大きく倒し切るキャラです。',
    fallType: 'ふわふわタイプ',
    archetype: 'ゾーナー',
    tier: 'トップティア',
    strengths: ['空中制圧', '復帰力', '逆転力'],
  },
  {
    id: 'peach',
    name: 'ピーチ',
    title: '浮遊する守り',
    color: '#F4A7C1',
    image: getAssetUrl('images/characters/peach.jpg'),
    emblem: 'PC',
    summary: '浮遊とカブで高さを変え、相手の攻めを受け止めて返すキャラです。',
    fallType: 'ふわふわタイプ',
    archetype: 'ゾーナー',
    tier: 'ハイティア',
    strengths: ['浮遊', '守りの強さ', 'アイテム'],
  },
  {
    id: 'captain-falcon',
    name: 'キャプテン・ファルコン',
    title: '爆発力の塊',
    color: '#FF8C00',
    image: getAssetUrl('images/characters/captain-falcon.jpg'),
    emblem: 'CF',
    summary: '速い走りと強い投げから、読み勝った時のリターンがとても大きいです。',
    fallType: '高速落下タイプ',
    archetype: 'ラッシュダウン',
    tier: 'ハイティア',
    strengths: ['移動力', '投げ展開', '爆発力'],
  },
  {
    id: 'ice-climbers',
    name: 'アイスクライマー',
    title: '二人でつかむ一撃',
    color: '#77D7FF',
    image: getAssetUrl('images/characters/ice-climbers.jpg'),
    emblem: 'IC',
    summary: '二人一組の特殊キャラです。つかみから一気に流れを取れるのが強みです。',
    fallType: '中量級',
    archetype: 'グラップラー',
    tier: 'ハイティア',
    strengths: ['つかみ', '二人の圧', '対策要求'],
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
