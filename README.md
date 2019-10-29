# glitter

画像ギャラリーのVueコンポーネント

---

名前は [Luminous](https://github.com/imgix/luminous)(「明るい」) を真似てつけました。

## 使い方

```js
<template>
  <Glitter>
    <GlitterTopImg src="/path/to/top/image />
    <ul>
      <li>
        <GlitterItemImg src="/path/to/image/1" />
      </li>
      <li>
        <GlitterItemImg src="/path/to/image/1" />
      </li>
      <li>
        <GlitterItemImg src="/path/to/image/1" />
      </li>
    </ul>
  </Glitter>
</template>

<script>
import { Glitter, GlitterTopImage, GlitterItemImg } from 'glitter'

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
