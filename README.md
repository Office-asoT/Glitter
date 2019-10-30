# glitter

画像ギャラリーのVueコンポーネント

---

名前は [Luminous](https://github.com/imgix/luminous)(「明るい」) を真似てつけました。

## 使い方

```js
<template>
  <Glitter
    topImage="/path/to/top/image"
    v-bind:images="[
      "/path/to/image/1",
      "/path/to/image/2",
      "/path/to/image/3"
    ]"
  />
</template>

<script>
import Glitter from 'glitter'

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
