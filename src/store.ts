interface State {
  isOpened: boolean;
  selectedIndex: number;
}

export default class Store {
  public state: State;

  constructor() {
    this.state = { isOpened: false, selectedIndex: 0 };
  }

  public toggleOpenState() {
    this.state.isOpened = !this.state.isOpened;
  }
}
