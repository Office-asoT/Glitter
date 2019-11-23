<template>
  <div id="app">
    <h1>Sample App for Glitter</h1>
    <glitter
      v-bind:images="[
        { src: 'https://incloop.com/blog_neta/test/big.png?data=1',
        caption: '函館1' },
        { src: 'https://incloop.com/blog_neta/test/big.png?data=2',
        caption: '函館2' },
        { src: 'http://art5.photozou.jp/bin/photo/15364685/org.bin?size=1024',
        caption: '函館3' },
        require('./assets/job_sokki_woman.png'),
        { src: require('./assets/job_syokugyou_taiken_kangoshi_boy.png'),
          caption: 'キャプションも指定できます' },
        require('./assets/job_syokugyou_taiken_syouboushi_girl.png'),
      ]"
      v-bind:showCloseButton="true"
      v-bind:showLoadingProgress="true"
    >
      <div>
        <img src="./assets/job_kyuujinshi.png" />
        <p>ここが表紙として表示されます</p>
      </div>
    </glitter>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Glitter from './Glitter.vue';

@Component({
  components: {
    Glitter,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
