<template>
  <div class="glitter__item-image">
    <img v-bind:src="src" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GlitterItemImg',
  props: ['src'],
});
</script>

<style scoped>
</style>
