<template>
  <div
    class="glitter"
    v-on:click="onClick"
  >
    <top-image v-bind:src="topImage" />
    <ul class="glitter__list">
      <li
        is="gallery-item"
        v-for="(src, index) in images"
        v-bind:key="index"
        v-bind:src="src"
      />
    </ul>
    <overlay
      v-bind:isOpened="store.state.isOpened"
      v-bind:selectedIndex="store.state.selectedIndex"
      v-bind:images="images"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Store from './store';
import GalleryItem from './components/GalleryItem.vue';
import Overlay from './components/Overlay.vue';
import TopImage from './components/TopImage.vue';

// ルートコンポーネント
export default Vue.extend({
  name: 'Glitter',

  props: {
    topImage: String,
    images: Array,
    store: {
      type: Store,
      default: () => {
        return new Store();
      },
    },
  },

  components: {
    GalleryItem,
    Overlay,
    TopImage,
  },

  methods: {
    onClick() {
      (this.store as any).toggleOpenState();
    },
  },
});
</script>

<style scoped lang="less">
.glitter {
  &__list {
    display: none;
  }
}
</style>
