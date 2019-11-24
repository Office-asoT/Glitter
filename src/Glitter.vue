<template>
  <div
    class="glitter"
    v-on:click="onToggleOpenState"
  >
    <slot></slot>
    <overlay
      v-bind:isOpened="store.state.isOpened"
      v-on:close="onToggleOpenState"
    >
      <loading
        v-bind:showLoadingProgress="showLoadingProgress"
        v-bind:isOpened="!store.state.isReady"
        v-bind:loadingProgress="store.state.loadingProgress"
      />
      <gallery
        v-bind:isOpened="store.state.isReady"
        v-bind:selectedIndex="store.state.selectedIndex"
        v-bind:imageItems="imageItems"
        v-bind:hasNext="store.state.hasNext"
        v-bind:hasPrev="store.state.hasPrev"
        v-bind:showPageNumbers="showPageNumbers"
        v-bind:pageNumber="store.state.pageNumber"
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

import Store from './store';
import CachedImageLoader from './cached-image-loader';
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
  @Prop({ default: false }) private showLoadingProgress?: boolean;

  private store: Store = this.newStore();

  @Watch('images')
  private onImagesChanged() {
    this.store = this.newStore();
  }

  private get imageItems() {
    return this.images.map(ImageItem.create);
  }

  private onToggleOpenState() {
    this.store.toggleOpenState();
    this.store.resetIndex();
  }

  private onNext() {
    this.store.proceedImage();
  }

  private onPrev() {
    this.store.succeedImage();
  }

  private newStore() {
    const imageItems = this.images.map(ImageItem.create);
    const loader = new CachedImageLoader(imageItems);
    return new Store(loader, { showLoading: this.showLoading });
  }
}
</script>

<style scoped lang="less">
.glitter {
  font-size: 16px;
  cursor: pointer;
}
</style>
