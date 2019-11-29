An image gallery component like Lightbox for or Vue 2.x.

(日本語のREADMEは [README.jp.org](./README.jp.md) にあります。)

[![npm version](https://badge.fury.io/js/%40asot%2Fglitter.svg)](https://badge.fury.io/js/%40asot%2Fglitter)
![Github Actions](https://github.com/Office-asoT/Glitter/workflows/.github/workflows/ci.yml/badge.svg)

![img](./images/example.gif)

# Table of Contents

1.  [Install](#org0de66bf)
    1.  [Npm](#orga5e7162)
    2.  [Browser](#org8d3d051)
2.  [Usage](#orgd639374)
    1.  [API](#org8844423)
        1.  [images: Array<string | { src: string, caption: string }>](#org69127d7)
        2.  [showPageNumbers: boolean](#orgf5bd699)
        3.  [showCloseButton: boolean](#orgfc65d2f)
        4.  [showLoading: boolean](#orgc8bfb94)
        5.  [showLoadingProgress: boolean](#orgeb6bcd0)
        6.  [repeatImages: boolean](#orga9a0049)
    2.  [Development](#orge846ab7)
        1.  [Project setup](#org039bbb5)
        2.  [Compiles and hot-reloads for development](#org460001c)
        3.  [Compiles and minifies for production](#orgd60f9a6)
        4.  [Run unit tests](#orgad18873)
        5.  [Lints files](#org6ac5ce9)
    3.  [License](#orgc70eb84)

<a id="org0de66bf"></a>

# Install


<a id="orga5e7162"></a>

## Npm

    npm install @asot/glitter --save

You may install Glitter component globaly:

    import Glitter from '@asot/glitter';
    import '@asot/glitter/dist//Glitter.css'
    
    Vue.component('glitter', Glitter);

Or you can register Glitter in your components:

    import Glitter from '@asot/glitter';
    import '@asot/glitter/dist//Glitter.css'
    
    export default {
      ...
      components: {
        Glitter,
      },
      ...
    };


<a id="org8d3d051"></a>

## Browser

Include @asot/glitter in the page.

    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/@asot/glitter/dist/Glitter.umd.min.js"></script>
    
    <link rel="stylesheet" href="https://unpkg.com/@asot/glitter/dist/Glitter.css">
    
    <script>
    // Global Registration
    Vue.component('glitter', Glitter);
    
    // Local Registration
    new Vue({
      components: {
        glitter: Glitter
      }
    })
    </script>


<a id="orgd639374"></a>

# Usage

You may now use Glitter component in your markup:

    <glitter
      v-bind:images="[
        '/path/to/image',
        { src: '/path/to/image', caption: 'Hello glitter' },
      ]"
      <p>
        You can write arbitrary markup.<br />
        Here will be rendered as top.
      </p>
    </glitter>


<a id="org8844423"></a>

## API


<a id="org69127d7"></a>

### images: Array<string | { src: string, caption: string }>

Required, an array of image urls. You can specify a caption as well in object notation.


<a id="orgf5bd699"></a>

### showPageNumbers: boolean

Display page numbers (default to `true`).


<a id="orgfc65d2f"></a>

### showCloseButton: boolean

Display a close button (default to `true`).


<a id="orgc8bfb94"></a>

### showLoading: boolean

Display loding image (default to `true`).


<a id="orgeb6bcd0"></a>

### showLoadingProgress: boolean

Display loading progress (default to `true`).


<a id="orga9a0049"></a>

### repeatImages: boolean

Repeat images (default to `false`).


<a id="orge846ab7"></a>

## Development

You need [Vue Cli](https://cli.vuejs.org/).


<a id="org039bbb5"></a>

### Project setup

    npm install


<a id="org460001c"></a>

### Compiles and hot-reloads for development

    npm run serve


<a id="orgd60f9a6"></a>

### Compiles and minifies for production

    npm run build


<a id="orgad18873"></a>

### Run unit tests

    npm run test:unit


<a id="org6ac5ce9"></a>

### Lints files

    npm run lint


<a id="orgc70eb84"></a>

## License

[MIT](./LICENSE)

