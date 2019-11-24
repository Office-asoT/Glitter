import { EventEmitter } from 'events';

import ImageLoader from '../store/image-loader';
import ImageItem from '../image-item';

// キャッシュの方法
export type CacheMethod = (image: ImageItem) => Promise<void>;

// キャッシュを利用する画像ローダ
export default class CachedImageLoader<T extends CacheMethod>
    extends EventEmitter implements ImageLoader {
  private imageItems: ImageItem[] = [];
  private cache: T;

  constructor(imageItems: ImageItem[], cache: T) {
    super();
    this.imageItems = imageItems;
    this.cache = cache;
    this.load();
  }

  public get size() {
    return this.imageItems.length;
  }

  private async load() {
    const loadOne = async (imageItem: ImageItem, index: number) => {
      await this.cache(imageItem);
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
