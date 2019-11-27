import { shallowMount } from '@vue/test-utils';

import PrevArrow from '@/components/buttons/PrevArrow.vue';

describe('PrevArrow.vue', () => {
  describe('isVisible = trueのとき', () => {
    it('矢印を描画していること', () => {
      const propsData = { isVisible: true };
      const wrapper = shallowMount(PrevArrow, { propsData });
      expect(wrapper.isVisible()).toBe(true);
    });
  });

  describe('isVisible = falseのとき', () => {
    it('矢印を描画していないこと', () => {
      const propsData = { isVisible: false };
      const wrapper = shallowMount(PrevArrow, { propsData });
      expect(wrapper.isVisible()).toBe(false);
    });
  });

  describe('anchorのクリックイベントが発生したとき', () => {
    it('prevイベントを発行すること', () => {
      const propsData = { isVisible: true };
      const wrapper = shallowMount(PrevArrow, { propsData });
      wrapper.find('a').trigger('click');
      expect(wrapper.emitted().prev).toBeTruthy();
    });
  });
});
