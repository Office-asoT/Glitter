<template>
  <div class="glitter__loading-progress-text">
    Loading&nbsp;{{ progress }}&#37;
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { LoadingProgress } from '../state';

@Component
export default class LoadingProgressText extends Vue {
  @Prop() private loadingProgress!: LoadingProgress;

  private get progress(): number {
    const { currentPage, maxPage } = this.loadingProgress;
    return Math.ceil(currentPage / maxPage * 100);
  }
}
</script>

<style lang="less">
.glitter {
  &__loading-progress-text {
    color: rgba(211, 211, 211, .8);
    font-size: 1.2em;
    margin: 7em -2em 0;
  }
}
</style>
