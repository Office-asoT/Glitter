import { shallowMount } from '@vue/test-utils';

import Loading from '@/components/Loading.vue';
import LoadingProgressText from '@/components/LoadingProgressText.vue';

describe('Loading.vue', () => {
  describe('propsのisOpened=trueのとき', () => {
    it('display != noneであること', () => {
      const propsData = props({ isOpened: true });
      const wrapper = shallowMount(Loading, { propsData });
      expect(wrapper.isVisible()).toBe(true);
    });

    describe('propsのshowLoadingProgress=trueのとき', () => {
      it('LoadingProgressコンポーネントを持っていること', () => {
        const propsData = props({ isOpened: true, showLoadingProgress: true });
        const wrapper = shallowMount(Loading, { propsData });
        expect(wrapper.find(LoadingProgressText).exists()).toBe(true);
      });

      it('LoadingProgressにloadingProgressを渡していること', () => {
        const loadingProgress = { a: 1 };
        const propsData = props({
          isOpened: true,
          showLoadingProgress: true,
          loadingProgress,
        });
        const wrapper = shallowMount(Loading, { propsData });

        expect(wrapper.find(LoadingProgressText).props().loadingProgress)
          .toBe(loadingProgress);
      });
    });

    describe('propsのshowLoadingProgress=falseのとき', () => {
      it('LoadingProgressコンポーネントを持っていないこと', () => {
        const propsData = props({ isOpened: true, showLoadingProgress: false });
        const wrapper = shallowMount(Loading, { propsData });
        expect(wrapper.find(LoadingProgressText).exists()).toBe(false);
      });
    });
  });

  describe('propsのisOpened=falseのとき', () => {
    it('display = noneであること', () => {
      const propsData = props({ isOpened: false });
      const wrapper = shallowMount(Loading, { propsData });
      expect(wrapper.isVisible()).toBe(false);
    });
  });
});

function props(opts: any) {
  return {
    showLoadingProgress: false,
    isOpened: false,
    loadingProgress: {},
    ...opts,
  };
}
