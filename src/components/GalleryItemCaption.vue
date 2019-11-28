<template>
  <div class="glitter__gallery-item-caption">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GalleryItemCaption extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped lang="less">
.glitter {
  &__gallery-item-caption {
    color: #fffafa;
    margin-top: 1em;
  }
}
</style>
