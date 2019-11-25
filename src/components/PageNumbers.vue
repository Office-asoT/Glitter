<template>
  <div
    class="glitter__page-numbers"
    v-on:click.stop=""
  >
    {{ pageNumber.currentPage }} / {{ pageNumber.maxPage }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { PageNumber } from '../state';

// ページ番号を表示するコンポーネント
@Component({})
export default class PageNumbers extends Vue {
  @Prop() private pageNumber!: PageNumber;
}
</script>

<style lang="less">
.glitter {
  &__page-numbers {
    color: #fffafa;
    font-size: 1.2em;
    cursor: default;
  }
 }
</style>
