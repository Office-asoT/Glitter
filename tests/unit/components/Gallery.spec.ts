import { shallowMount } from '@vue/test-utils';

import Gallery from '@/components/Gallery.vue';
import NextArrow from '@/components/buttons/NextArrow.vue';
import PrevArrow from '@/components/buttons/PrevArrow.vue';

describe('Gallery.vue', () => {
  describe('propsのisOpened=trueのとき', () => {
    it('display != noneであること', () => {
      const propsData = { isOpened: true };
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.isVisible()).toBe(true);
    });

    it('propsのhasNextをNextArrowにわたしていること', () => {
      const propsData = { isOpened: true, hasNext: true };
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(NextArrow).props().isVisible).toBeTruthy();
    });

    it('propsのhasPrevをPrevArrowにわたしていること', () => {
      const propsData = { isOpened: true, hasPrev: true };
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(PrevArrow).props().isVisible).toBeTruthy();
    });

    describe('repeatImages=trueのとき', () => {
      it('hadNextの値に限らずNextArrow.isVisibleにtrueをわたしていること', () => {
        const propsData = { isOpened: true, hasNext: false, repeatImages: true };
        const wrapper = shallowMount(Gallery, { propsData });
        expect(wrapper.find(NextArrow).props().isVisible).toBeTruthy();
      });

      it('hasPrevの値に限らずPrevArrow.isVisibleにtrueをわたしていること', () => {
        const propsData = { isOpened: true, hasPrev: false, repeatImages: true };
        const wrapper = shallowMount(Gallery, { propsData });
        expect(wrapper.find(NextArrow).props().isVisible).toBeTruthy();
      });
    });
  });
});
