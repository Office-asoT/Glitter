<template>
  <li class="glitter__item-image">
    <img v-bind:src="src" />
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

<style scoped>
</style>
