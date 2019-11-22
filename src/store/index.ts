import ImageCache from '../image-cache';
import { CanonicalImage } from '../image-item';
import State from './state';

interface StoreOption {
  // ローディング画像を表示するか否か
  showLoading: boolean | undefined;
}

// 状態管理用のクラス
export default class Store {
  // 実際の状態を保持するオブジェクト
  public state: State;

  // 画像のキャッシュ
  public imageCache: ImageCache;

  constructor(images: Array<CanonicalImage | string> = [],
              opts: StoreOption = { showLoading: true }) {
    this.state = new State({
      isOpened: false,
      selectedIndex: 0,
      numOfImages: images.length,
      isReady: false,
    });
    this.imageCache = new ImageCache(images);

    if (opts.showLoading) {
      this.imageCache.on('ready', () => this.state.isReady = true);
    } else {
      this.state.isReady = true;
    }
  }

  public toggleOpenState() {
    this.state.isOpened = !this.state.isOpened;
  }

  public resetIndex() {
    this.state.selectedIndex = 0;
  }

  public proceedImage() {
    const { selectedIndex: currentIndex, numOfImages } = this.state;
    this.state.selectedIndex = currentIndex + 1 < numOfImages ?
      currentIndex + 1 :
      currentIndex;
  }

  public succeedImage() {
    const { selectedIndex: currentIndex } = this.state;
    this.state.selectedIndex = currentIndex - 1 < 0 ?
      0 :
      currentIndex - 1;
  }
}
