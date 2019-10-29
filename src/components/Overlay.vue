<template>
  <div
    class="glitter__overlay"
    v-bind:class="{ visible: isOpened }">
    <ul class="glitter_gallery">
      <li
        class="glitter_gallery-item"
        is="gallery-item"
        v-for="(src, index) in images"
        v-bind:key="index"
        v-bind:src="src"
        v-bind:class="{ selected: index === selectedIndex }"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GalleryItem from './GalleryItem.vue';

// ギャラリーを表示するコンポーネント
export default Vue.extend({
  name: 'Overlay',

  props: ['isOpened', 'selectedIndex', 'images'],

  components: {
    GalleryItem,
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

    &.visible {
      display: block;
    }
  }
}
</style>
