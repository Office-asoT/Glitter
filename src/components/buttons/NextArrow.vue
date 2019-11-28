<template>
  <div
    class="glitter__arrow-button-container"
    v-show="isVisible"
  >
    <a
      href="javascript:void 0"
      class="glitter__next-arrow"
      v-on:click.stop="$emit('next')"
    >
      <chevron-right title="Next" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

import 'vue-material-design-icons/styles.css';

@Component({
  components: {
    ChevronRight,
  },
})
export default class NextArrow extends Vue {
  @Prop() private isVisible!: boolean;
}
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
