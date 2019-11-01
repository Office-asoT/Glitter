<template>
  <li
    class="glitter__overlay-item"
    v-bind:class="{ selected: isSelected }"
    v-on:click.stop=""
  >
    <img
      class="glitter__overlay-item-image"
      v-bind:src="image.src"
    />
    <overlay-item-caption v-bind:text="image.caption" />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import OverlayItemCaption from './OverlayItemCaption.vue';
import { CanonicalImage } from '../image-item';

// ギャラリー向けの画像のコンポーネント
@Component({
  components: {
    OverlayItemCaption,
  },
})
export default class OverlayItem extends Vue {
  @Prop() private image!: CanonicalImage;
  @Prop() private isSelected!: boolean;
}
</script>

<style scoped lang="less">
.glitter {
  &__overlay-item {
    display: none;
    padding: 1em;
    cursor: default;

    &.selected {
      display: block;
    }
  }

  &__overlay-item-image {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
