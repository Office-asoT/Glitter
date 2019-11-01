<template>
  <div class="glitter__overlay-item-caption">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OverlayItemCaption extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped lang="less">
.glitter {
  &__overlay-item-caption {
    color: #fffafa;
    font-size: 1.2em
  }
}
</style>
