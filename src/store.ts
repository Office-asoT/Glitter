import assert from './assert';
import ImageCache from './image-cache';
import { CanonicalImage } from './image-item';

/* tslint:disable max-classes-per-file adjacent-overload-signatures */

interface StoreOption {
  // ローディング画像を表示するか否か
  showLoading: boolean;
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

export class State {
  /* tslint:disable variable-name */
  private _isOpened: boolean;
  private _selectedIndex: number;
  private _numOfImages: number;
  private _isReady: boolean;
  /* tslint:enable variable-name */

  constructor({
    isOpened = false,
    selectedIndex = 0,
    isReady = false,
    numOfImages,
  }: {
    isOpened: boolean,
    selectedIndex: number,
    isReady: boolean,
    numOfImages: number,
  }) {
    this._isOpened = isOpened;
    this._selectedIndex = selectedIndex;
    this._numOfImages = numOfImages;
    this._isReady = isReady;
  }

  public get isOpened() { return this._isOpened; }
  public get selectedIndex() { return this._selectedIndex; }
  public get numOfImages() { return this._numOfImages; }
  public get isReady() { return this._isReady; }

  public get hasNext() {
    return this.selectedIndex + 1 < this.numOfImages;
  }

  public get hasPrev() {
    return this.selectedIndex > 0;
  }

  public set isOpened(value: boolean) { this._isOpened = value; }
  public set numOfImages(value) { this._numOfImages = value; }
  public set isReady(value: boolean) { this._isReady = value; }

  public set selectedIndex(value: number) {
    assert(value + 1 <= this.numOfImages && value >= 0);

    this._selectedIndex = value;
  }
}
/* tslint:ensable max-classes-per-file adjacent-overload-signatures */
