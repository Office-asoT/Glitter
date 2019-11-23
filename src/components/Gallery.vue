<template>
  <div
    class="glitter__gallery-container"
    v-bind:class="{ visible: isOpened }"
  >
    <ul class="glitter__gallery">
      <li
        is="gallery-item"
        v-for="(image, index) in images"
        v-bind:key="index"
        v-bind:isSelected="index === selectedIndex"
        v-bind:image="image"
      />
    </ul>
    <prev-arrow
      v-bind:visible="hasPrev"
      v-on:prev="$emit('prev')"
    />
    <next-arrow
      v-bind:visible="hasNext"
      v-on:next="$emit('next')"
    />
    <page-numbers
      v-if="showPageNumbers"
      v-bind:pageNumber="pageNumber"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import PageNumber from '../store/state';
import GalleryItem from './GalleryItem.vue';
import NextArrow from './buttons/NextArrow.vue';
import PrevArrow from './buttons/PrevArrow.vue';
import PageNumbers from './PageNumbers.vue';
import { CanonicalImage } from '../image-item';

// ギャラリーを表示するコンポーネント
@Component({
  components: {
    GalleryItem,
    NextArrow,
    PrevArrow,
    PageNumbers,
  },
})
export default class Overlay extends Vue {
  @Prop() private isOpened!: boolean;
  @Prop() private selectedIndex!: number;
  @Prop() private images!: CanonicalImage[];
  @Prop() private hasNext!: boolean;
  @Prop() private hasPrev!: boolean;
  @Prop() private showPageNumbers!: boolean;
  @Prop() private pageNumber!: PageNumber;
}
</script>

<style scoped lang="less">
@keyframes zoom {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.glitter {
  &__gallery-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: none;

    &.visible {
      display: block;
    }
  }

  &__gallery {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
