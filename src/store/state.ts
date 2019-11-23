import assert from '../assert';
import ImageItem from '../image-item';

export interface PageNumber {
  currentPage: number;
  maxPage: number;
}

export type LoadingProgress = PageNumber;

export default class State {
  /* tslint:disable variable-name */
  private _imageItems: ImageItem[];
  private _isOpened: boolean;
  private _selectedIndex: number;
  private _isReady: boolean;
  private _numOfImages: number;
  private _loadedImageCount: number = 0;
  /* tslint:enable variable-name */

  constructor({
    imageItems = [],
    isOpened = false,
    selectedIndex = 0,
    isReady = false,
  }: {
    imageItems: ImageItem[],
    isOpened: boolean,
    selectedIndex: number,
    isReady: boolean,
  }) {
    this._imageItems = imageItems;
    this._isOpened = isOpened;
    this._selectedIndex = selectedIndex;
    this._isReady = isReady;
    this._numOfImages = imageItems.length;
  }

  public get imageItems() { return this._imageItems; }

  public get isOpened() { return this._isOpened; }
  public set isOpened(value: boolean) { this._isOpened = value; }

  public get selectedIndex() { return this._selectedIndex; }

  public set selectedIndex(value: number) {
    assert(value + 1 <= this.numOfImages && value >= 0);

    this._selectedIndex = value;
  }

  public get numOfImages() { return this._numOfImages; }

  public get isReady() { return this._isReady; }
  public set isReady(value: boolean) { this._isReady = value; }

  public get loadedImageCount() { return this._loadedImageCount; }

  public set loadedImageCount(value: number) {
    this._loadedImageCount = value;
  }

  public get hasNext() {
    return this.selectedIndex + 1 < this.numOfImages;
  }

  public get hasPrev() {
    return this.selectedIndex > 0;
  }

  public get loadingProgress() {
    return {
      currentPage: this.loadedImageCount,
      maxPage: this.numOfImages,
    };
  }

  public get pageNumber(): PageNumber {
    return {
      currentPage: this.selectedIndex + 1,
      maxPage: this.numOfImages,
    };
  }
}
