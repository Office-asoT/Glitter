(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Glitter"] = factory(require("vue"));
	else
		root["Glitter"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "066f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_id_6a264ace_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1e21");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_id_6a264ace_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_id_6a264ace_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_id_6a264ace_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0a66":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "142d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNumbers_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5c82");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNumbers_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNumbers_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNumbers_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1516":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "16bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItem_vue_vue_type_style_index_0_id_2720a44f_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c86c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItem_vue_vue_type_style_index_0_id_2720a44f_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItem_vue_vue_type_style_index_0_id_2720a44f_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItem_vue_vue_type_style_index_0_id_2720a44f_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1e21":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2834":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3b73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingProgressText_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f61");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingProgressText_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingProgressText_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingProgressText_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3f61":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5129":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevArrow_vue_vue_type_style_index_0_id_48a92b6c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a66");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevArrow_vue_vue_type_style_index_0_id_48a92b6c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevArrow_vue_vue_type_style_index_0_id_48a92b6c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevArrow_vue_vue_type_style_index_0_id_48a92b6c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5c82":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7313":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8280":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_83f075a6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a43b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_83f075a6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_83f075a6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_83f075a6_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8738":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_c5412338_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d79a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_c5412338_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_c5412338_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_c5412338_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9157":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_42b8cef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1516");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_42b8cef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_42b8cef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_42b8cef0_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "a0ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Glitter_vue_vue_type_style_index_0_id_fdc18c4e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c53b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Glitter_vue_vue_type_style_index_0_id_fdc18c4e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Glitter_vue_vue_type_style_index_0_id_fdc18c4e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Glitter_vue_vue_type_style_index_0_id_fdc18c4e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");


/***/ }),

/***/ "a43b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a53f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItemCaption_vue_vue_type_style_index_0_id_01631282_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("afb5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItemCaption_vue_vue_type_style_index_0_id_01631282_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItemCaption_vue_vue_type_style_index_0_id_01631282_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryItemCaption_vue_vue_type_style_index_0_id_01631282_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "afb5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bc48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextArrow_vue_vue_type_style_index_0_id_6c8687ab_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2834");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextArrow_vue_vue_type_style_index_0_id_6c8687ab_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextArrow_vue_vue_type_style_index_0_id_6c8687ab_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextArrow_vue_vue_type_style_index_0_id_6c8687ab_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c53b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c86c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipableUnorderedList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7313");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipableUnorderedList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipableUnorderedList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipableUnorderedList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d48d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d79a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "faa1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Glitter.vue?vue&type=template&id=fdc18c4e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"glitter",on:{"click":_vm.onToggleOpenState}},[_vm._t("default"),_c('overlay',{attrs:{"isOpened":_vm.stateManager.state.isOpened},on:{"close":_vm.onToggleOpenState}},[_c('loading',{attrs:{"isOpened":!_vm.stateManager.state.isReady,"showLoadingProgress":_vm.showLoadingProgress,"loadingProgress":_vm.stateManager.state.loadingProgress}}),_c('gallery',{attrs:{"isOpened":_vm.stateManager.state.isReady,"showPageNumbers":_vm.showPageNumbers,"repeatImages":_vm.repeatImages,"selectedIndex":_vm.stateManager.state.selectedIndex,"imageItems":_vm.imageItems,"hasNext":_vm.stateManager.state.hasNext,"hasPrev":_vm.stateManager.state.hasPrev,"pageNumber":_vm.stateManager.state.pageNumber},on:{"next":_vm.onNext,"prev":_vm.onPrev}}),(_vm.showCloseButton)?_c('close-button',{on:{"close":_vm.onToggleOpenState}}):_vm._e()],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Glitter.vue?vue&type=template&id=fdc18c4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */


// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof external_commonjs_vue_commonjs2_vue_root_Vue_default.a
        ? superProto.constructor
        : external_commonjs_vue_commonjs2_vue_root_Vue_default.a;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function vue_class_component_esm_Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.2.2 MIT LICENSE copyright 2019 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) ||
                    null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = { from: reactiveInjectKey, default: {} };
        }
        if (typeof provide !== 'function' || !provide.managedReactive) {
            var original_2 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var _this = this;
                var rv = typeof original_2 === 'function'
                    ? original_2.call(this)
                    : original_2;
                rv = Object.create(rv || null);
                // set reactive services (propagates previous services if necessary)
                rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
                var _loop_1 = function (i) {
                    rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
                    Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                        enumerable: true,
                        get: function () { return _this[i]; },
                    });
                };
                var this_1 = this;
                for (var i in provide.managedReactive) {
                    _loop_1(i);
                }
                return rv;
            };
            provide.managedReactive = {};
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./src/assert.ts
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// アサートする
function assert(assertion) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!assertion) {
    throw new AssertionError(message);
  }
}
var AssertionError =
/*#__PURE__*/
function (_Error) {
  _inherits(AssertionError, _Error);

  function AssertionError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, AssertionError);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, message));
  }

  return AssertionError;
}(_wrapNativeSuper(Error));
// CONCATENATED MODULE: ./src/state/index.ts
function state_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var state_State =
/*#__PURE__*/
function () {
  /* tslint:enable variable-name */
  function State(_ref) {
    var _ref$isOpened = _ref.isOpened,
        isOpened = _ref$isOpened === void 0 ? false : _ref$isOpened,
        _ref$selectedIndex = _ref.selectedIndex,
        selectedIndex = _ref$selectedIndex === void 0 ? 0 : _ref$selectedIndex,
        _ref$isReady = _ref.isReady,
        isReady = _ref$isReady === void 0 ? false : _ref$isReady,
        numOfImages = _ref.numOfImages;

    state_classCallCheck(this, State);

    this._loadedImageCount = 0;
    this._isOpened = isOpened;
    this._selectedIndex = selectedIndex;
    this._numOfImages = numOfImages;
    this._isReady = isReady;
  }

  _createClass(State, [{
    key: "isOpened",
    get: function get() {
      return this._isOpened;
    },
    set: function set(value) {
      this._isOpened = value;
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      return this._selectedIndex;
    },
    set: function set(value) {
      assert(value + 1 <= this.numOfImages && value >= 0);
      this._selectedIndex = value;
    }
  }, {
    key: "numOfImages",
    get: function get() {
      return this._numOfImages;
    },
    set: function set(value) {
      this._numOfImages = value;
    }
  }, {
    key: "isReady",
    get: function get() {
      return this._isReady;
    },
    set: function set(value) {
      this._isReady = value;
    }
  }, {
    key: "loadedImageCount",
    get: function get() {
      return this._loadedImageCount;
    },
    set: function set(value) {
      this._loadedImageCount = value;
    }
  }, {
    key: "hasNext",
    get: function get() {
      return this.selectedIndex + 1 < this.numOfImages;
    }
  }, {
    key: "hasPrev",
    get: function get() {
      return this.selectedIndex > 0;
    }
  }, {
    key: "loadingProgress",
    get: function get() {
      return {
        currentPage: this.loadedImageCount,
        maxPage: this.numOfImages
      };
    }
  }, {
    key: "pageNumber",
    get: function get() {
      return {
        currentPage: this.selectedIndex + 1,
        maxPage: this.numOfImages
      };
    }
  }]);

  return State;
}();


// CONCATENATED MODULE: ./src/state/state-manager.ts
function state_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function state_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function state_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) state_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) state_manager_defineProperties(Constructor, staticProps); return Constructor; }

 // 状態管理用のクラス

var state_manager_StateManager =
/*#__PURE__*/
function () {
  function StateManager(imageLoader) {
    var _this = this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    state_manager_classCallCheck(this, StateManager);

    this.state = new state_State({
      isOpened: false,
      selectedIndex: 0,
      numOfImages: imageLoader.size,
      isReady: false
    });
    this.opts = opts;

    var onProgress = function onProgress(x) {
      _this.state.loadedImageCount += 1;
    };

    var onReady = function onReady() {
      _this.state.isReady = true;
      imageLoader.removeListener('progress', onProgress);
      imageLoader.removeListener('ready', onReady);
      imageLoader.removeListener('error', onReady);
    };

    if (this.opts.showLoading) {
      imageLoader.once('ready', onReady); // errorになってもどうしようもないのでisReady=trueにしてしまう

      imageLoader.once('error', onReady);
      imageLoader.on('progress', onProgress);
    } else {
      this.state.isReady = true;
    }
  }

  state_manager_createClass(StateManager, [{
    key: "toggleOpenState",
    value: function toggleOpenState() {
      this.state.isOpened = !this.state.isOpened;
    }
  }, {
    key: "resetIndex",
    value: function resetIndex() {
      this.state.selectedIndex = 0;
    }
  }, {
    key: "proceedImage",
    value: function proceedImage() {
      var _this$state = this.state,
          currentIndex = _this$state.selectedIndex,
          numOfImages = _this$state.numOfImages;
      this.state.selectedIndex = currentIndex + 1 < numOfImages ? currentIndex + 1 : this.opts.repeatImages ? 0 : currentIndex;
    }
  }, {
    key: "succeedImage",
    value: function succeedImage() {
      var _this$state2 = this.state,
          currentIndex = _this$state2.selectedIndex,
          numOfImages = _this$state2.numOfImages;
      this.state.selectedIndex = currentIndex - 1 < 0 ? this.opts.repeatImages ? numOfImages - 1 : 0 : currentIndex - 1;
    }
  }]);

  return StateManager;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__("faa1");

// CONCATENATED MODULE: ./src/cached-image-loader/index.ts


function cached_image_loader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { cached_image_loader_typeof = function _typeof(obj) { return typeof obj; }; } else { cached_image_loader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return cached_image_loader_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function cached_image_loader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cached_image_loader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cached_image_loader_createClass(Constructor, protoProps, staticProps) { if (protoProps) cached_image_loader_defineProperties(Constructor.prototype, protoProps); if (staticProps) cached_image_loader_defineProperties(Constructor, staticProps); return Constructor; }

function cached_image_loader_possibleConstructorReturn(self, call) { if (call && (cached_image_loader_typeof(call) === "object" || typeof call === "function")) { return call; } return cached_image_loader_assertThisInitialized(self); }

function cached_image_loader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function cached_image_loader_getPrototypeOf(o) { cached_image_loader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return cached_image_loader_getPrototypeOf(o); }

function cached_image_loader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) cached_image_loader_setPrototypeOf(subClass, superClass); }

function cached_image_loader_setPrototypeOf(o, p) { cached_image_loader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return cached_image_loader_setPrototypeOf(o, p); }

 // キャッシュを利用する画像ローダ

var cached_image_loader_CachedImageLoader =
/*#__PURE__*/
function (_EventEmitter) {
  cached_image_loader_inherits(CachedImageLoader, _EventEmitter);

  function CachedImageLoader(imageItems, cache) {
    var _this;

    cached_image_loader_classCallCheck(this, CachedImageLoader);

    _this = cached_image_loader_possibleConstructorReturn(this, cached_image_loader_getPrototypeOf(CachedImageLoader).call(this));
    _this.imageItems = [];
    _this.imageItems = imageItems;
    _this.cache = cache;

    _this.load();

    return _this;
  }

  cached_image_loader_createClass(CachedImageLoader, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var _this2 = this;

        var loadOne;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                loadOne =
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regenerator_default.a.mark(function _callee(imageItem, index) {
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this2.cache(imageItem);

                          case 2:
                            // 現在ロード済みの画像のindexをemitする
                            _this2.emit('progress', index + 1);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function loadOne(_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }();

                _context2.prev = 1;
                _context2.next = 4;
                return Promise.all(this.imageItems.map(loadOne));

              case 4:
                this.emit('ready');
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                this.emit('error', _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "size",
    get: function get() {
      return this.imageItems.length;
    }
  }]);

  return CachedImageLoader;
}(events["EventEmitter"]);


// CONCATENATED MODULE: ./src/cached-image-loader/browser-cache.ts
function browserCache(imageItem) {
  var img = new Image();
  img.src = imageItem.src;

  if (img.complete) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve, reject) {
      img.addEventListener('load', function () {
        return resolve();
      });
      img.addEventListener('error', function (e) {
        return reject(e);
      });
    });
  }
}
// CONCATENATED MODULE: ./src/image-item.ts
function image_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function image_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function image_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) image_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) image_item_defineProperties(Constructor, staticProps); return Constructor; }

var ImageItem =
/*#__PURE__*/
function () {
  image_item_createClass(ImageItem, null, [{
    key: "create",
    value: function create(data) {
      if (typeof data === 'string') {
        return new ImageItem({
          src: data,
          caption: ''
        });
      } else {
        return new ImageItem(data);
      }
    }
  }]);

  function ImageItem(data) {
    image_item_classCallCheck(this, ImageItem);

    this.src = data.src;
    this.caption = data.caption;
  }

  return ImageItem;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=template&id=42b8cef0&scoped=true&
var Loadingvue_type_template_id_42b8cef0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpened),expression:"isOpened"}],staticClass:"glitter__loader-container"},[_c('svg',{staticClass:"glitter__loader-circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"glitter__loader-circular-path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none","stroke-width":"3","stroke-miterlimit":"10"}})]),(_vm.showLoadingProgress)?_c('loading-progress-text',{attrs:{"loadingProgress":_vm.loadingProgress}}):_vm._e()],1)}
var Loadingvue_type_template_id_42b8cef0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=template&id=42b8cef0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingProgressText.vue?vue&type=template&id=67da2167&
var LoadingProgressTextvue_type_template_id_67da2167_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"glitter__loading-progress-text"},[_vm._v(" Loading "+_vm._s(_vm.progress)+"% ")])}
var LoadingProgressTextvue_type_template_id_67da2167_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingProgressText.vue?vue&type=template&id=67da2167&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingProgressText.vue?vue&type=script&lang=ts&
function LoadingProgressTextvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LoadingProgressTextvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { LoadingProgressTextvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LoadingProgressTextvue_type_script_lang_ts_typeof(obj); }

function LoadingProgressTextvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LoadingProgressTextvue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LoadingProgressTextvue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) LoadingProgressTextvue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) LoadingProgressTextvue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function LoadingProgressTextvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (LoadingProgressTextvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return LoadingProgressTextvue_type_script_lang_ts_assertThisInitialized(self); }

function LoadingProgressTextvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LoadingProgressTextvue_type_script_lang_ts_getPrototypeOf(o) { LoadingProgressTextvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LoadingProgressTextvue_type_script_lang_ts_getPrototypeOf(o); }

function LoadingProgressTextvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LoadingProgressTextvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function LoadingProgressTextvue_type_script_lang_ts_setPrototypeOf(o, p) { LoadingProgressTextvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LoadingProgressTextvue_type_script_lang_ts_setPrototypeOf(o, p); }




var LoadingProgressText =
/*#__PURE__*/
function (_Vue) {
  LoadingProgressTextvue_type_script_lang_ts_inherits(LoadingProgressText, _Vue);

  function LoadingProgressText() {
    LoadingProgressTextvue_type_script_lang_ts_classCallCheck(this, LoadingProgressText);

    return LoadingProgressTextvue_type_script_lang_ts_possibleConstructorReturn(this, LoadingProgressTextvue_type_script_lang_ts_getPrototypeOf(LoadingProgressText).apply(this, arguments));
  }

  LoadingProgressTextvue_type_script_lang_ts_createClass(LoadingProgressText, [{
    key: "progress",
    get: function get() {
      var _this$loadingProgress = this.loadingProgress,
          currentPage = _this$loadingProgress.currentPage,
          maxPage = _this$loadingProgress.maxPage;
      return Math.ceil(currentPage / maxPage * 100);
    }
  }]);

  return LoadingProgressText;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], LoadingProgressText.prototype, "loadingProgress", void 0);

LoadingProgressText = __decorate([vue_class_component_esm], LoadingProgressText);
/* harmony default export */ var LoadingProgressTextvue_type_script_lang_ts_ = (LoadingProgressText);
// CONCATENATED MODULE: ./src/components/LoadingProgressText.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LoadingProgressTextvue_type_script_lang_ts_ = (LoadingProgressTextvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/LoadingProgressText.vue?vue&type=style&index=0&lang=less&
var LoadingProgressTextvue_type_style_index_0_lang_less_ = __webpack_require__("3b73");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/LoadingProgressText.vue






/* normalize component */

var component = normalizeComponent(
  components_LoadingProgressTextvue_type_script_lang_ts_,
  LoadingProgressTextvue_type_template_id_67da2167_render,
  LoadingProgressTextvue_type_template_id_67da2167_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_LoadingProgressText = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=script&lang=ts&
function Loadingvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Loadingvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { Loadingvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Loadingvue_type_script_lang_ts_typeof(obj); }

function Loadingvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Loadingvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (Loadingvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return Loadingvue_type_script_lang_ts_assertThisInitialized(self); }

function Loadingvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Loadingvue_type_script_lang_ts_getPrototypeOf(o) { Loadingvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Loadingvue_type_script_lang_ts_getPrototypeOf(o); }

function Loadingvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Loadingvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function Loadingvue_type_script_lang_ts_setPrototypeOf(o, p) { Loadingvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Loadingvue_type_script_lang_ts_setPrototypeOf(o, p); }





var Loading =
/*#__PURE__*/
function (_Vue) {
  Loadingvue_type_script_lang_ts_inherits(Loading, _Vue);

  function Loading() {
    Loadingvue_type_script_lang_ts_classCallCheck(this, Loading);

    return Loadingvue_type_script_lang_ts_possibleConstructorReturn(this, Loadingvue_type_script_lang_ts_getPrototypeOf(Loading).apply(this, arguments));
  }

  return Loading;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], Loading.prototype, "showLoadingProgress", void 0);

__decorate([Prop()], Loading.prototype, "isOpened", void 0);

__decorate([Prop()], Loading.prototype, "loadingProgress", void 0);

Loading = __decorate([vue_class_component_esm({
  components: {
    LoadingProgressText: components_LoadingProgressText
  }
})], Loading);
/* harmony default export */ var Loadingvue_type_script_lang_ts_ = (Loading);
// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Loadingvue_type_script_lang_ts_ = (Loadingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Loading.vue?vue&type=style&index=0&id=42b8cef0&scoped=true&lang=less&
var Loadingvue_type_style_index_0_id_42b8cef0_scoped_true_lang_less_ = __webpack_require__("9157");

// CONCATENATED MODULE: ./src/components/Loading.vue






/* normalize component */

var Loading_component = normalizeComponent(
  components_Loadingvue_type_script_lang_ts_,
  Loadingvue_type_template_id_42b8cef0_scoped_true_render,
  Loadingvue_type_template_id_42b8cef0_scoped_true_staticRenderFns,
  false,
  null,
  "42b8cef0",
  null
  
)

/* harmony default export */ var components_Loading = (Loading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Gallery.vue?vue&type=template&id=83f075a6&scoped=true&
var Galleryvue_type_template_id_83f075a6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpened),expression:"isOpened"}],staticClass:"glitter__gallery-container"},[_c('swipable-unordered-list',{attrs:{"className":'glitter__gallery',"numOfImages":_vm.imageItems.length,"selectedIndex":_vm.selectedIndex},on:{"prev":function($event){return _vm.$emit('prev')},"next":function($event){return _vm.$emit('next')}}},_vm._l((_vm.imageItems),function(imageItem,index){return _c("gallery-item",{key:index,tag:"li",attrs:{"numOfImages":_vm.imageItems.length,"isSelected":index === _vm.selectedIndex,"imageItem":imageItem}})}),1),_c('prev-arrow',{attrs:{"isVisible":_vm.repeatImages || _vm.hasPrev},on:{"prev":function($event){return _vm.$emit('prev')}}}),_c('next-arrow',{attrs:{"isVisible":_vm.repeatImages || _vm.hasNext},on:{"next":function($event){return _vm.$emit('next')}}}),(_vm.showPageNumbers)?_c('page-numbers',{attrs:{"pageNumber":_vm.pageNumber}}):_vm._e()],1)}
var Galleryvue_type_template_id_83f075a6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Gallery.vue?vue&type=template&id=83f075a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GalleryItem.vue?vue&type=template&id=2720a44f&scoped=true&
var GalleryItemvue_type_template_id_2720a44f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"glitter__gallery-item",style:(_vm.styleObject),on:{"click":function($event){$event.stopPropagation();}}},[_c('img',{staticClass:"glitter__gallery-item-image",attrs:{"src":_vm.imageItem.src,"alt":_vm.imageItem.caption,"title":_vm.imageItem.caption}}),_c('gallery-item-caption',{attrs:{"text":_vm.imageItem.caption}})],1)}
var GalleryItemvue_type_template_id_2720a44f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GalleryItem.vue?vue&type=template&id=2720a44f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GalleryItemCaption.vue?vue&type=template&id=01631282&scoped=true&
var GalleryItemCaptionvue_type_template_id_01631282_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"glitter__gallery-item-caption"},[_vm._v(" "+_vm._s(_vm.text)+" ")])}
var GalleryItemCaptionvue_type_template_id_01631282_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GalleryItemCaption.vue?vue&type=template&id=01631282&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GalleryItemCaption.vue?vue&type=script&lang=ts&
function GalleryItemCaptionvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GalleryItemCaptionvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { GalleryItemCaptionvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GalleryItemCaptionvue_type_script_lang_ts_typeof(obj); }

function GalleryItemCaptionvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleryItemCaptionvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (GalleryItemCaptionvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return GalleryItemCaptionvue_type_script_lang_ts_assertThisInitialized(self); }

function GalleryItemCaptionvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GalleryItemCaptionvue_type_script_lang_ts_getPrototypeOf(o) { GalleryItemCaptionvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GalleryItemCaptionvue_type_script_lang_ts_getPrototypeOf(o); }

function GalleryItemCaptionvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GalleryItemCaptionvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function GalleryItemCaptionvue_type_script_lang_ts_setPrototypeOf(o, p) { GalleryItemCaptionvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GalleryItemCaptionvue_type_script_lang_ts_setPrototypeOf(o, p); }




var GalleryItemCaption =
/*#__PURE__*/
function (_Vue) {
  GalleryItemCaptionvue_type_script_lang_ts_inherits(GalleryItemCaption, _Vue);

  function GalleryItemCaption() {
    GalleryItemCaptionvue_type_script_lang_ts_classCallCheck(this, GalleryItemCaption);

    return GalleryItemCaptionvue_type_script_lang_ts_possibleConstructorReturn(this, GalleryItemCaptionvue_type_script_lang_ts_getPrototypeOf(GalleryItemCaption).apply(this, arguments));
  }

  return GalleryItemCaption;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], GalleryItemCaption.prototype, "text", void 0);

GalleryItemCaption = __decorate([vue_class_component_esm], GalleryItemCaption);
/* harmony default export */ var GalleryItemCaptionvue_type_script_lang_ts_ = (GalleryItemCaption);
// CONCATENATED MODULE: ./src/components/GalleryItemCaption.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_GalleryItemCaptionvue_type_script_lang_ts_ = (GalleryItemCaptionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/GalleryItemCaption.vue?vue&type=style&index=0&id=01631282&scoped=true&lang=less&
var GalleryItemCaptionvue_type_style_index_0_id_01631282_scoped_true_lang_less_ = __webpack_require__("a53f");

// CONCATENATED MODULE: ./src/components/GalleryItemCaption.vue






/* normalize component */

var GalleryItemCaption_component = normalizeComponent(
  components_GalleryItemCaptionvue_type_script_lang_ts_,
  GalleryItemCaptionvue_type_template_id_01631282_scoped_true_render,
  GalleryItemCaptionvue_type_template_id_01631282_scoped_true_staticRenderFns,
  false,
  null,
  "01631282",
  null
  
)

/* harmony default export */ var components_GalleryItemCaption = (GalleryItemCaption_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GalleryItem.vue?vue&type=script&lang=ts&
function GalleryItemvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GalleryItemvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { GalleryItemvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GalleryItemvue_type_script_lang_ts_typeof(obj); }

function GalleryItemvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleryItemvue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GalleryItemvue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) GalleryItemvue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) GalleryItemvue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function GalleryItemvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (GalleryItemvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return GalleryItemvue_type_script_lang_ts_assertThisInitialized(self); }

function GalleryItemvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GalleryItemvue_type_script_lang_ts_getPrototypeOf(o) { GalleryItemvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GalleryItemvue_type_script_lang_ts_getPrototypeOf(o); }

function GalleryItemvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GalleryItemvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function GalleryItemvue_type_script_lang_ts_setPrototypeOf(o, p) { GalleryItemvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GalleryItemvue_type_script_lang_ts_setPrototypeOf(o, p); }



 // ギャラリー向けの画像のコンポーネント

var GalleryItem =
/*#__PURE__*/
function (_Vue) {
  GalleryItemvue_type_script_lang_ts_inherits(GalleryItem, _Vue);

  function GalleryItem() {
    GalleryItemvue_type_script_lang_ts_classCallCheck(this, GalleryItem);

    return GalleryItemvue_type_script_lang_ts_possibleConstructorReturn(this, GalleryItemvue_type_script_lang_ts_getPrototypeOf(GalleryItem).apply(this, arguments));
  }

  GalleryItemvue_type_script_lang_ts_createClass(GalleryItem, [{
    key: "styleObject",
    get: function get() {
      return {
        width: "".concat(1 / this.numOfImages * 100, "%")
      };
    }
  }]);

  return GalleryItem;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], GalleryItem.prototype, "imageItem", void 0);

__decorate([Prop()], GalleryItem.prototype, "isSelected", void 0);

__decorate([Prop()], GalleryItem.prototype, "numOfImages", void 0);

GalleryItem = __decorate([vue_class_component_esm({
  components: {
    GalleryItemCaption: components_GalleryItemCaption
  }
})], GalleryItem);
/* harmony default export */ var GalleryItemvue_type_script_lang_ts_ = (GalleryItem);
// CONCATENATED MODULE: ./src/components/GalleryItem.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_GalleryItemvue_type_script_lang_ts_ = (GalleryItemvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/GalleryItem.vue?vue&type=style&index=0&id=2720a44f&scoped=true&lang=less&
var GalleryItemvue_type_style_index_0_id_2720a44f_scoped_true_lang_less_ = __webpack_require__("16bf");

// CONCATENATED MODULE: ./src/components/GalleryItem.vue






/* normalize component */

var GalleryItem_component = normalizeComponent(
  components_GalleryItemvue_type_script_lang_ts_,
  GalleryItemvue_type_template_id_2720a44f_scoped_true_render,
  GalleryItemvue_type_template_id_2720a44f_scoped_true_staticRenderFns,
  false,
  null,
  "2720a44f",
  null
  
)

/* harmony default export */ var components_GalleryItem = (GalleryItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipableUnorderedList.vue?vue&type=template&id=7970c27c&
var SwipableUnorderedListvue_type_template_id_7970c27c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"glitter__swipe",class:_vm.className,style:(_vm.styleObject),on:{"mousedown":_vm.lock,"mouseup":_vm.move,"touchstart":_vm.lock,"touchend":_vm.move}},[_vm._t("default")],2)}
var SwipableUnorderedListvue_type_template_id_7970c27c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SwipableUnorderedList.vue?vue&type=template&id=7970c27c&

// CONCATENATED MODULE: ./src/swipe-manager.ts
function swipe_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function swipe_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function swipe_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) swipe_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) swipe_manager_defineProperties(Constructor, staticProps); return Constructor; }

var Direction;

(function (Direction) {
  Direction[Direction["NONE"] = 0] = "NONE";
  Direction[Direction["PREV"] = 1] = "PREV";
  Direction[Direction["NEXT"] = 2] = "NEXT";
})(Direction || (Direction = {})); // siwpeの管理をする


var SwipeManager =
/*#__PURE__*/
function () {
  swipe_manager_createClass(SwipeManager, null, [{
    key: "getClientX",
    value: function getClientX(e) {
      return ('TouchEvent' in window && e instanceof TouchEvent && e.changedTouches ? e.changedTouches[0] : e).clientX;
    }
    /* tslint:disable variable-name */

  }]);

  function SwipeManager(numOfImages) {
    swipe_manager_classCallCheck(this, SwipeManager);

    this.numOfImages = numOfImages;
  }

  swipe_manager_createClass(SwipeManager, [{
    key: "which",
    // どの方向に移動すべきか？
    value: function which(selectedIndex, newClientX) {
      var d = Direction.NONE;

      if (!this.lastX && this.lastX !== 0) {
        return d;
      }

      var dx = newClientX - this.lastX;
      var s = Math.sign(dx);

      if (selectedIndex > 0 && s > 0 || selectedIndex < this.numOfImages - 1 && s < 0) {
        d = s < 0 ? Direction.NEXT : Direction.PREV;
      }

      this.lastX = void 0;
      return d;
    }
  }, {
    key: "lastX",
    get: function get() {
      return this._lastX;
    },
    set: function set(lastX) {
      this._lastX = lastX;
    }
  }]);

  return SwipeManager;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipableUnorderedList.vue?vue&type=script&lang=ts&
function SwipableUnorderedListvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SwipableUnorderedListvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { SwipableUnorderedListvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SwipableUnorderedListvue_type_script_lang_ts_typeof(obj); }

function SwipableUnorderedListvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SwipableUnorderedListvue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SwipableUnorderedListvue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) SwipableUnorderedListvue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) SwipableUnorderedListvue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function SwipableUnorderedListvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (SwipableUnorderedListvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return SwipableUnorderedListvue_type_script_lang_ts_assertThisInitialized(self); }

function SwipableUnorderedListvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SwipableUnorderedListvue_type_script_lang_ts_getPrototypeOf(o) { SwipableUnorderedListvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SwipableUnorderedListvue_type_script_lang_ts_getPrototypeOf(o); }

function SwipableUnorderedListvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SwipableUnorderedListvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function SwipableUnorderedListvue_type_script_lang_ts_setPrototypeOf(o, p) { SwipableUnorderedListvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SwipableUnorderedListvue_type_script_lang_ts_setPrototypeOf(o, p); }



 // swipeできるul

var SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList =
/*#__PURE__*/
function (_Vue) {
  SwipableUnorderedListvue_type_script_lang_ts_inherits(SwipableUnorderedList, _Vue);

  // swipeできるul
  function SwipableUnorderedList() {
    var _this;

    SwipableUnorderedListvue_type_script_lang_ts_classCallCheck(this, SwipableUnorderedList);

    _this = SwipableUnorderedListvue_type_script_lang_ts_possibleConstructorReturn(this, SwipableUnorderedListvue_type_script_lang_ts_getPrototypeOf(SwipableUnorderedList).apply(this, arguments));
    _this.swipeManager = new SwipeManager(_this.numOfImages);
    return _this;
  }

  SwipableUnorderedListvue_type_script_lang_ts_createClass(SwipableUnorderedList, [{
    key: "onNumOfImagesChanged",
    value: function onNumOfImagesChanged() {
      this.swipeManager = new SwipeManager(this.numOfImages);
    }
  }, {
    key: "lock",
    value: function lock(e) {
      this.swipeManager.lastX = SwipeManager.getClientX(e);
    }
  }, {
    key: "move",
    value: function move(e) {
      var x = SwipeManager.getClientX(e);
      var d = this.swipeManager.which(this.selectedIndex, x);

      if (d !== Direction.NONE) {
        this.$emit(Direction[d].toLowerCase());
      }
    }
  }, {
    key: "styleObject",
    get: function get() {
      return {
        '--selectedIndex': this.selectedIndex,
        '--numOfImages': this.numOfImages
      };
    }
  }]);

  return SwipableUnorderedList;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList.prototype, "selectedIndex", void 0);

__decorate([Prop()], SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList.prototype, "numOfImages", void 0);

__decorate([Prop()], SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList.prototype, "className", void 0);

__decorate([Watch('numOfImages')], SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList.prototype, "onNumOfImagesChanged", null);

SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList = __decorate([vue_class_component_esm], SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList);
/* harmony default export */ var SwipableUnorderedListvue_type_script_lang_ts_ = (SwipableUnorderedListvue_type_script_lang_ts_SwipableUnorderedList);
// CONCATENATED MODULE: ./src/components/SwipableUnorderedList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SwipableUnorderedListvue_type_script_lang_ts_ = (SwipableUnorderedListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SwipableUnorderedList.vue?vue&type=style&index=0&lang=less&
var SwipableUnorderedListvue_type_style_index_0_lang_less_ = __webpack_require__("ca47");

// CONCATENATED MODULE: ./src/components/SwipableUnorderedList.vue






/* normalize component */

var SwipableUnorderedList_component = normalizeComponent(
  components_SwipableUnorderedListvue_type_script_lang_ts_,
  SwipableUnorderedListvue_type_template_id_7970c27c_render,
  SwipableUnorderedListvue_type_template_id_7970c27c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_SwipableUnorderedList = (SwipableUnorderedList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/NextArrow.vue?vue&type=template&id=6c8687ab&scoped=true&
var NextArrowvue_type_template_id_6c8687ab_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"glitter__arrow-button-container"},[_c('a',{staticClass:"glitter__next-arrow",attrs:{"href":"javascript:void 0"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('next')}}},[_c('arrow-right-drop-circle',{attrs:{"title":"Next"}})],1)])}
var NextArrowvue_type_template_id_6c8687ab_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/buttons/NextArrow.vue?vue&type=template&id=6c8687ab&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowRightDropCircle.vue?vue&type=template&id=f362e048&functional=true&
var ArrowRightDropCirclevue_type_template_id_f362e048_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('span',_vm._g({staticClass:"material-design-icon arrow-right-drop-circle-icon",class:[_vm.data.class, _vm.data.staticClass],attrs:{"aria-hidden":_vm.props.decorative,"aria-label":_vm.props.title,"role":"img"}},_vm.listeners),[_c('svg',{staticClass:"material-design-icon__svg",attrs:{"fill":_vm.props.fillColor,"width":_vm.props.size,"height":_vm.props.size,"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z"}},[_c('title',[_vm._v(_vm._s(_vm.props.title))])])])])}
var ArrowRightDropCirclevue_type_template_id_f362e048_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowRightDropCircle.vue?vue&type=template&id=f362e048&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowRightDropCircle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArrowRightDropCirclevue_type_script_lang_js_ = ({
  name: "ArrowRightDropCircleIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Right Drop Circle icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowRightDropCircle.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_material_design_icons_ArrowRightDropCirclevue_type_script_lang_js_ = (ArrowRightDropCirclevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowRightDropCircle.vue





/* normalize component */

var ArrowRightDropCircle_component = normalizeComponent(
  vue_material_design_icons_ArrowRightDropCirclevue_type_script_lang_js_,
  ArrowRightDropCirclevue_type_template_id_f362e048_functional_true_render,
  ArrowRightDropCirclevue_type_template_id_f362e048_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var ArrowRightDropCircle = (ArrowRightDropCircle_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-material-design-icons/styles.css
var styles = __webpack_require__("d48d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/NextArrow.vue?vue&type=script&lang=ts&
function NextArrowvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NextArrowvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { NextArrowvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NextArrowvue_type_script_lang_ts_typeof(obj); }

function NextArrowvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NextArrowvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (NextArrowvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return NextArrowvue_type_script_lang_ts_assertThisInitialized(self); }

function NextArrowvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NextArrowvue_type_script_lang_ts_getPrototypeOf(o) { NextArrowvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NextArrowvue_type_script_lang_ts_getPrototypeOf(o); }

function NextArrowvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NextArrowvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function NextArrowvue_type_script_lang_ts_setPrototypeOf(o, p) { NextArrowvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NextArrowvue_type_script_lang_ts_setPrototypeOf(o, p); }






var NextArrow =
/*#__PURE__*/
function (_Vue) {
  NextArrowvue_type_script_lang_ts_inherits(NextArrow, _Vue);

  function NextArrow() {
    NextArrowvue_type_script_lang_ts_classCallCheck(this, NextArrow);

    return NextArrowvue_type_script_lang_ts_possibleConstructorReturn(this, NextArrowvue_type_script_lang_ts_getPrototypeOf(NextArrow).apply(this, arguments));
  }

  return NextArrow;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], NextArrow.prototype, "isVisible", void 0);

NextArrow = __decorate([vue_class_component_esm({
  components: {
    ArrowRightDropCircle: ArrowRightDropCircle
  }
})], NextArrow);
/* harmony default export */ var NextArrowvue_type_script_lang_ts_ = (NextArrow);
// CONCATENATED MODULE: ./src/components/buttons/NextArrow.vue?vue&type=script&lang=ts&
 /* harmony default export */ var buttons_NextArrowvue_type_script_lang_ts_ = (NextArrowvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/buttons/NextArrow.vue?vue&type=style&index=0&id=6c8687ab&scoped=true&lang=less&
var NextArrowvue_type_style_index_0_id_6c8687ab_scoped_true_lang_less_ = __webpack_require__("bc48");

// CONCATENATED MODULE: ./src/components/buttons/NextArrow.vue






/* normalize component */

var NextArrow_component = normalizeComponent(
  buttons_NextArrowvue_type_script_lang_ts_,
  NextArrowvue_type_template_id_6c8687ab_scoped_true_render,
  NextArrowvue_type_template_id_6c8687ab_scoped_true_staticRenderFns,
  false,
  null,
  "6c8687ab",
  null
  
)

/* harmony default export */ var buttons_NextArrow = (NextArrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/PrevArrow.vue?vue&type=template&id=48a92b6c&scoped=true&
var PrevArrowvue_type_template_id_48a92b6c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"glitter__arrow-button-container"},[_c('a',{staticClass:"glitter__prev-arrow",attrs:{"href":"javascript:void 0"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('prev')}}},[_c('arrow-left-drop-circle',{attrs:{"title":"Prev"}})],1)])}
var PrevArrowvue_type_template_id_48a92b6c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/buttons/PrevArrow.vue?vue&type=template&id=48a92b6c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowLeftDropCircle.vue?vue&type=template&id=0dce6558&functional=true&
var ArrowLeftDropCirclevue_type_template_id_0dce6558_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('span',_vm._g({staticClass:"material-design-icon arrow-left-drop-circle-icon",class:[_vm.data.class, _vm.data.staticClass],attrs:{"aria-hidden":_vm.props.decorative,"aria-label":_vm.props.title,"role":"img"}},_vm.listeners),[_c('svg',{staticClass:"material-design-icon__svg",attrs:{"fill":_vm.props.fillColor,"width":_vm.props.size,"height":_vm.props.size,"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z"}},[_c('title',[_vm._v(_vm._s(_vm.props.title))])])])])}
var ArrowLeftDropCirclevue_type_template_id_0dce6558_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowLeftDropCircle.vue?vue&type=template&id=0dce6558&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowLeftDropCircle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArrowLeftDropCirclevue_type_script_lang_js_ = ({
  name: "ArrowLeftDropCircleIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Left Drop Circle icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowLeftDropCircle.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_material_design_icons_ArrowLeftDropCirclevue_type_script_lang_js_ = (ArrowLeftDropCirclevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowLeftDropCircle.vue





/* normalize component */

var ArrowLeftDropCircle_component = normalizeComponent(
  vue_material_design_icons_ArrowLeftDropCirclevue_type_script_lang_js_,
  ArrowLeftDropCirclevue_type_template_id_0dce6558_functional_true_render,
  ArrowLeftDropCirclevue_type_template_id_0dce6558_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var ArrowLeftDropCircle = (ArrowLeftDropCircle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/PrevArrow.vue?vue&type=script&lang=ts&
function PrevArrowvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PrevArrowvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { PrevArrowvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PrevArrowvue_type_script_lang_ts_typeof(obj); }

function PrevArrowvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PrevArrowvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (PrevArrowvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return PrevArrowvue_type_script_lang_ts_assertThisInitialized(self); }

function PrevArrowvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PrevArrowvue_type_script_lang_ts_getPrototypeOf(o) { PrevArrowvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PrevArrowvue_type_script_lang_ts_getPrototypeOf(o); }

function PrevArrowvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PrevArrowvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function PrevArrowvue_type_script_lang_ts_setPrototypeOf(o, p) { PrevArrowvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PrevArrowvue_type_script_lang_ts_setPrototypeOf(o, p); }






var PrevArrow =
/*#__PURE__*/
function (_Vue) {
  PrevArrowvue_type_script_lang_ts_inherits(PrevArrow, _Vue);

  function PrevArrow() {
    PrevArrowvue_type_script_lang_ts_classCallCheck(this, PrevArrow);

    return PrevArrowvue_type_script_lang_ts_possibleConstructorReturn(this, PrevArrowvue_type_script_lang_ts_getPrototypeOf(PrevArrow).apply(this, arguments));
  }

  return PrevArrow;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], PrevArrow.prototype, "isVisible", void 0);

PrevArrow = __decorate([vue_class_component_esm({
  components: {
    ArrowLeftDropCircle: ArrowLeftDropCircle
  }
})], PrevArrow);
/* harmony default export */ var PrevArrowvue_type_script_lang_ts_ = (PrevArrow);
// CONCATENATED MODULE: ./src/components/buttons/PrevArrow.vue?vue&type=script&lang=ts&
 /* harmony default export */ var buttons_PrevArrowvue_type_script_lang_ts_ = (PrevArrowvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/buttons/PrevArrow.vue?vue&type=style&index=0&id=48a92b6c&scoped=true&lang=less&
var PrevArrowvue_type_style_index_0_id_48a92b6c_scoped_true_lang_less_ = __webpack_require__("5129");

// CONCATENATED MODULE: ./src/components/buttons/PrevArrow.vue






/* normalize component */

var PrevArrow_component = normalizeComponent(
  buttons_PrevArrowvue_type_script_lang_ts_,
  PrevArrowvue_type_template_id_48a92b6c_scoped_true_render,
  PrevArrowvue_type_template_id_48a92b6c_scoped_true_staticRenderFns,
  false,
  null,
  "48a92b6c",
  null
  
)

/* harmony default export */ var buttons_PrevArrow = (PrevArrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageNumbers.vue?vue&type=template&id=bbb387e6&
var PageNumbersvue_type_template_id_bbb387e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"glitter__page-numbers",on:{"click":function($event){$event.stopPropagation();}}},[_vm._v(" "+_vm._s(_vm.pageNumber.currentPage)+" / "+_vm._s(_vm.pageNumber.maxPage)+" ")])}
var PageNumbersvue_type_template_id_bbb387e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageNumbers.vue?vue&type=template&id=bbb387e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageNumbers.vue?vue&type=script&lang=ts&
function PageNumbersvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PageNumbersvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { PageNumbersvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PageNumbersvue_type_script_lang_ts_typeof(obj); }

function PageNumbersvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PageNumbersvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (PageNumbersvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return PageNumbersvue_type_script_lang_ts_assertThisInitialized(self); }

function PageNumbersvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PageNumbersvue_type_script_lang_ts_getPrototypeOf(o) { PageNumbersvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PageNumbersvue_type_script_lang_ts_getPrototypeOf(o); }

function PageNumbersvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PageNumbersvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function PageNumbersvue_type_script_lang_ts_setPrototypeOf(o, p) { PageNumbersvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PageNumbersvue_type_script_lang_ts_setPrototypeOf(o, p); }


 // ページ番号を表示するコンポーネント

var PageNumbers =
/*#__PURE__*/
function (_Vue) {
  PageNumbersvue_type_script_lang_ts_inherits(PageNumbers, _Vue);

  function PageNumbers() {
    PageNumbersvue_type_script_lang_ts_classCallCheck(this, PageNumbers);

    return PageNumbersvue_type_script_lang_ts_possibleConstructorReturn(this, PageNumbersvue_type_script_lang_ts_getPrototypeOf(PageNumbers).apply(this, arguments));
  }

  return PageNumbers;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], PageNumbers.prototype, "pageNumber", void 0);

PageNumbers = __decorate([vue_class_component_esm({})], PageNumbers);
/* harmony default export */ var PageNumbersvue_type_script_lang_ts_ = (PageNumbers);
// CONCATENATED MODULE: ./src/components/PageNumbers.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageNumbersvue_type_script_lang_ts_ = (PageNumbersvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageNumbers.vue?vue&type=style&index=0&lang=less&
var PageNumbersvue_type_style_index_0_lang_less_ = __webpack_require__("142d");

// CONCATENATED MODULE: ./src/components/PageNumbers.vue






/* normalize component */

var PageNumbers_component = normalizeComponent(
  components_PageNumbersvue_type_script_lang_ts_,
  PageNumbersvue_type_template_id_bbb387e6_render,
  PageNumbersvue_type_template_id_bbb387e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_PageNumbers = (PageNumbers_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=ts&
function Galleryvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Galleryvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { Galleryvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Galleryvue_type_script_lang_ts_typeof(obj); }

function Galleryvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Galleryvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (Galleryvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return Galleryvue_type_script_lang_ts_assertThisInitialized(self); }

function Galleryvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Galleryvue_type_script_lang_ts_getPrototypeOf(o) { Galleryvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Galleryvue_type_script_lang_ts_getPrototypeOf(o); }

function Galleryvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Galleryvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function Galleryvue_type_script_lang_ts_setPrototypeOf(o, p) { Galleryvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Galleryvue_type_script_lang_ts_setPrototypeOf(o, p); }







 // ギャラリーを表示するコンポーネント

var Gallery =
/*#__PURE__*/
function (_Vue) {
  Galleryvue_type_script_lang_ts_inherits(Gallery, _Vue);

  function Gallery() {
    Galleryvue_type_script_lang_ts_classCallCheck(this, Gallery);

    return Galleryvue_type_script_lang_ts_possibleConstructorReturn(this, Galleryvue_type_script_lang_ts_getPrototypeOf(Gallery).apply(this, arguments));
  }

  return Gallery;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], Gallery.prototype, "isOpened", void 0);

__decorate([Prop()], Gallery.prototype, "selectedIndex", void 0);

__decorate([Prop()], Gallery.prototype, "imageItems", void 0);

__decorate([Prop()], Gallery.prototype, "hasNext", void 0);

__decorate([Prop()], Gallery.prototype, "hasPrev", void 0);

__decorate([Prop()], Gallery.prototype, "showPageNumbers", void 0);

__decorate([Prop()], Gallery.prototype, "repeatImages", void 0);

__decorate([Prop()], Gallery.prototype, "pageNumber", void 0);

Gallery = __decorate([vue_class_component_esm({
  components: {
    GalleryItem: components_GalleryItem,
    SwipableUnorderedList: components_SwipableUnorderedList,
    NextArrow: buttons_NextArrow,
    PrevArrow: buttons_PrevArrow,
    PageNumbers: components_PageNumbers
  }
})], Gallery);
/* harmony default export */ var Galleryvue_type_script_lang_ts_ = (Gallery);
// CONCATENATED MODULE: ./src/components/Gallery.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Galleryvue_type_script_lang_ts_ = (Galleryvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Gallery.vue?vue&type=style&index=0&id=83f075a6&scoped=true&lang=less&
var Galleryvue_type_style_index_0_id_83f075a6_scoped_true_lang_less_ = __webpack_require__("8280");

// CONCATENATED MODULE: ./src/components/Gallery.vue






/* normalize component */

var Gallery_component = normalizeComponent(
  components_Galleryvue_type_script_lang_ts_,
  Galleryvue_type_template_id_83f075a6_scoped_true_render,
  Galleryvue_type_template_id_83f075a6_scoped_true_staticRenderFns,
  false,
  null,
  "83f075a6",
  null
  
)

/* harmony default export */ var components_Gallery = (Gallery_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Overlay.vue?vue&type=template&id=6a264ace&scoped=true&
var Overlayvue_type_template_id_6a264ace_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"overlay-zoom"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpened),expression:"isOpened"}],staticClass:"glitter__overlay",on:{"click":function($event){$event.stopPropagation();return _vm.$emit('close')}}},[_vm._t("default")],2)])}
var Overlayvue_type_template_id_6a264ace_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Overlay.vue?vue&type=template&id=6a264ace&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Overlay.vue?vue&type=script&lang=ts&
function Overlayvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Overlayvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { Overlayvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Overlayvue_type_script_lang_ts_typeof(obj); }

function Overlayvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Overlayvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (Overlayvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return Overlayvue_type_script_lang_ts_assertThisInitialized(self); }

function Overlayvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Overlayvue_type_script_lang_ts_getPrototypeOf(o) { Overlayvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Overlayvue_type_script_lang_ts_getPrototypeOf(o); }

function Overlayvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Overlayvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function Overlayvue_type_script_lang_ts_setPrototypeOf(o, p) { Overlayvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Overlayvue_type_script_lang_ts_setPrototypeOf(o, p); }


 // Overlayーを表示するコンポーネント

var Overlay =
/*#__PURE__*/
function (_Vue) {
  Overlayvue_type_script_lang_ts_inherits(Overlay, _Vue);

  function Overlay() {
    Overlayvue_type_script_lang_ts_classCallCheck(this, Overlay);

    return Overlayvue_type_script_lang_ts_possibleConstructorReturn(this, Overlayvue_type_script_lang_ts_getPrototypeOf(Overlay).apply(this, arguments));
  }

  return Overlay;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], Overlay.prototype, "isOpened", void 0);

Overlay = __decorate([vue_class_component_esm({})], Overlay);
/* harmony default export */ var Overlayvue_type_script_lang_ts_ = (Overlay);
// CONCATENATED MODULE: ./src/components/Overlay.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Overlayvue_type_script_lang_ts_ = (Overlayvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Overlay.vue?vue&type=style&index=0&id=6a264ace&scoped=true&lang=less&
var Overlayvue_type_style_index_0_id_6a264ace_scoped_true_lang_less_ = __webpack_require__("066f");

// CONCATENATED MODULE: ./src/components/Overlay.vue






/* normalize component */

var Overlay_component = normalizeComponent(
  components_Overlayvue_type_script_lang_ts_,
  Overlayvue_type_template_id_6a264ace_scoped_true_render,
  Overlayvue_type_template_id_6a264ace_scoped_true_staticRenderFns,
  false,
  null,
  "6a264ace",
  null
  
)

/* harmony default export */ var components_Overlay = (Overlay_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/CloseButton.vue?vue&type=template&id=c5412338&scoped=true&
var CloseButtonvue_type_template_id_c5412338_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"glitter__close-button-container"},[_c('a',{staticClass:"glitter__close",attrs:{"href":"javascript:void 0"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('close')}}},[_c('close',{attrs:{"title":"Close"}})],1)])}
var CloseButtonvue_type_template_id_c5412338_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/buttons/CloseButton.vue?vue&type=template&id=c5412338&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b61483c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=616010cc&functional=true&
var Closevue_type_template_id_616010cc_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('span',_vm._g({staticClass:"material-design-icon close-icon",class:[_vm.data.class, _vm.data.staticClass],attrs:{"aria-hidden":_vm.props.decorative,"aria-label":_vm.props.title,"role":"img"}},_vm.listeners),[_c('svg',{staticClass:"material-design-icon__svg",attrs:{"fill":_vm.props.fillColor,"width":_vm.props.size,"height":_vm.props.size,"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}},[_c('title',[_vm._v(_vm._s(_vm.props.title))])])])])}
var Closevue_type_template_id_616010cc_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=616010cc&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Closevue_type_script_lang_js_ = ({
  name: "CloseIcon",
  props: {
    title: {
      type: String,
      default: "Close icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_material_design_icons_Closevue_type_script_lang_js_ = (Closevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue





/* normalize component */

var Close_component = normalizeComponent(
  vue_material_design_icons_Closevue_type_script_lang_js_,
  Closevue_type_template_id_616010cc_functional_true_render,
  Closevue_type_template_id_616010cc_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var Close = (Close_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/CloseButton.vue?vue&type=script&lang=ts&
function CloseButtonvue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CloseButtonvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { CloseButtonvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CloseButtonvue_type_script_lang_ts_typeof(obj); }

function CloseButtonvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CloseButtonvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (CloseButtonvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return CloseButtonvue_type_script_lang_ts_assertThisInitialized(self); }

function CloseButtonvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CloseButtonvue_type_script_lang_ts_getPrototypeOf(o) { CloseButtonvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CloseButtonvue_type_script_lang_ts_getPrototypeOf(o); }

function CloseButtonvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CloseButtonvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function CloseButtonvue_type_script_lang_ts_setPrototypeOf(o, p) { CloseButtonvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CloseButtonvue_type_script_lang_ts_setPrototypeOf(o, p); }






var CloseButton =
/*#__PURE__*/
function (_Vue) {
  CloseButtonvue_type_script_lang_ts_inherits(CloseButton, _Vue);

  function CloseButton() {
    CloseButtonvue_type_script_lang_ts_classCallCheck(this, CloseButton);

    return CloseButtonvue_type_script_lang_ts_possibleConstructorReturn(this, CloseButtonvue_type_script_lang_ts_getPrototypeOf(CloseButton).apply(this, arguments));
  }

  return CloseButton;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

CloseButton = __decorate([vue_class_component_esm({
  components: {
    Close: Close
  }
})], CloseButton);
/* harmony default export */ var CloseButtonvue_type_script_lang_ts_ = (CloseButton);
// CONCATENATED MODULE: ./src/components/buttons/CloseButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ var buttons_CloseButtonvue_type_script_lang_ts_ = (CloseButtonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/buttons/CloseButton.vue?vue&type=style&index=0&id=c5412338&scoped=true&lang=less&
var CloseButtonvue_type_style_index_0_id_c5412338_scoped_true_lang_less_ = __webpack_require__("8738");

// CONCATENATED MODULE: ./src/components/buttons/CloseButton.vue






/* normalize component */

var CloseButton_component = normalizeComponent(
  buttons_CloseButtonvue_type_script_lang_ts_,
  CloseButtonvue_type_template_id_c5412338_scoped_true_render,
  CloseButtonvue_type_template_id_c5412338_scoped_true_staticRenderFns,
  false,
  null,
  "c5412338",
  null
  
)

/* harmony default export */ var buttons_CloseButton = (CloseButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Glitter.vue?vue&type=script&lang=ts&
function Glittervue_type_script_lang_ts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Glittervue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { Glittervue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Glittervue_type_script_lang_ts_typeof(obj); }

function Glittervue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Glittervue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Glittervue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) Glittervue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) Glittervue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function Glittervue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (Glittervue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return Glittervue_type_script_lang_ts_assertThisInitialized(self); }

function Glittervue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Glittervue_type_script_lang_ts_getPrototypeOf(o) { Glittervue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Glittervue_type_script_lang_ts_getPrototypeOf(o); }

function Glittervue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Glittervue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function Glittervue_type_script_lang_ts_setPrototypeOf(o, p) { Glittervue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Glittervue_type_script_lang_ts_setPrototypeOf(o, p); }










 // コンテナーコンポーネント

var Glittervue_type_script_lang_ts_Glitter =
/*#__PURE__*/
function (_Vue) {
  Glittervue_type_script_lang_ts_inherits(Glitter, _Vue);

  // コンテナーコンポーネント
  function Glitter() {
    var _this;

    Glittervue_type_script_lang_ts_classCallCheck(this, Glitter);

    _this = Glittervue_type_script_lang_ts_possibleConstructorReturn(this, Glittervue_type_script_lang_ts_getPrototypeOf(Glitter).apply(this, arguments));
    _this.stateManager = _this.newStateManager();
    return _this;
  }

  Glittervue_type_script_lang_ts_createClass(Glitter, [{
    key: "onImagesChanged",
    value: function onImagesChanged() {
      this.stateManager = this.newStateManager();
    }
  }, {
    key: "onToggleOpenState",
    value: function onToggleOpenState() {
      this.stateManager.toggleOpenState();
      this.stateManager.resetIndex();
    }
  }, {
    key: "onNext",
    value: function onNext() {
      this.stateManager.proceedImage();
    }
  }, {
    key: "onPrev",
    value: function onPrev() {
      this.stateManager.succeedImage();
    }
  }, {
    key: "newStateManager",
    value: function newStateManager() {
      var imageItems = this.images.map(ImageItem.create);
      var loader = new cached_image_loader_CachedImageLoader(imageItems, browserCache);
      var showLoading = this.showLoading,
          repeatImages = this.repeatImages;
      return new state_manager_StateManager(loader, {
        showLoading: showLoading,
        repeatImages: repeatImages
      });
    }
  }, {
    key: "imageItems",
    get: function get() {
      return this.images.map(ImageItem.create);
    }
  }]);

  return Glitter;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], Glittervue_type_script_lang_ts_Glitter.prototype, "images", void 0);

__decorate([Prop({
  default: true
})], Glittervue_type_script_lang_ts_Glitter.prototype, "showPageNumbers", void 0);

__decorate([Prop({
  default: true
})], Glittervue_type_script_lang_ts_Glitter.prototype, "showCloseButton", void 0);

__decorate([Prop({
  default: true
})], Glittervue_type_script_lang_ts_Glitter.prototype, "showLoading", void 0);

__decorate([Prop({
  default: true
})], Glittervue_type_script_lang_ts_Glitter.prototype, "showLoadingProgress", void 0);

__decorate([Prop({
  default: false
})], Glittervue_type_script_lang_ts_Glitter.prototype, "repeatImages", void 0);

__decorate([Watch('images')], Glittervue_type_script_lang_ts_Glitter.prototype, "onImagesChanged", null);

Glittervue_type_script_lang_ts_Glitter = __decorate([vue_class_component_esm({
  components: {
    Loading: components_Loading,
    Gallery: components_Gallery,
    Overlay: components_Overlay,
    CloseButton: buttons_CloseButton
  }
})], Glittervue_type_script_lang_ts_Glitter);
/* harmony default export */ var Glittervue_type_script_lang_ts_ = (Glittervue_type_script_lang_ts_Glitter);
// CONCATENATED MODULE: ./src/Glitter.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_Glittervue_type_script_lang_ts_ = (Glittervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Glitter.vue?vue&type=style&index=0&id=fdc18c4e&scoped=true&lang=less&
var Glittervue_type_style_index_0_id_fdc18c4e_scoped_true_lang_less_ = __webpack_require__("a0ef");

// CONCATENATED MODULE: ./src/Glitter.vue






/* normalize component */

var Glitter_component = normalizeComponent(
  src_Glittervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "fdc18c4e",
  null
  
)

/* harmony default export */ var src_Glitter = (Glitter_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_Glitter);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=Glitter.umd.js.map