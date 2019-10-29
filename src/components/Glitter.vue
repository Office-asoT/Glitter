<template>
  <div
    class="glitter"
    v-on:click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GlitterOverlay from './components/GlitterOverlay.vue'

// 今のI/Fだとオーバーレイに画像を渡せない…

// ルートコンポーネント
export default Vue.extend({
  name: 'Glitter',

  components: {
    GlitterOverlay,
  }

  methods: {
    onClick: function() {
      console.log(arguments);
    }
  }
});
</script>

<style scoped>
</style>
