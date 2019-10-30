import Store from '@/store';

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
});
