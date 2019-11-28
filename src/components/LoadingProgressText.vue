<template>
  <div class="glitter__loading-progress-text">
    Loading&nbsp;{{ loadingProgress | percentage }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { LoadingProgress } from '../state';
import percentage from '../filters/percentage';

@Component({
  filters: {
    percentage,
  },
})
export default class LoadingProgressText extends Vue {
  @Prop() private loadingProgress!: LoadingProgress;
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
