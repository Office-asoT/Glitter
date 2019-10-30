export interface CanonicalImage {
  src: string;
  caption: string;
}

export default class ImageItem {
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
    this.src = data.src;
    this.caption = data.caption;
  }
}
