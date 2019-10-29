<template>
  <div class="glitter__top-image">
    <img v-bind:src="src" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// 表紙絵のコンポーネント
export default Vue.extend({
  name: 'GlitterTopImg',

  props: ['src', 'onClick'],
});
</script>

<style scoped>
</style>
