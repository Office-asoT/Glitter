---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
external_javascripts:
  - https://unpkg.com/vue
  - https://unpkg.com/asot/glitter/dist/Glitter.umd.min.js
external_styles:
  - https://unpkg.com/asot/glitter/dist//Glitter.css
---

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/asot/glitter/dist/Glitter.umd.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/asot/glitter/dist//Glitter.css">

{% highlight html %}
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/asot/glitter/dist/Glitter.umd.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/asot/glitter/dist//Glitter.css">

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
      <p>Here will be displayed as a cover.</p>
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
{% endhighlight %}

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
      <p>Here will be displayed as a cover.</p>
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
