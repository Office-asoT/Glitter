<template>
  <div
    class="glitter"
    v-on:click="onToggleOpenState"
  >
    <slot></slot>
    <overlay
      v-bind:isOpened="stateManager.state.isOpened"
      v-on:close="onToggleOpenState"
    >
      <loading
        v-bind:isOpened="!stateManager.state.isReady"
        v-bind:showLoadingProgress="showLoadingProgress"
        v-bind:loadingProgress="stateManager.state.loadingProgress"
      />
      <gallery
        v-bind:isOpened="stateManager.state.isReady"
        v-bind:showPageNumbers="showPageNumbers"
        v-bind:selectedIndex="stateManager.state.selectedIndex"
        v-bind:imageItems="imageItems"
        v-bind:hasNext="stateManager.state.hasNext"
        v-bind:hasPrev="stateManager.state.hasPrev"
        v-bind:pageNumber="stateManager.state.pageNumber"
        v-on:next="onNext"
        v-on:prev="onPrev"
      />
      <close-button
        v-if="showCloseButton"
        v-on:close="onToggleOpenState"
      />
    </overlay>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import StateManager from './state/state-manager';
import CachedImageLoader from './cached-image-loader';
import browserCache from './cached-image-loader/browser-cache';
import ImageItem, { CanonicalImage } from './image-item';
import Loading from './components/Loading.vue';
import Gallery from './components/Gallery.vue';
import Overlay from './components/Overlay.vue';
import CloseButton from './components/buttons/CloseButton.vue';

// コンテナーコンポーネント
@Component({
  components: {
    Loading,
    Gallery,
    Overlay,
    CloseButton,
  },
})
export default class Glitter extends Vue {
  // 画像のurlの配列
  @Prop() private images!: Array<string | CanonicalImage>;

  // ページ番号を表示するかどうか？
  @Prop({ default: true }) private showPageNumbers?: boolean;

  // 閉じるボタンを表示するかどうか？
  @Prop({ default: true }) private showCloseButton?: boolean;

  // ローディング画像を表示するかどうか？
  @Prop({ default: true }) private showLoading?: boolean;

  // ローディング画像表示時にプログレスを表示するかどうか？
  @Prop({ default: true }) private showLoadingProgress?: boolean;

  // 画像をリピートして表示するか(ループするか)？
  @Prop({ default: false }) private repeatImages?: boolean;

  private stateManager: StateManager = this.newStateManager();

  @Watch('images')
  private onImagesChanged() {
    this.stateManager = this.newStateManager();
  }

  private get imageItems() {
    return this.images.map(ImageItem.create);
  }

  private onToggleOpenState() {
    this.stateManager.toggleOpenState();
    this.stateManager.resetIndex();
  }

  private onNext() {
    this.stateManager.proceedImage();
  }

  private onPrev() {
    this.stateManager.succeedImage();
  }

  private newStateManager() {
    const imageItems = this.images.map(ImageItem.create);
    const loader = new CachedImageLoader(imageItems, browserCache);
    const { showLoading, repeatImages } = this;
    return new StateManager(loader, { showLoading, repeatImages });
  }
}
</script>

<style scoped lang="less">
.glitter {
  font-size: 16px;
  cursor: pointer;
}
</style>
