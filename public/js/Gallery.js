"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Gallery"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppGallery.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppGallery.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      category: '',
      galleryDialog: false,
      galleryContent: []
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    getGalleries: "index/getGalleries"
  })), {}, {
    actionGalleryItems: function actionGalleryItems() {
      this.$store.dispatch("index/getGalleryItems", this.category);
    },
    getCategoryid: function getCategoryid(id) {
      this.category = id;
      this.$store.dispatch("index/getGalleryItems", id);
    },
    singleGallery: function singleGallery(galleryItem) {
      this.galleryContent = galleryItem;
      this.galleryDialog = true;
      // alert(galleryItem);
    }
  }),

  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    galleries: "index/getGalleries",
    galleryItems: "index/getGalleryItems"
  })),
  created: function created() {
    this.getGalleries();
    this.actionGalleryItems();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppGallery.vue?vue&type=template&id=bd90cb6c&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppGallery.vue?vue&type=template&id=bd90cb6c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "project-gallery",
    attrs: {
      id: "project-gallery"
    }
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "project-gallery-filter d-flex justify-content-center"
  }, [_c("ul", {
    staticClass: "project-gallery-menu d-inline-block"
  }, [_c("li", {
    staticClass: "filter",
    "class": _vm.category == "" ? "active" : "",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getCategoryid("");
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("All")) + "\n              ")]), _vm._v(" "), _vm._l(_vm.galleries, function (gallery, i) {
    return _c("li", {
      key: i,
      staticClass: "filter",
      "class": _vm.category == gallery.id ? "active" : "",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.getCategoryid(gallery.id);
        }
      }
    }, [_vm._v("\n                   " + _vm._s(gallery.name) + "\n              ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "row project-gallery-item"
  }, _vm._l(_vm.galleryItems, function (galleryItem, i) {
    return _c("div", {
      key: i,
      staticClass: "col-md-6 col-lg-4 gallery-item"
    }, [_c("div", {
      staticClass: "gallery-item-content"
    }, [_c("div", {
      staticClass: "item-thumbnail",
      on: {
        click: function click($event) {
          return _vm.singleGallery(galleryItem);
        }
      }
    }, [_c("div", {
      directives: [{
        name: "lazy",
        rawName: "v-lazy:background-image",
        value: "/uploads/".concat(galleryItem.image),
        expression: "`/uploads/${galleryItem.image}`",
        arg: "background-image"
      }],
      staticClass: "img"
    }), _vm._v(" "), _c("div", {
      staticClass: "content-overlay"
    }, [_c("div", {
      staticClass: "content"
    }, [_c("div", {
      staticClass: "links"
    }, [galleryItem.video_link ? _c("a", {
      staticClass: "img-popup image-preview",
      attrs: {
        href: "#"
      }
    }, [_c("i", {
      staticClass: "fas fa-video"
    })]) : _c("a", {
      staticClass: "img-popup image-preview"
    }, [_c("i", {
      staticClass: "far fa-image"
    })])]), _vm._v(" "), _c("div", {
      staticClass: "info"
    }, [_c("h4", {
      staticClass: "project-name"
    }, [_vm._v(_vm._s(galleryItem.title) + "\n                        ")])])])])])])]);
  }), 0), _vm._v(" "), _c("el-dialog", {
    attrs: {
      visible: _vm.galleryDialog,
      title: _vm.galleryContent.title,
      width: "80%",
      center: ""
    },
    on: {
      "update:visible": function updateVisible($event) {
        _vm.galleryDialog = $event;
      }
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_vm.galleryContent.video_link ? _c("div", [_c("iframe", {
    attrs: {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/".concat(_vm.galleryContent.video_link),
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: ""
    }
  })]) : _c("div", [_c("img", {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: "/uploads/".concat(_vm.galleryContent.image),
      expression: "`/uploads/${galleryContent.image}`"
    }],
    attrs: {
      alt: ""
    }
  })])])])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/app/AppGallery.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/app/AppGallery.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppGallery_vue_vue_type_template_id_bd90cb6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppGallery.vue?vue&type=template&id=bd90cb6c& */ "./resources/js/components/app/AppGallery.vue?vue&type=template&id=bd90cb6c&");
/* harmony import */ var _AppGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppGallery.vue?vue&type=script&lang=js& */ "./resources/js/components/app/AppGallery.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppGallery_vue_vue_type_template_id_bd90cb6c___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppGallery_vue_vue_type_template_id_bd90cb6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app/AppGallery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app/AppGallery.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/app/AppGallery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppGallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppGallery.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app/AppGallery.vue?vue&type=template&id=bd90cb6c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/app/AppGallery.vue?vue&type=template&id=bd90cb6c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppGallery_vue_vue_type_template_id_bd90cb6c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppGallery_vue_vue_type_template_id_bd90cb6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppGallery_vue_vue_type_template_id_bd90cb6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppGallery.vue?vue&type=template&id=bd90cb6c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppGallery.vue?vue&type=template&id=bd90cb6c&");


/***/ })

}]);