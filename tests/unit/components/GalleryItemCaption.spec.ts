import { shallowMount } from '@vue/test-utils';

import GalleryItemCaption from '@/components/GalleryItemCaption.vue';

describe('GalleryItemCaption.vue', () => {
  it('propsのtextを描画していること', () => {
    const propsData = { text: 'Hello world!' };
    const wrapper = shallowMount(GalleryItemCaption, { propsData });
    expect(wrapper.text()).toContain('Hello world!');
  });
});
