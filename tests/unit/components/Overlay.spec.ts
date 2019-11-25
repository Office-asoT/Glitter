import { shallowMount } from '@vue/test-utils';

import Overlay from '@/components/Overlay.vue';

describe('Overlay.vue', () => {
  describe('propsのisOpened=trueのとき', () => {
    it('display != noneであること', () => {
      const propsData = { isOpened: true };
      const wrapper = shallowMount(Overlay, { propsData });
      expect(wrapper.isVisible()).toBe(true);
    });

    describe('clickされたとき', () => {
      it('closeイベントを発行していること', () => {
        const propsData = { isOpened: true };
        const wrapper = shallowMount(Overlay, { propsData });
        wrapper.trigger('click')
        expect(wrapper.emitted().close).toBeTruthy();
      });
    });
  });

  describe('propsのisOpened=falseのとき', () => {
    it('display = noneであること', () => {
      const propsData = { isOpened: false };
      const wrapper = shallowMount(Overlay, { propsData });
      expect(wrapper.isVisible()).toBe(false);
    });
  });
});
