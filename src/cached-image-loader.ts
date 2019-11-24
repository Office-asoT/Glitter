import { EventEmitter } from 'events';

import ImageLoader from './store/image-loader';
import ImageItem from './image-item';

// ブラウザのキャッシュを利用する画像ローダ
export default class CachedImageLoader
    extends EventEmitter implements ImageLoader {
  private imageItems: ImageItem[] = [];

  constructor(imageItems: ImageItem[]) {
    super();
    this.imageItems = imageItems;
    this.load();
  }

  public get size() {
    return this.imageItems.length;
  }

  private async load() {
    const loadOne = async (imageItem: ImageItem, index: number) => {
      await loadImage(imageItem.src);
      // 現在ロード済みの画像のindexをemitする
      this.emit('progress', index + 1);
    };

    try {
      await Promise.all(this.imageItems.map(loadOne));
      this.emit('ready');
    } catch (e) {
      this.emit('error', e);
    }
  }
}

function loadImage(src: string): Promise<void> {
  const img = new Image();

  img.src = src;

  if (img.complete) {
    return Promise.resolve();
  } else {
    return new Promise((resolve, reject) => {
      img.addEventListener('load', () => resolve());
      img.addEventListener('error', (e) => reject(e));
    });
  }
}
