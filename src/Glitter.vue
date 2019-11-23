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
        v-bind:isOpened="!store.state.isReady"
      />
      <gallery
        v-bind:isOpened="store.state.isReady"
        v-bind:selectedIndex="store.state.selectedIndex"
        v-bind:images="normalizedImages()"
        v-bind:hasNext="store.state.hasNext"
        v-bind:hasPrev="store.state.hasPrev"
        v-bind:showPageNumbers="showPageNumbers"
        v-bind:pageNumber="store.state.pageNumber"
        v-on:next="onNext"
        v-on:prev="onPrev"
        v-on:close="onToggleOpenState"
      />
    </overlay>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import Store from './store';
import { CachedImageLoader } from './image-loader';
import ImageItem, { CanonicalImage } from './image-item';
import Loading from './components/Loading.vue';
import Gallery from './components/Gallery.vue';
import Overlay from './components/Overlay.vue';

// コンテナーコンポーネント
@Component({
  components: {
    Loading,
    Gallery,
    Overlay,
  },
})
export default class Glitter extends Vue {
  // 画像のurlの配列
  @Prop() private images!: Array<string | CanonicalImage>;

  // ローディング画像を表示するかどうか？
  @Prop({ default: true }) private showLoading?: boolean;

  // ページ番号を表示するかどうか？
  @Prop({ default: true }) private showPageNumbers?: boolean;

  private store: Store = this.newStore();

  @Watch('images')
  public onImagesChanged() {
    this.store = this.newStore();
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

  private normalizedImages() {
    return this.images.map(ImageItem.create);
  }

  private newStore() {
    return new Store(
      new CachedImageLoader(this.images),
      {
        showLoading: this.showLoading,
      },
    );
  }
}
</script>

<style scoped lang="less">
.glitter {
  font-size: 16px;
  cursor: pointer;
}
</style>
