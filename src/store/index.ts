import ImageLoader from './image-loader';
import State, { LoadingProgress } from './state';

// Storeのオプション
export interface StoreOption {
  // ローディングを表示するかどうか？
  showLoading?: boolean;
}

// 状態管理用のクラス
export default class Store {
  // 実際の状態を保持するオブジェクト
  public state: State;

  constructor(imageLoader: ImageLoader, opts: StoreOption = {}) {
    this.state = new State({
      isOpened: false,
      selectedIndex: 0,
      numOfImages: imageLoader.size,
      isReady: false,
    });

    const onProgress = (loadedImageCount: number) => {
      this.state.loadedImageCount += 1;
    };

    const onReady = () => {
      this.state.isReady = true;
      imageLoader.removeListener('progress', onProgress);
      imageLoader.removeListener('ready', onReady);
      imageLoader.removeListener('error', onReady);
    };

    if (opts.showLoading) {
      imageLoader.once('ready', onReady);
      // errorになってもどうしようもないのでisReady=trueにしてしまう
      imageLoader.once('error', onReady);
      imageLoader.on('progress', onProgress);
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
