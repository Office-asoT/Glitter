<template>
  <div class="glitter__arrow-button">
    <button
      class="glitter__next-arrow"
      v-on:click.stop="$emit('next')"
    >
      next
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NextArrow',
});
</script>

<style scoped lang="less">
@import './index.less';

.glitter {
  &__next-arrow {
    .glitter__arrow-button();
  }
}
</style>
