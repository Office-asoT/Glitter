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

// - [x] storeはdataにもつ
// - [ ] imagesの変換器を用意してcaptionを表示する
// - [x] ボタンは継承で
// - [ ] ボタンの見た目
// - [x] トップ絵はslotに変える
// - [ ] ローディング
// - [ ] swipe
// - [ ] アニメーション

// - [x] 動的な画像で検証
// - [ ] 本物で検証

// ルートコンポーネント
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
    onToggleOpenState() {
      this.store.toggleOpenState();
    },

    onNext() {
      this.store.proceedImage();
    },

    onPrev() {
      this.store.succeedImage();
    },
  },
});
</script>

<style scoped lang="less">
.glitter {
  font-size: 16px;
}
</style>
