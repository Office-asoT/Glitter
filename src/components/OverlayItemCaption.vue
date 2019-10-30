<template>
  <div class="glitter__overlay-item-caption">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OverlayItemCaption',
  props: ['text'],
});
</script>

<style scoped lang="less">
.glitter {
  &__overlay-item-caption {
    color: #fffafa;
    font-size: 1.2em
  }
}
</style>
