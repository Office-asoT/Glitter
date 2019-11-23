import { EventEmitter } from 'events';

export interface CanonicalImage {
  // 画像のソース
  src: string;
  // 画像のキャプション
  caption: string;
}

// Imageのラッパークラス
declare interface ImageItem {
  // 画像がロードされたときに発火されるイベント
  on(event: 'load', listener: () => void): this;
  // 画像のロードが失敗したときに発火されるイベント
  on(event: 'error', listener: (err: Error) => void): this;
}

class ImageItem extends EventEmitter {
  public static create(data: CanonicalImage | string) {
    if (typeof data === 'string') {
      return new ImageItem({ src: data, caption: '' });
    } else {
      return new ImageItem(data);
    }
  }

  public src: string;
  public caption: string;

  constructor(data: CanonicalImage) {
    super();
    this.src = data.src;
    this.caption = data.caption;
  }

  public cache() {
    const rawImg = new Image();

    rawImg.src = this.src;

    if (rawImg.complete) {
      this.emit('load');
    } else {
      rawImg.addEventListener('load', () => this.emit('load'));
      rawImg.addEventListener('error', (e) => this.emit('error', e));
    }
  }
}

export default ImageItem;
