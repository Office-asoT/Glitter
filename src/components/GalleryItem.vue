<template>
  <li
    class="glitter__gallery-item"
    v-bind:style="styleObject"
    v-on:click.stop=""
  >
    <img
      class="glitter__gallery-item-image"
      v-bind:src="imageItem.src"
      v-bind:alt="imageItem.caption"
      v-bind:title="imageItem.caption"
    />
    <gallery-item-caption v-bind:text="imageItem.caption" />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import GalleryItemCaption from './GalleryItemCaption.vue';
import ImageItem from '../image-item';

// ギャラリー向けの画像のコンポーネント
@Component({
  components: {
    GalleryItemCaption,
  },
})
export default class GalleryItem extends Vue {
  @Prop() private imageItem!: ImageItem;
  @Prop() private isSelected!: boolean;
  @Prop() private numOfImages!: number;

  private get styleObject() {
    return {
      width: `${1 / this.numOfImages * 100}%`,
    };
  }
}
</script>

<style scoped lang="less">
.glitter {
  &__gallery-item {
    padding: 1em;
    cursor: default;
  }

  &__gallery-item-image {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
