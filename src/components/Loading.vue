<!-- This script is inspired by "Material Design Google Loader In CSS". -->
<!-- https://codemyui.com/material-design-google-loader-in-css -->

<template>
  <div
    class="glitter__loader-container"
    v-show="isOpened"
  >
    <svg class="glitter__loader-circular" viewBox="25 25 50 50">
      <circle class="glitter__loader-circular-path"
              cx="50" cy="50" r="20" fill="none"
              stroke-width="3" stroke-miterlimit="10"/>
    </svg>
    <loading-progress-text
      v-if="showLoadingProgress"
      v-bind:loadingProgress="loadingProgress"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { LoadingProgress } from '../state';
import LoadingProgressText from './LoadingProgressText.vue';

@Component({
  components: {
    LoadingProgressText,
  },
})
export default class Loading extends Vue {
  @Prop() private showLoadingProgress!: boolean;
  @Prop() private isOpened!: boolean;
  @Prop() private loadingProgress!: LoadingProgress;
}
</script>

<style scoped lang="less">
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: rgba(211, 211, 211, .8);
  }
  90% {
    stroke: rgba(211, 211, 211, 1);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.glitter {
  &__loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 100px;
    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  &__loader-circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  &__loader-circular-path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
}
</style>
