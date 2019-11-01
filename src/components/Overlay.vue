<template>
  <div
    class="glitter__overlay"
    v-bind:class="{ visible: isOpened }"
    v-on:click.stop="$emit('close')">
    <div class="glitter__overlay-container">
      <ul class="glitter__gallery">
        <li
          is="overlay-item"
          v-for="(image, index) in images"
          v-bind:key="index"
          v-bind:isSelected="index === selectedIndex"
          v-bind:image="image"
        />
      </ul>
      <prev-arrow v-on:prev="$emit('prev')" />
      <next-arrow v-on:next="$emit('next')" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import OverlayItem from './OverlayItem.vue';
import NextArrow from './arrows/NextArrow.vue';
import PrevArrow from './arrows/PrevArrow.vue';
import { CanonicalImage } from '../image-item';

// ギャラリーを表示するコンポーネント
@Component({
  components: {
    OverlayItem,
    NextArrow,
    PrevArrow,
  },
})
export default class Overlay extends Vue {
  @Prop() private isOpened!: boolean;
  @Prop() private selectedIndex!: number;
  @Prop() private images!: CanonicalImage[];
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
  &__overlay {
    position: fixed;
    display: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
    text-align: center;
  
    &.visible {
      display: block;
      animation: zoom 180ms ease-out;
    }
  }

  &__overlay-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }

  &__gallery {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
