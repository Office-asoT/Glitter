import { EventEmitter } from 'events';

import { CanonicalImage } from './image-item';

export default class ImageCache extends EventEmitter {
  constructor(images: Array<CanonicalImage | string> = []) {
    super();
    this.awaitImagesLoaded(images);
  }

  private async awaitImagesLoaded(images: Array<CanonicalImage | string> = []) {
    await Promise.all(
      images
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
