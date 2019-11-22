import { EventEmitter } from 'events';

import { CanonicalImage } from './image-item';

export interface ImageLoader extends EventEmitter {
  readonly size: number;
}

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
    await Promise.all(
      this.images
        .map((image) => typeof image === 'string' ? image : image.src)
        .map(loadImage),
    );

    this.emit('ready');
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
