<template>
  <div
    class="glitter"
    v-on:click="onToggleOpenState"
  >
    <slot></slot>
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

// TODO: らっぱー用意してそっちでstoreしこめばよいのでは？？？
// storeはdataにもつ
// imagesの変換器を用意してcaptionを表示する
// ボタンは継承で
// トップ絵はslotに変える
// ローディング
// swipe
// アニメーション

// 動的な画像で検証
// 本物で検証

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
