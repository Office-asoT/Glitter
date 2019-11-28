<template>
  <div id="app">
    <h1 class="title">Sample App for Glitter</h1>
    <glitter
      v-bind:images="[
        { src: 'https://images.unsplash.com/photo-1510279931157-4ca63af8a363',
          caption: 'person holding gray stainless steel teapot and white ceramic teacup' },
        { src: 'https://images.unsplash.com/photo-1500353391678-d7b57979d6d2',
          caption: 'coffee and succulent plants' },
        { src: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd',
          caption: 'brown ceramic teacup' },
        { src: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091',
          caption: 'white ceramic mug on table' },
        { src: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff',
          caption: 'coffee beans on table' },
      ]"
      v-bind:showCloseButton="true"
      v-bind:showLoadingProgress="true"
    >
      <div>
        <img class="top"
             src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd"
        />
        <p>Here will be displayed as a cover.</p>
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

.top {
  width: 500px;
  max-width: 60vw;
  cursor: pointer;
  margin-top: 30px;
  font-size: 18px;
}
</style>
