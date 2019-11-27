import State from '@/state';

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
    describe('repeatImages = falseのとき', () => {
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

    describe('repeatImages = trueのとき', () => {
      describe('selectedIndexがnumOfImages - 1のとき', () => {
        it('trueを返すこと', () => {
          const state = new State(defaultStateData({ repeatImages: true }));
          state.selectedIndex = 1;
          expect(state.hasNext).toBe(true);
        });
      });
    });
  });

  describe('get hasPrev', () => {
    describe('repeatImages = falseのとき', () => {
      describe('selectedIndexが0のとき', () => {
        it('falseであること', () => {
          const state = new State(defaultStateData());
          state.selectedIndex = 0;
          expect(state.hasPrev).toBe(false);
        });
      });

      describe('0 < selectedIndexのとき', () => {
        it('trueであること', () => {
          const state = new State(defaultStateData());
          state.selectedIndex = 1;
          expect(state.hasPrev).toBe(true);
        });
      });
    });

    describe('repeatImages = trueのとき', () => {
      describe('selectedIndexが0のとき', () => {
        it('trueであること', () => {
          const state = new State(defaultStateData({ repeatImages: true }));
          state.selectedIndex = 0;
          expect(state.hasPrev).toBe(true);
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
    isReady: true,
    repeatImages: false,
    ...opts,
  };
}
