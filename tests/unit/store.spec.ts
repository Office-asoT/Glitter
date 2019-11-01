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
      describe('指定されたindexがnumOfImages - 1より大きいとき', () => {
        it('assertionエラーを投げること', () => {
          const state = new State(defaultStateData());

          expect(() => {
            state.selectedIndex = 2;
          }).toThrow();
        });
      });

      describe('指定されたindexが0より小さいとき', () => {
        it('assertionエラーを投げること', () => {
          const state = new State(defaultStateData());

          expect(() => {
            state.selectedIndex = -1;
          }).toThrow();
        });
      });
    });

    describe('get hasNext', () => {
      describe('selectedIndexがnumOfImages - 1のとき', () => {
        it('falseを返すこと', () => {
          const state = new State(defaultStateData());
          state.selectedIndex = 1;
          expect(state.hasNext).toBe(false);
        });
      });

      describe('selectedIndex < numOfImages - 1のとき', () => {
        it('trueを返すこと', () => {
          const state = new State(defaultStateData());
          state.selectedIndex = 0;
          expect(state.hasNext).toBe(true);
        });
      });
    });

    describe('get hasPrev', () => {
      describe('selectedIndexが0のとき', () => {
        const state = new State(defaultStateData());
        state.selectedIndex = 0;
        expect(state.hasPrev).toBe(false);
      });

      describe('0 < selectedIndexのとき', () => {
        const state = new State(defaultStateData());
        state.selectedIndex = 1;
        expect(state.hasPrev).toBe(true);
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
