<template>
  <div class="glitter__top_image">
    <img v-bind:src="src" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopImage',

  props: ['src'],
});
</script>

<style scoped lang="less">
</style>
