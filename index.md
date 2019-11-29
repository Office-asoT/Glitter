---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@asot/glitter/dist/Glitter.umd.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/@asot/glitter/dist//Glitter.css">

<div id="app">
  <glitter v-bind:images="[
    { src: 'https://images.unsplash.com/photo-1510279931157-4ca63af8a363',
      caption: 'person holding gray stainless steel teapot and white ceramic teacup' },
    { src: 'https://images.unsplash.com/photo-1500353391678-d7b57979d6d2',
      caption: 'coffee and succulent plants' },
    { src: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd',
      caption: 'brown ceramic teacup' }
  ]">
    <div>
      <img class="top"
           src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd"
      />
      <p>Click here to open the image gallery.</p>
    </div>
  </glitter>
</div>

<script>
// Local Registration
new Vue({
  components: {
    glitter: Glitter
  }
}).$mount('#app')
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0 0 40px;
  font-size: 1.2em;
}

.top {
  max-width: 80%;
  cursor: pointer;
  margin-top: 30px;
}

.top:hover {
  opacity: .7;
}
</style>

## Usage

### Npm with single file component

Install @asot/glitter:

{% highlight shell %}
npm install @asot/glitter --save
{% endhighlight %}

Then register Glitter in your components and use it:

{% highlight vue %}
<template>
  <glitter v-bind:images="[
    '/path/to/image',
    // Or you can specify a caption
    // via object notation.
    { src: '/path/to/image',
      caption: 'Hello @asot/glitter!' },
  ]">
    <p>Here will be displayed as a cover.</p>
  </glitter>
</template>

<script>
import Glitter from 'glitter';

new Vue({
  components: {
    glitter: Glitter
  }
}).$mount('#app')
</script>
{% endhighlight %}

### Browser

Include @asot/glitter in your page then use it.

{% highlight html %}
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@asot/glitter/dist/Glitter.umd.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@asot/glitter/dist//Glitter.css">

<div id="app">
  <glitter v-bind:images="[
    '/path/to/image',
    // Or you can specify a caption
    // via object notation.
    { src: '/path/to/image',
      caption: 'Hello @asot/glitter!' },
  ]">
    <p>Here will be displayed as a cover.</p>
  </glitter>
</template>

<script>
// Local Registration
new Vue({
  components: {
    glitter: Glitter
  }
}).$mount('#app')
</script>
{% endhighlight %}

## API

- [English](https://github.com/Office-asoT/Glitter/blob/master/README.org#api)
- [Japanese](https://github.com/Office-asoT/Glitter/blob/master/README.jp.org#api)
