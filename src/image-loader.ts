import { EventEmitter } from 'events';

import { CanonicalImage } from './image-item';

// 画像ローダ
export interface ImageLoader extends EventEmitter {
  readonly size: number;
}

// ブラウザのキャッシュを利用する画像ローダ
export class CachedImageLoader extends EventEmitter {
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
    const sources = this.images
      .map((image) => typeof image === 'string' ? image : image.src);

    try {
      await Promise.all(sources.map(loadImage));
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
