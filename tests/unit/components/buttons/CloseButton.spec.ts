import { shallowMount } from '@vue/test-utils';

import CloseButton from '@/components/buttons/CloseButton.vue';

describe('CloseButton.vue', () => {
  describe('anchorのクリックイベントが発生したとき', () => {
    it('closeイベントを発行すること', () => {
      const propsData = { isVisible: true };
      const wrapper = shallowMount(CloseButton, { propsData });
      wrapper.find('a').trigger('click');
      expect(wrapper.emitted().close).toBeTruthy();
    });
  });
});
