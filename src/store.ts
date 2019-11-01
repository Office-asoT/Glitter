import { CanonicalImage } from './image-item';

/* tslint:disable max-classes-per-file adjacent-overload-signatures */
export class AssertionError extends Error {
  constructor(message: string = '') {
    super(message);
  }
}

// 状態管理用のクラス
export default class Store {
  public state: State;

  constructor(images: Array<CanonicalImage | string> = []) {
    this.state = new State({
      isOpened: false,
      selectedIndex: 0,
      numOfImages: images.length,
    });
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

export class State {
  /* tslint:disable variable-name */
  private _isOpened: boolean;
  private _selectedIndex: number;
  private _numOfImages: number;
  /* tslint:enable variable-name */

  constructor({
    isOpened = false,
    selectedIndex = 0,
    numOfImages,
  }: {
    isOpened: boolean,
    selectedIndex: number,
    numOfImages: number,
  }) {
    this._isOpened = isOpened;
    this._selectedIndex = selectedIndex;
    this._numOfImages = numOfImages;
  }

  public get isOpened() { return this._isOpened; }
  public get selectedIndex() { return this._selectedIndex; }
  public get numOfImages() { return this._numOfImages; }

  public set isOpened(value: boolean) { this._isOpened = value; }
  public set numOfImages(value) { this._numOfImages = value; }

  public set selectedIndex(value) {
    if (value + 1 > this.numOfImages || value < 0) {
      throw new AssertionError();
    }

    this._selectedIndex = value;
  }
}
/* tslint:ensable max-classes-per-file */
