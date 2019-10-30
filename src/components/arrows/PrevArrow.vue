<template>
  <div class="glitter__arrow-button-container">
    <a
      href="#"
      class="glitter__prev-arrow"
      v-on:click.stop="$emit('prev')"
    >
      <arrow-left-drop-circle />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArrowLeftDropCircle from 'vue-material-design-icons/ArrowLeftDropCircle.vue';

import 'vue-material-design-icons/styles.css';

export default Vue.extend({
  name: 'PrevArrow',

  components: {
    ArrowLeftDropCircle,
  },
});
</script>

<style scoped lang="less">
@import './index.less';

.glitter {
  &__prev-arrow {
    .glitter__arrow-button();

    left: @marginRatio;
  }
}
</style>
