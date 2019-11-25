import { shallowMount } from '@vue/test-utils';

import LoadingProgressText from '@/components/LoadingProgressText.vue';

describe('LoadingProgressText.vue', () => {
  it('loadingProgressをパーセントで描画していること', () => {
    const loadingProgress = { currentPage: 10, maxPage: 20 };
    const propsData = { loadingProgress };
    const wrapper = shallowMount(LoadingProgressText, { propsData });
    expect(wrapper.text()).toContain('50%');
  });
});
