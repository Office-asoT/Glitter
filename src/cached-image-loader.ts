import { EventEmitter } from 'events';

import ImageLoader from './store/image-loader';
import { CanonicalImage } from './image-item';

// ブラウザのキャッシュを利用する画像ローダ
export default class CachedImageLoader
    extends EventEmitter implements ImageLoader {
  private images: Array<CanonicalImage | string> = [];

  constructor(images: Array<CanonicalImage | string>) {
    super();
    this.images = images;
    this.load();
  }

  public get size() {
    return this.images.length;
  }

  private async load() {
    const loadOne = async (image: CanonicalImage | string, index: number) => {
      await loadImage(typeof image === 'string' ? image : image.src);
      // 現在ロード済みの画像のindexをemitする
      this.emit('progress', index + 1);
    };

    try {
      await Promise.all(this.images.map(loadOne));
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
