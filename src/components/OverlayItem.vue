<template>
  <li
    class="glitter__overlay-item"
    v-bind:class="{ selected: isSelected }"
  >
    <img
      class="glitter__overlay-item-image"
      v-bind:src="image.src"
    />
    <overlay-item-caption v-bind:text="image.caption" />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

import OverlayItemCaption from './OverlayItemCaption.vue';

// ギャラリー向けの画像のコンポーネント
export default Vue.extend({
  name: 'OverlayItem',

  props: ['image', 'isSelected'],

  components: {
    OverlayItemCaption,
  },
});
</script>

<style scoped lang="less">
.glitter {
  &__overlay-item {
    display: none;
    padding: 1em;

    &.selected {
      display: block;
    }
  }

  &__overlay-item-image {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
