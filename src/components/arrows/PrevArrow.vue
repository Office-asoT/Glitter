<template>
  <div class="glitter__arrow-button-container">
    <a
      href="#"
      class="glitter__prev-arrow"
      v-bind:class="{ visible: visible }"
      v-on:click.stop="$emit('prev')"
    >
      <arrow-left-drop-circle title="Prev" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ArrowLeftDropCircle from 'vue-material-design-icons/ArrowLeftDropCircle.vue';

import 'vue-material-design-icons/styles.css';

@Component({
  components: {
    ArrowLeftDropCircle,
  },
})
export default class PrevArrow extends Vue {
  @Prop() private visible!: boolean;
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
