<template>
  <div
    class="glitter"
    v-on:click="onToggleOpenState"
  >
    <slot></slot>
    <loading
      v-bind:isOpened="store.state.isOpened && !store.state.isReady"
    />
    <overlay
      v-bind:isOpened="store.state.isOpened && store.state.isReady"
      v-bind:selectedIndex="store.state.selectedIndex"
      v-bind:images="normalizedImages()"
      v-bind:hasNext="store.state.hasNext"
      v-bind:hasPrev="store.state.hasPrev"
      v-on:next="onNext"
      v-on:prev="onPrev"
      v-on:close="onToggleOpenState"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import Store from './store';
import ImageItem, { CanonicalImage } from './image-item';
import Loading from './components/Loading.vue';
import Overlay from './components/Overlay.vue';

// コンテナーコンポーネント
@Component({
  components: {
    Loading,
    Overlay,
  },
})
export default class Glitter extends Vue {
  @Prop() private images!: Array<string | CanonicalImage>;

  private store: Store = new Store(this.images);

  @Watch('images')
  public onImagesChanged() {
    this.store = new Store(this.images);
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
}
</script>

<style scoped lang="less">
.glitter {
  font-size: 16px;
  cursor: pointer;
}
</style>
