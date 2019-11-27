import SwipeManager, { Direction } from '@/swipe-manager';

describe('SwipeManager', () => {
  describe('#which()', () => {
    describe('lastXがundefinedなとき', () => {
      it('Direction.NONEを返すこと', () => {
        const manager = new SwipeManager(5);
        manager.lastX = void 0;
        expect(manager.which(1, 100)).toBe(Direction.NONE);
      });
    });

    describe('lastXが数字なとき', () => {
      describe('selectedIndexが0なとき', () => {
        describe('lastX < newClientXなとき(右にswipe)', () => {
          it('Direction.NONEを返すこと', () => {
            const manager = new SwipeManager(5);
            manager.lastX = 100;
            expect(manager.which(0, 110)).toBe(Direction.NONE);
          });
        });

        describe('lastX > newClientXなとき(左にswipe)', () => {
          it('Direction.NEXTを返すこと', () => {
            const manager = new SwipeManager(5);
            manager.lastX = 110;
            expect(manager.which(0, 100)).toBe(Direction.NEXT);
          });
        });
      });

      describe('0 < selectedIndex < numOfImagesなとき', () => {
        describe('lastX < newClientXなとき(右にswipe)', () => {
          it('Direction.PREVを返すこと', () => {
            const manager = new SwipeManager(5);
            manager.lastX = 100;
            expect(manager.which(2, 110)).toBe(Direction.PREV);
          });
        });

        describe('lastX > newClientXなとき(左にswipe)', () => {
          it('Direction.NEXTを返すこと', () => {
            const manager = new SwipeManager(5);
            manager.lastX = 110;
            expect(manager.which(2, 100)).toBe(Direction.NEXT);
          });
        });
      });

      describe('selectedIndex = numOfImages - 1なとき', () => {
        describe('lastX < newClientXなとき(右にswipe)', () => {
          it('Direction.PREVを返すこと', () => {
            const manager = new SwipeManager(5);
            manager.lastX = 100;
            expect(manager.which(4, 110)).toBe(Direction.PREV);
          });
        });

        describe('lastX > newClientXなとき(左にswipe)', () => {
          it('Direction.NONEを返すこと', () => {
            const manager = new SwipeManager(5);
            manager.lastX = 110;
            expect(manager.which(4, 100)).toBe(Direction.NONE);
          });
        });
      });
    });
  });
});
