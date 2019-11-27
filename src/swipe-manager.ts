export enum Direction {
  NONE,
  PREV,
  NEXT,
}

// siwpeの管理をする
export default class SwipeManager {
  public static getClientX(e: MouseEvent) {
    return (
      ('TouchEvent' in window && e instanceof TouchEvent && e.changedTouches)
        ? e.changedTouches[0]
        : e).clientX;
  }

  private numOfImages: number;
  /* tslint:disable variable-name */
  private _lastX?: number;
  /* tslint:disable variable-name */

  constructor(numOfImages: number) {
    this.numOfImages = numOfImages;
  }

  public get lastX(): number | undefined {
    return this._lastX;
  }

  public set lastX(lastX: number | undefined) {
    this._lastX = lastX;
  }

  // どの方向に移動すべきか？
  public which(selectedIndex: number, newClientX: number) {
    let d = Direction.NONE;

    if (!this.lastX && this.lastX !== 0) {
      return d;
    }

    const dx = newClientX - this.lastX;
    const s = Math.sign(dx);

    if ((selectedIndex > 0 && s > 0) ||
        (selectedIndex < this.numOfImages - 1 && s < 0)) {
      d = s < 0 ? Direction.NEXT : Direction.PREV;
    }

    this.lastX = void 0;

    return d;
  }
}
