import ImageLoader from './image-loader';
import State, { LoadingProgress } from '.';

// StateManagerのオプション
export interface StateManagerOption {
  // ローディングを表示するかどうか？
  showLoading?: boolean;
  // 画像をリピートして表示するか(ループするか)？
  repeatImages?: boolean;
}

// 状態管理用のクラス
export default class StateManager {
  // 実際の状態を保持するオブジェクト
  public state: State;

  private opts: StateManagerOption;

  constructor(imageLoader: ImageLoader, opts: StateManagerOption = {}) {
    this.state = new State({
      isOpened: false,
      selectedIndex: 0,
      numOfImages: imageLoader.size,
      isReady: false,
    });

    this.opts = opts;

    const onProgress = (x: number) => {
      this.state.loadedImageCount += 1;
    };

    const onReady = () => {
      this.state.isReady = true;
      imageLoader.removeListener('progress', onProgress);
      imageLoader.removeListener('ready', onReady);
      imageLoader.removeListener('error', onReady);
    };

    if (this.opts.showLoading) {
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
      (this.opts.repeatImages ? 0 : currentIndex);
  }

  public succeedImage() {
    const { selectedIndex: currentIndex, numOfImages } = this.state;
    this.state.selectedIndex = currentIndex - 1 < 0 ?
      (this.opts.repeatImages ? numOfImages - 1 : 0) :
      currentIndex - 1;
  }
}
