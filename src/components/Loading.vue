<!-- This script is inspired by "Material Design Google Loader In CSS". -->
<!-- https://codemyui.com/material-design-google-loader-in-css -->

<template>
  <div
    class="glitter__loader-container"
    v-bind:class="{ visible: isOpened }"
  >
    <svg class="glitter__loader-circular" viewBox="25 25 50 50">
      <circle class="glitter__loader-circular-path"
              cx="50" cy="50" r="20" fill="none"
              stroke-width="2" stroke-miterlimit="10"/>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  @Prop() private isOpened!: boolean;
}
</script>

<style scoped lang="less">
@green: #008744;
@blue: #0057e7;
@red: #d62d20;
@yellow: #ffa700;
@white: #eee;

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
    stroke: @red;
  }
  40% {
    stroke: @blue;
  }
  66% {
    stroke: @green;
  }
  80%,
  90% {
    stroke: @yellow;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.glitter {
  &__loader-container {
    display: none;
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
  
    &.visible {
      display: block;
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
