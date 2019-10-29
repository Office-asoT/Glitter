interface State {
  isOpened: boolean;
  selectedIndex: number;
}

// 状態管理用のクラス
export default class Store {
  public state: State;

  constructor() {
    this.state = { isOpened: false, selectedIndex: 0 };
  }

  public toggleOpenState() {
    this.state.isOpened = !this.state.isOpened;
  }

  public proceedImage({ limit }: { limit: number }) {
    const { selectedIndex: currentIndex } = this.state;
    this.state.selectedIndex = currentIndex + 1 < limit ?
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
