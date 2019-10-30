<template>
  <li
    class="glitter__overlay-item"
    v-bind:class="{ selected: isSelected }"
  >
    <img
      class="glitter__overlay-item-image"
      v-bind:src="src"
    />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

// ギャラリー向けの画像のコンポーネント
export default Vue.extend({
  name: 'GlitterItemImg',

props: ['src', 'isSelected'],
});
</script>

<style scoped lang="less">
.glitter {
  &__overlay-item {
    display: none;
    padding: 1em;

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
