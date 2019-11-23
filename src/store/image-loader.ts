import { EventEmitter } from 'events';

// Storeで利用する画像ローダのインタフェース
export default interface ImageLoader extends EventEmitter {
  // ロードする画像の数
  readonly size: number;

  // 画像が全部読み込めたときのイベントの発火
  on(event: 'ready', listener: () => void): this;
  // エラーが発生したときのイベントの発火
  on(event: 'error', listener: (err: Error) => void): this;
  // 進捗イベントの発火、listenerの第一引数はロードされた画像のindex
  on(event: 'progress', listener: (index: number) => void): this;
}
