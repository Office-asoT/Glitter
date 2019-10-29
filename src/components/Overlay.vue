<template>
  <div
    class="glitter__overlay"
    v-bind:class="{ visible: isOpened }"
    v-on:click="$emit('close')">
    <ul class="glitter_gallery">
      <li
        is="overlay-item"
        v-for="(src, index) in images"
        v-bind:key="index"
        v-bind:src="src"
        v-bind:class="{ selected: index == selectedIndex }"
      />
    </ul>
    <button
      class="glitter__prev-button"
      v-on:click.stop="$emit('prev')"
    >
      prev
    </button>
    <button
      class="glitter__next-button"
      v-on:click.stop="$emit('next')"
    >
      next
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import OverlayItem from './OverlayItem.vue';

// ギャラリーを表示するコンポーネント
export default Vue.extend({
  name: 'Overlay',

  props: ['isOpened', 'selectedIndex', 'images'],

  components: {
    OverlayItem,
  },
});
</script>

<style scoped lang="less">
.glitter {
  &__overlay {
    position: fixed;
    display: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;

    &.visible {
      display: block;
    }
  }
}
</style>
