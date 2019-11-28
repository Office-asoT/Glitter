<template>
  <div
    class="glitter__arrow-button-container"
    v-show="isVisible"
  >
    <a
      href="javascript:void 0"
      class="glitter__prev-arrow"
      v-on:click.stop="$emit('prev')"
    >
      <chevron-left title="Prev" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

import 'vue-material-design-icons/styles.css';

@Component({
  components: {
    ChevronLeft,
  },
})
export default class PrevArrow extends Vue {
  @Prop() private isVisible!: boolean;
}
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
