# glitter

画像ギャラリーのVueコンポーネント

---

名前は [Luminous](https://github.com/imgix/luminous)(「明るい」) を真似てつけました。

## 使い方

```js
<template>
  <glitter
    v-bind:images="[
      "/path/to/image/1",
      { src: "/path/to/image/2", caption: "キャプションも指定できます" },
      "/path/to/image/3"
    ]"
  >
    <img src="/path/to/top/image" />
  </glitter>
</template>

<script>
import Glitter from 'glitter'
import 'glitter/dist/Glitter.css'

export default {
  components: {
    Glitter
  }
}
</script>
```

## 開発

Vue-cli が必要です。

```
npm install
```

### build

```
npm run build
```
