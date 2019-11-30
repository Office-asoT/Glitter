---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@asot/glitter/dist/Glitter.umd.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/@asot/glitter/dist//Glitter.css">

<div id="app">
  <glitter v-bind:images="[
    { src: '/Glitter/assets/images/coffee3.jpg',
      caption: 'Photo by Emre Gencer on Unsplash' },
    { src: '/Glitter/assets/images/coffee2.jpeg',
      caption: 'Photo by Danielle MacInnes on Unsplash' },
    { src: '/Glitter/assets/images/coffee1.jpeg',
      caption: 'Photo by Jakub Dziubak on Unsplash' }
  ]">
    <div>
      <img class="top"
           src="/Glitter/assets/images/coffee1.jpeg"
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
  <div id="app">
    <glitter v-bind:images="[
      '/path/to/image',
      // Or you can specify a caption
      // via object notation.
      { src: '/path/to/image',
        caption: 'Hello @asot/glitter!' },
    ]">
      <p>Click here to open the image gallery.</p>
    </glitter>
  </div>
</template>

<script>
import Glitter from '@asot/glitter';
import '@asot/glitter/dist//Glitter.css'

export default {
  name: 'app',
  components: {
    Glitter,
  }
}
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
    <p>Click here to open the image gallery.</p>
  </glitter>
</div>

<script>
// Local Registration
new Vue({
  components: {
    Glitter
  }
}).$mount('#app')
</script>
{% endhighlight %}

## API

- [English](https://github.com/Office-asoT/Glitter/blob/master/README.md#api)
- [Japanese](https://github.com/Office-asoT/Glitter/blob/master/README.jp.org#api)
