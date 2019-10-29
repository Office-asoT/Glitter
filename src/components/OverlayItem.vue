<template>
  <li class="glitter__overlay-item">
    <img class="glitter__overlay-item-image" v-bind:src="src" />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

// ギャラリー向けの画像のコンポーネント
export default Vue.extend({
  name: 'GlitterItemImg',

  props: ['src'],
});
</script>

<style scoped lang="less">
.glitter {
  &__overlay-item {
    display: none;

    &.selected {
      display: block;
    }
  }
}
</style>
