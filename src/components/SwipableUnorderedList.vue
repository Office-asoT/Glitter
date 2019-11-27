<template>
  <ul
    class="glitter__swipe"
    v-bind:class="className"
    v-bind:style="styleObject"
    v-on:mousedown="lock"
    v-on:mouseup="move"
    v-on:touchstart="lock"
    v-on:touchend="move"
  >
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import SwipeManager, { Direction } from '../swipe-manager';

// swipeできるul
@Component
export default class SwipableUnorderedList extends Vue {
  @Prop() private selectedIndex!: number;
  @Prop() private numOfImages!: number;
  @Prop() private className?: string;

  private swipeManager: SwipeManager = new SwipeManager(this.numOfImages);

  @Watch('numOfImages')
  private onNumOfImagesChanged() {
    this.swipeManager = new SwipeManager(this.numOfImages);
  }

  private get styleObject() {
    return {
      '--selectedIndex': this.selectedIndex,
      '--numOfImages': this.numOfImages,
    };
  }

  private lock(e: MouseEvent) {
    this.swipeManager.lastX = SwipeManager.getClientX(e);
  }

  private move(e: MouseEvent) {
    const x = SwipeManager.getClientX(e);
    const d = this.swipeManager.which(this.selectedIndex, x);

    if (d !== Direction.NONE) {
      this.$emit(Direction[d].toLowerCase());
    }
  }
}
</script>

<style lang="less">
.glitter {
  &__swipe {
    display: flex;
    align-items: center;
    width: calc(var(--numOfImages) * 100%);
    transform: translate(calc(var(--selectedIndex, 0)
      / var(--numOfImages) * (-100%)));
    transition: transform .5s ease-out;
  }
}
</style>
