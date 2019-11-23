<template>
  <div class="glitter__close-button-container">
    <a
      href="#"
      class="glitter__close"
      v-on:click.stop="$emit('close')"
    >
      <close title="Close" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Close from 'vue-material-design-icons/Close.vue';

import 'vue-material-design-icons/styles.css';

@Component({
  components: {
    Close,
  },
})
export default class CloseButton extends Vue {
}
</script>

<style scoped lang="less">
@import './index.less';

.glitter {
  &__close {
    .glitter__button();

    top: 3%;
    right: 10%;
  }
}
</style>
