<template>
  <div
    class="glitter"
    v-on:click="onClick"
  >
    <div class="glitter__top_image">
      <img v-bind:src="topImage" />
    </div>
    <ul class="glitter__list">
      <li
        is="gallery-item"
        v-for="(src, index) in images"
        v-bind:key="index"
        v-bind:src="src"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GalleryItem from './components/GalleryItem.vue';

// ルートコンポーネント
export default Vue.extend({
  name: 'Glitter',

  props: ['topImage', 'images'],

  components: {
    GalleryItem,
  },

  methods: {
    onClick() {
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
