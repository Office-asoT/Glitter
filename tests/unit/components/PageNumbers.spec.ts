import { shallowMount } from '@vue/test-utils';

import PageNumbers from '@/components/PageNumbers.vue';

describe('PageNumbers.vue', () => {
  it('propsのpageNumberを描画していること', () => {
    const pageNumber = { currentPage: 10, maxPage: 20 };
    const wrapper = shallowMount(PageNumbers, { propsData: { pageNumber } });
    expect(wrapper.text()).toContain('10 / 20');
  });
});
