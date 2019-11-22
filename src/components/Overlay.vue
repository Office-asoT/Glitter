<template>
  <div
    class="glitter__overlay"
    v-bind:class="{ visible: isOpened }"
    v-on:click.stop="$emit('close')">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// Overlayーを表示するコンポーネント
@Component({})
export default class Overlay extends Vue {
  @Prop() private isOpened!: boolean;
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
    display: none;
    
    position: fixed;
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
}
</style>
