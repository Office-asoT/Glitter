import { shallowMount } from '@vue/test-utils';
import Loading from '@/components/Loading.vue';

describe('Loading.vue', () => {
  describe('propsのisOpened=trueのとき', () => {
    it('display != noneであること', () => {
      const propsData = { isOpened: true };
      const wrapper = shallowMount(Loading, { propsData });
      expect(wrapper.isVisible()).toBe(true);
    });
  });
});
