<template>
  <div class="glitter__arrow-button-container">
    <a
      href="#"
      class="glitter__next-arrow"
      v-show="visible"
      v-on:click.stop="$emit('next')"
    >
      <arrow-right-drop-circle title="Next" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ArrowRightDropCircle from 'vue-material-design-icons/ArrowRightDropCircle.vue';

import 'vue-material-design-icons/styles.css';

@Component({
  components: {
    ArrowRightDropCircle,
  },
})
export default class NextArrow extends Vue {
  @Prop() private visible!: boolean;
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
