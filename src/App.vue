<template>
  <div id="app">
    <h1>Sample App for Glitter</h1>
    <glitter
      v-bind:images="[
        require('./assets/salesman1.jpg'),
        require('./assets/salesman2.jpg'),
        require('./assets/salesman3.jpg'),
      ]"
    >
      <div>
        <img src="./assets/salesman1.jpg" />
      </div>
    </glitter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Glitter from './Glitter.vue';

export default Vue.extend({
  name: 'app',

  components: {
    Glitter,
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
