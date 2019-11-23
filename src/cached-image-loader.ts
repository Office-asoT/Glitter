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
    const loadOne = async (src: string, index: number) => {
      await loadImage(src);
      // 現在ロード済みの画像のindexをemitする
      this.emit('progress', index + 1);
    };

    const sources = this.images
      .map((image) => typeof image === 'string' ? image : image.src);

    try {
      await Promise.all(sources.map(loadOne));
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
      img.addEventListener('error', () => reject());
    });
  }
}
