import { shallowMount } from '@vue/test-utils';

import Gallery from '@/components/Gallery.vue';
import GalleryItem from '@/components/GalleryItem.vue';
import SwipableUnorderedList from '@/components/SwipableUnorderedList.vue';
import PageNumbers from '@/components/PageNumbers.vue';
import NextArrow from '@/components/buttons/NextArrow.vue';
import PrevArrow from '@/components/buttons/PrevArrow.vue';

describe('Gallery.vue', () => {
  describe('propsのisOpened=trueのとき', () => {
    it('display != noneであること', () => {
      const propsData = props({ isOpened: true });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.isVisible()).toBe(true);
    });

    it('SwipableUnorderedListのnumOfImagesを指定すること', () => {
      const imageItems = [{}, {}];
      const propsData = props({ isOpened: true, imageItems });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(SwipableUnorderedList).props().numOfImages).toBe(2);
    });

    it('SwipableUnorderedListのselectedIndexを指定すること', () => {
      const imageItems = [{}, {}];
      const selectedIndex = 1;
      const propsData = props({ isOpened: true, imageItems, selectedIndex });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(SwipableUnorderedList).props().selectedIndex).toBe(1);
    });

    describe('swipe prev', () => {
      it('swipeのprevイベントをリレーすること', () => {
        const imageItems = [{}, {}];
        const selectedIndex = 0;
        const propsData = props({ isOpened: true, imageItems, selectedIndex });
        const wrapper = shallowMount(Gallery, { propsData });
        const ul = wrapper.find(SwipableUnorderedList);

        ul.vm.$emit('prev');

        expect(wrapper.emitted().prev).toBeTruthy();
      });
    });

    describe('swipe next', () => {
      it('swipeのprevイベントをリレーすること', () => {
        const imageItems = [{}, {}];
        const selectedIndex = 0;
        const propsData = props({ isOpened: true, imageItems, selectedIndex });
        const wrapper = shallowMount(Gallery, { propsData });
        const ul = wrapper.find(SwipableUnorderedList);

        ul.vm.$emit('next');

        expect(wrapper.emitted().next).toBeTruthy();
      });
    });

    it('GalleryItemのnumOfImagesを指定すること', () => {
      const imageItems = [{}, {}];
      const selectedIndex = 1;
      const propsData = props({ isOpened: true, imageItems, selectedIndex });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(GalleryItem).props().numOfImages).toBe(2);
    });

    it('GalleryItemのimageItemを指定すること', () => {
      const imageItems = [{}, {}];
      const selectedIndex = 1;
      const propsData = props({ isOpened: true, imageItems, selectedIndex });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(GalleryItem).props().imageItem).toBe(imageItems[0]);
    });

    it('propsのhasNextをNextArrowにわたしていること', () => {
      const propsData = props({ isOpened: true, hasNext: true });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(NextArrow).props().isVisible).toBeTruthy();
    });

    it('propsのhasPrevをPrevArrowにわたしていること', () => {
      const propsData = props({ isOpened: true, hasPrev: true });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.find(PrevArrow).props().isVisible).toBeTruthy();
    });

    describe('repeatImages=trueのとき', () => {
      it('hadNextの値に限らずNextArrow.isVisibleにtrueをわたしていること', () => {
        const propsData = props({
          isOpened: true, hasNext: false, repeatImages: true });
        const wrapper = shallowMount(Gallery, { propsData });
        expect(wrapper.find(NextArrow).props().isVisible).toBeTruthy();
      });

      it('hasPrevの値に限らずPrevArrow.isVisibleにtrueをわたしていること', () => {
        const propsData = props({
          isOpened: true, hasPrev: false, repeatImages: true });
        const wrapper = shallowMount(Gallery, { propsData });
        expect(wrapper.find(NextArrow).props().isVisible).toBeTruthy();
      });
    });

    it('PrevArrowのprevイベントをリレーすること', () => {
      const propsData = props({ isOpened: true, hasPrev: true });
      const wrapper = shallowMount(Gallery, { propsData });
      const arrow = wrapper.find(PrevArrow);

      arrow.vm.$emit('prev');

      expect(wrapper.emitted().prev).toBeTruthy();
    });

    it('NextArrowのnextイベントをリレーすること', () => {
      const propsData = props({ isOpened: true, hasNext: true });
      const wrapper = shallowMount(Gallery, { propsData });
      const arrow = wrapper.find(NextArrow);

      arrow.vm.$emit('next');

      expect(wrapper.emitted().next).toBeTruthy();
    });

    describe('showPageNumbers=trueのとき', () => {
      it('PageNumbersを描画していること', () => {
        const propsData = props({ isOpened: true, showPageNumbers: true });
        const wrapper = shallowMount(Gallery, { propsData });
        expect(wrapper.find(PageNumbers).isVisible()).toBe(true);
      });

      it('pageNumberをPageNumbersにわたしていること', () => {
        const pageNumber = {};
        const propsData = props({
          isOpened: true, showPageNumbers: true, pageNumber });
        const wrapper = shallowMount(Gallery, { propsData });
        expect(wrapper.find(PageNumbers).props().pageNumber).toBe(pageNumber);
      });
});
  });

  describe('propsのisOpened=falseのとき', () => {
    it('display = noneであること', () => {
      const propsData = props({ isOpened: false });
      const wrapper = shallowMount(Gallery, { propsData });
      expect(wrapper.isVisible()).toBe(false);
    });
  });
});

function props(opts: any) {
  return {
    isOpened: true,
    hasNext: false,
    hasPrev: false,
    imageItems: [],
    repeatImages: false,
    ...opts,
  };
}
