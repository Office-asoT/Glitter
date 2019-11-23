import { EventEmitter } from 'events';

// Storeで利用する画像ローダのインタフェース
export default interface ImageLoader extends EventEmitter {
  // ロードする画像の数
  readonly size: number;

  // 画像が全部読み込めたときまたはエラーが発生したときのイベントの発火
  on(event: 'ready' | 'error', listener: () => void): this;
  // 進捗イベントの発火、listenerの第一引数はロードされた画像のindex
  on(event: 'progress', listener: (index: number) => void): this;
}
