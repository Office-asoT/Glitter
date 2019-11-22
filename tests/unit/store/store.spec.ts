import { EventEmitter } from 'events';

import Store from '@/store';

describe('Store', () => {
  describe('constructor', () => {
    it('state.isOpenedはfalseであること', () => {
      const store = new Store(new DummyImageLoader(2));
      expect(store.state.isOpened).toBe(false);
    });

    it('state.selectedIndexは0であること', () => {
      const store = new Store(new DummyImageLoader(2));
      expect(store.state.selectedIndex).toBe(0);
    });

    it('state.numOfImagesは画像の枚数と一致すること', () => {
      const store = new Store(new DummyImageLoader(3));
      expect(store.state.numOfImages).toBe(3);
    });

    describe('opts.showLoadingがtrueのとき', () => {
      it('state.isReadyはfalseであること', () => {
        const store = new Store(new DummyImageLoader(2), { showLoading: true });
        expect(store.state.isReady).toBe(false);
      });

      describe('imageLoaderがreadを発火したとき', () => {
        it('state.isReadyはtrueであること', () => {
          const loader = new DummyImageLoader(2);
          const store = new Store(loader, { showLoading: true });

          expect(store.state.isReady).toBe(false);
          loader.emit('ready');
          expect(store.state.isReady).toBe(true);
        });
      });

      describe('imageLoaderがerror発火したとき', () => {
        it('state.isReadyはtrueであること', () => {
          const loader = new DummyImageLoader(2);
          const store = new Store(loader, { showLoading: true });

          expect(store.state.isReady).toBe(false);
          loader.emit('error');
          expect(store.state.isReady).toBe(true);
        });
      });
    });

    describe('opts.showLoadingがfalseのとき', () => {
      it('state.isReadyはtrueであること', () => {
        const store = new Store(new DummyImageLoader(2), { showLoading: false });
        expect(store.state.isReady).toBe(true);
      });
    });
  });

  describe('#proceedImage()', () => {
    describe('今のindexを次にすすめてもnumOfImagesを越えないとき', () => {
      it('stateのindexをすすめていること', () => {
        const store = new Store(new DummyImageLoader(3));
        store.state.selectedIndex = 1;
        store.proceedImage();
        expect(store.state.selectedIndex).toBe(2);
      });
    });

    describe('今のindexを次にすすめてもlimitを越るとき', () => {
      it('stateのindexをすすめていないこと', () => {
        const store = new Store(new DummyImageLoader(3));
        store.state.selectedIndex = 2;
        store.proceedImage();
        expect(store.state.selectedIndex).toBe(2);
      });
    });
  });
});

class DummyImageLoader extends EventEmitter {
  /* tslint:disable variable-name */
  private _size: number;
  /* tslint:enable variable-name */

  constructor(size: number) {
    super();
    this._size = size;
  }

  public get size() {
    return this._size;
  }
}
