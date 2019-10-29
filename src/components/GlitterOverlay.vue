<template>
  <div class="glitter__overlay">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// ギャラリーを表示するコンポーネント
export default Vue.extend({
  name: 'GlitterOverlay',

  props: ['src'],
});
</script>

<style scoped>
</style>
