<template>
  <ul class="glitter__image-list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GlitterImages',
});
</script>

<style scoped lang="less">
.glitter {
  &__image-list {
    display: none;
  }
}
</style>
