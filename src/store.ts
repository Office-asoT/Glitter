interface State {
  isOpened: boolean;
  selectedIndex: number;
  numOfImages: number;
}

// 状態管理用のクラス
export default class Store {
  public state: State;

  constructor(images: string[] = []) {
    this.state = {
      isOpened: false,
      selectedIndex: 0,
      numOfImages: images.length,
    };
  }

  public toggleOpenState() {
    this.state.isOpened = !this.state.isOpened;
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
