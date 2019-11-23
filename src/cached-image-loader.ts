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

  private async load() {
    const loadOne = async (imageItem: ImageItem, index: number) => {
      await loadImage(imageItem);
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

function loadImage(imageItem: ImageItem): Promise<void> {
  return new Promise((resolve, reject) => {
    function done(fn: () => void) {
      imageItem.removeListener('load', resolve);
      imageItem.removeListener('error', reject);
      fn();
    }

    imageItem.once('load', () => done(() => resolve()));
    imageItem.once('error', (e: Error) => done(() => reject(e)));

    imageItem.cache();
  });
}
