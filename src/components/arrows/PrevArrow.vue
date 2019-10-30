<template>
  <div class="glitter__arrow-button">
    <button
      class="glitter__prev-arrow"
      v-on:click.stop="$emit('prev')"
    >
      prev
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PrevArrow',
});
</script>

<style scoped lang="less">
@import './index.less';

.glitter {
  &__prev-arrow {
    .glitter__arrow-button();
  }
}
</style>
