import ImageItem from '../image-item';

export default function browserCache(imageItem: ImageItem): Promise<void> {
  const img = new Image();

  img.src = imageItem.src;

  if (img.complete) {
    return Promise.resolve();
  } else {
    return new Promise((resolve, reject) => {
      img.addEventListener('load', () => resolve());
      img.addEventListener('error', (e) => reject(e));
    });
  }
}
