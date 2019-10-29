<template>
  <div
    class="glitter__top_image"
    v-on:click="$emit('clicktop')"
  >
    <img v-bind:src="src" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// 表紙絵のコンポーネント
export default Vue.extend({
  name: 'TopImage',

  props: ['src'],
});
</script>

<style scoped lang="less">
</style>
