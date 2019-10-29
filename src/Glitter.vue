<template>
  <div class="glitter">
    <top-image
      v-bind:src="topImage"
      v-on:clicktop="onToggleOpenState"
    />
    <overlay
      v-bind:isOpened="store.state.isOpened"
      v-bind:selectedIndex="store.state.selectedIndex"
      v-bind:images="images"
      v-on:next="onNext"
      v-on:prev="onPrev"
      v-on:close="onToggleOpenState"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Store from './store';
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
    Overlay,
    TopImage,
  },

  methods: {
    onToggleOpenState() {
      (this.store as any).toggleOpenState();
    },

    onNext() {
      (this.store as any).proceedImage({ limit: this.images.length });
    },

    onPrev() {
      (this.store as any).succeedImage();
    },
  },
});
</script>

<style scoped lang="less">
</style>
