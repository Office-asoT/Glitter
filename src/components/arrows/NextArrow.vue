<template>
  <div class="glitter__arrow-button-container">
    <a
      href="#"
      class="glitter__next-arrow"
      v-on:click.stop="$emit('next')"
    >
      <arrow-right-drop-circle />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArrowRightDropCircle from 'vue-material-design-icons/ArrowRightDropCircle.vue';

import 'vue-material-design-icons/styles.css';

export default Vue.extend({
  name: 'NextArrow',

  components: {
    ArrowRightDropCircle,
  },
});
</script>

<style scoped lang="less">
@import './index.less';

.glitter {
  &__next-arrow {
    .glitter__arrow-button();

    right: @marginRatio;
  }
}
</style>
