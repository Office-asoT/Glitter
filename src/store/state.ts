import assert from '../assert';

export interface PageNumber {
  currentPage: number;
  maxPage: number;
}

export default class State {
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
  public set isOpened(value: boolean) { this._isOpened = value; }

  public get selectedIndex() { return this._selectedIndex; }

  public set selectedIndex(value: number) {
    assert(value + 1 <= this.numOfImages && value >= 0);

    this._selectedIndex = value;
  }

  public get numOfImages() { return this._numOfImages; }
  public set numOfImages(value) { this._numOfImages = value; }

  public get isReady() { return this._isReady; }
  public set isReady(value: boolean) { this._isReady = value; }

  public get hasNext() {
    return this.selectedIndex + 1 < this.numOfImages;
  }

  public get hasPrev() {
    return this.selectedIndex > 0;
  }

  public get pageNumber(): PageNumber {
    return {
      currentPage: this.selectedIndex + 1,
      maxPage: this.numOfImages,
    };
  }
}
