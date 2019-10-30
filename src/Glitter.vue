<template>
  <div
    class="glitter"
    v-on:click="onToggleOpenState"
  >
    <slot></slot>
    <overlay
      v-bind:isOpened="store.state.isOpened"
      v-bind:selectedIndex="store.state.selectedIndex"
      v-bind:images="normalizedImages"
      v-on:next="onNext"
      v-on:prev="onPrev"
      v-on:close="onToggleOpenState"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Store from './store';
import ImageItem from './image-item';
import Overlay from './components/Overlay.vue';

// コンテナーコンポーネント
export default Vue.extend({
  name: 'Glitter',

  props: ['images'],

  data: function() {
    return {
      store: new Store(this.images),
    };
  },

  components: {
    Overlay,
  },

  methods: {
    onToggleOpenState: function() {
      // FIXME: 何故かanyにキャストしないとTSに怒られる…
      (this as any).store.toggleOpenState();
      (this as any).store.resetIndex();
    },

    onNext() {
      (this as any).store.proceedImage();
    },

    onPrev() {
      (this as any).store.succeedImage();
    },
  },

  computed: {
    normalizedImages: function() {
      return this.images.map(ImageItem.create);
    },
  },
});
</script>

<style scoped lang="less">
.glitter {
  font-size: 16px;
  cursor: pointer;
}
</style>
