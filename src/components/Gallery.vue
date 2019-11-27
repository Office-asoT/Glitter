<template>
  <div
    class="glitter__gallery-container"
    v-show="isOpened"
  >
    <swipable-unordered-list
      v-bind:className="'glitter__gallery'"
      v-bind:numOfImages="imageItems.length"
      v-bind:selectedIndex="selectedIndex"
      v-on:prev="$emit('prev')"
      v-on:next="$emit('next')"
    >
      <li
        is="gallery-item"
        v-for="(imageItem, index) in imageItems"
        v-bind:key="index"
        v-bind:numOfImages="imageItems.length"
        v-bind:isSelected="index === selectedIndex"
        v-bind:imageItem="imageItem"
      />
    </swipable-unordered-list>
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

import { PageNumber } from '../state';
import GalleryItem from './GalleryItem.vue';
import SwipableUnorderedList from './SwipableUnorderedList.vue';
import NextArrow from './buttons/NextArrow.vue';
import PrevArrow from './buttons/PrevArrow.vue';
import PageNumbers from './PageNumbers.vue';
import ImageItem from '../image-item';

// ギャラリーを表示するコンポーネント
@Component({
  components: {
    GalleryItem,
    SwipableUnorderedList,
    NextArrow,
    PrevArrow,
    PageNumbers,
  },
})
export default class Gallery extends Vue {
  @Prop() private isOpened!: boolean;
  @Prop() private selectedIndex!: number;
  @Prop() private imageItems!: ImageItem[];
  @Prop() private hasNext!: boolean;
  @Prop() private hasPrev!: boolean;
  @Prop() private showPageNumbers!: boolean;
  @Prop() private pageNumber!: PageNumber;
}
</script>

<style scoped lang="less">
.glitter {
  &__gallery-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  &__gallery {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
