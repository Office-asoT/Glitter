<template>
  <li
    class="glitter__gallery-item"
    v-bind:class="{ selected: isSelected }"
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
export default class OverlayItem extends Vue {
  @Prop() private imageItem!: ImageItem;
  @Prop() private isSelected!: boolean;
}
</script>

<style scoped lang="less">
.glitter {
  &__gallery-item {
    display: none;
    padding: 1em;
    cursor: default;

    &.selected {
      display: block;
    }
  }

  &__gallery-item-image {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
