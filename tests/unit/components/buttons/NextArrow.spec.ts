import { shallowMount } from '@vue/test-utils';

import NextArrow from '@/components/buttons/NextArrow.vue';

describe('NextArrow.vue', () => {
  describe('isVisible = trueのとき', () => {
    it('矢印を描画していること', () => {
      const propsData = { isVisible: true };
      const wrapper = shallowMount(NextArrow, { propsData });
      expect(wrapper.isVisible()).toBe(true);
    });
  });

  describe('isVisible = falseのとき', () => {
    it('矢印を描画していないこと', () => {
      const propsData = { isVisible: false };
      const wrapper = shallowMount(NextArrow, { propsData });
      expect(wrapper.isVisible()).toBe(false);
    });
  });

  describe('anchorのクリックイベントが発生したとき', () => {
    it('nextイベントを発行すること', () => {
      const propsData = { isVisible: true };
      const wrapper = shallowMount(NextArrow, { propsData });
      wrapper.find('a').trigger('click');
      expect(wrapper.emitted().next).toBeTruthy();
    });
  });
});
