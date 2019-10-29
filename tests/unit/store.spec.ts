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
    describe('今のindexを次にすすめてもlimitを越えないとき', () => {
      it('stateのindexをすすめていること', () => {
        const store = new Store();
        store.state.selectedIndex = 18;
        store.proceedImage({ limit: 20 });
        expect(store.state.selectedIndex).toBe(19);
      });
    });

    describe('今のindexを次にすすめてもlimitを越るとき', () => {
      it('stateのindexをすすめていないこと', () => {
        const store = new Store();
        store.state.selectedIndex = 19;
        store.proceedImage({ limit: 20 });
        expect(store.state.selectedIndex).toBe(19);
      });
    });
  });
});
