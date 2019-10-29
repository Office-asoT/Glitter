<template>
  <div class="glitter__top-image">
    <img v-bind:src="src" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GlitterTopImg',
  props: ['src'],
});
</script>

<style scoped>
</style>
