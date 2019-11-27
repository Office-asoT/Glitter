import { shallowMount } from '@vue/test-utils';

import GalleryItem from '@/components/GalleryItem.vue';
import GalleryItemCaption from '@/components/GalleryItemCaption.vue';

describe('GalleryItem.vue', () => {
  it('widthに1 / numOfImagesの幅を指定していること', () => {
    const propsData = props();
    const wrapper = shallowMount(GalleryItem, { propsData });
    expect(wrapper.find('.glitter__gallery-item').attributes().style)
      .toMatch(/width\s*:\s*25%/);
  });

  it('imgタグを描画していること', () => {
    const imageItem = { src: 'foo', caption: 'bar' };
    const propsData = props({ imageItem });
    const wrapper = shallowMount(GalleryItem, { propsData });
    const img = wrapper.find('.glitter__gallery-item-image');
    expect(img.attributes().src).toBe(imageItem.src);
    expect(img.attributes().alt).toBe(imageItem.caption);
    expect(img.attributes().title).toBe(imageItem.caption);
  });

  it('GalleryItemCaptionにimageItem.captionを渡していること', () => {
    const imageItem = { src: 'foo', caption: 'bar' };
    const propsData = props({ imageItem });
    const wrapper = shallowMount(GalleryItem, { propsData });
    expect(wrapper.find(GalleryItemCaption).props().text).toBe(imageItem.caption);
  });
});

function props(opts: any = {}) {
  return {
    imageItem: {
      src: 'hoge',
      caption: 'piyo',
    },
    numOfImages: 4,
    ...opts,
  };
}
