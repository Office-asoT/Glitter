<template>
  <div id="app">
    <h1>Sample App for Glitter</h1>
    <Glitter>
      <GlitterTopImg v-bind:src="require('./assets/salesman1.jpg')" />
      <GlitterImages>
        <GlitterItemImg v-bind:src="require('./assets/salesman1.jpg')" />
        <GlitterItemImg v-bind:src="require('./assets/salesman2.jpg')" />
        <GlitterItemImg v-bind:src="require('./assets/salesman3.jpg')" />
      </GlitterImages>
    </Glitter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Glitter from './components/Glitter.vue';
import GlitterTopImg from './components/GlitterTopImg.vue';
import GlitterImages from './components/GlitterImages.vue';
import GlitterItemImg from './components/GlitterItemImg.vue';

export default Vue.extend({
  name: 'app',

  components: {
    Glitter,
    GlitterTopImg,
    GlitterImages,
    GlitterItemImg,
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
