import Store, { State } from '@/store';

describe('Store', () => {
  describe('constructor', () => {
    it('state.isOpenedはfalseであること', () => {
      expect(new Store().state.isOpened).toBe(false);
    });

    it('state.selectedIndexは0であること', () => {
      expect(new Store().state.selectedIndex).toBe(0);
    });
  });

  describe('#proceedImage()', () => {
    describe('今のindexを次にすすめてもnumOfImagesを越えないとき', () => {
      it('stateのindexをすすめていること', () => {
        const store = new Store(['1', '2', '3']);
        store.state.selectedIndex = 1;
        store.proceedImage();
        expect(store.state.selectedIndex).toBe(2);
      });
    });

    describe('今のindexを次にすすめてもlimitを越るとき', () => {
      it('stateのindexをすすめていないこと', () => {
        const store = new Store(['1', '2', '3']);
        store.state.selectedIndex = 2;
        store.proceedImage();
        expect(store.state.selectedIndex).toBe(2);
      });
    });
  });

  describe('State', () => {
    describe('set selectedIndex', () => {
      describe('selectedIndexがnumOfImages - 1より大きいとき', () => {
        it('assertionエラーを投げること', () => {
          const state = new State(defaultStateData());

          expect(() => {
            state.selectedIndex = 2;
          }).toThrow();
        });
      });

      describe('selectedIndexが0より小さいとき', () => {
        it('assertionエラーを投げること', () => {
          const state = new State(defaultStateData());

          expect(() => {
            state.selectedIndex = -1;
          }).toThrow();
        });
      });
    });
  });
});

function defaultStateData(opts = {}) {
  return {
    isOpened: false,
    selectedIndex: 0,
    numOfImages: 2,
    ...opts,
  };
}
