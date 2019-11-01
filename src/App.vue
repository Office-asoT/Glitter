<template>
  <div id="app">
    <h1>Sample App for Glitter</h1>
    <glitter
      v-bind:images="[
        require('./assets/job_sokki_woman.png'),
        { src: require('./assets/job_syokugyou_taiken_kangoshi_boy.png'),
          caption: 'キャプションも指定できます' },
        require('./assets/job_syokugyou_taiken_syouboushi_girl.png'),
      ]"
    >
      <div>
        <img src="./assets/job_kyuujinshi.png" />
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
