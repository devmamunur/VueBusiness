(self["webpackChunk"] = self["webpackChunk"] || []).push([["AppAbout"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppAbout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppAbout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cool-lightbox */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cool-lightbox/dist/vue-cool-lightbox.min.css */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      imageList: [],
      loading: true,
      items: [{
        src: null
      }],
      index: null
    };
  },
  components: {
    CoolLightBox: vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    getFeatures: "index/getFeatures",
    getWhayChooses: "index/getWhayChooses",
    getHistories: "index/getHistories"
  })),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    sectionInfo: "index/getSectionInfo",
    features: "index/getFeatures",
    whayChooses: "index/getWhayChooses",
    histories: "index/getHistories"
  })),
  watch: {
    sectionInfo: function sectionInfo() {
      this.items[0].src = this.sectionInfo.about_intro_video;
    }
  },
  created: function created() {
    this.getFeatures();
    this.getWhayChooses();
    this.getHistories();
    this.items[0].src = this.sectionInfo.about_intro_video;
  }
});

/***/ }),

/***/ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableBodyScroll": () => (/* binding */ disableBodyScroll),
/* harmony export */   "clearAllBodyScrollLocks": () => (/* binding */ clearAllBodyScrollLocks),
/* harmony export */   "enableBodyScroll": () => (/* binding */ enableBodyScroll)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cool-lightbox{position:fixed;left:0;bottom:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;right:0;-webkit-transition:all .3s ease;transition:all .3s ease}.cool-lightbox .cool-lightbox-zoom{position:absolute;bottom:15px;left:50%;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:99999;background-color:rgba(15,15,15,.8);border-radius:8px;padding:0 12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cool-lightbox .cool-lightbox-zoom input[type=range]{-webkit-appearance:none;margin:10px 0;width:105px;background:0 0}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus{outline:0}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-runnable-track{width:100%;height:4px;cursor:pointer;animate:.2s;-webkit-box-shadow:0 0 0 #000;box-shadow:0 0 0 #000;background:#e6e6e6;border-radius:11px;border:0 solid #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-thumb{-webkit-box-shadow:1px 1px 1px #000;box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-4.5px}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-webkit-slider-runnable-track{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-track{width:100%;height:4px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#e6e6e6;border-radius:11px;border:0 solid #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-track{width:100%;height:4px;cursor:pointer;animate:.2s;background:0 0;border-color:transparent;color:transparent}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-lower{background:#e6e6e6;border:0 solid #000;border-radius:22px;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-upper{background:#e6e6e6;border:0 solid #000;border-radius:22px;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-lower{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-upper{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon{height:15px;width:15px;color:#fff}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:first-of-type{margin-right:10px}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:last-of-type{margin-left:10px}.cool-lightbox .cool-lightbox-thumbs{position:absolute;height:100vh;overflow-y:auto;width:102px;right:-102px;top:0;overflow-x:hidden;-webkit-transition:none;transition:none;background-color:#ddd;scrollbar-width:thin;scrollbar-color:#fa4242 rgba(175,175,175,.9)}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar{width:6px;height:6px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-button{width:0;height:0}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb{background:#fa4242;border:0 none #fff;border-radius:50px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:hover{background:#fff}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:active{background:#000}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track{background:#e1e1e1;border:0 none #fff;border-radius:8px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:hover{background:#666}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:active{background:#333}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-corner{background:0 0}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{width:212px;right:-212px}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:2px;padding-right:0}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{background-color:#000;width:100%;margin-right:2px;margin-bottom:2px;display:block;height:75px;position:relative}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:calc(100%/2 - 2px)}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:before{top:0;left:0;right:0;bottom:0;opacity:0;content:'';z-index:150;-webkit-transition:all .3s ease;transition:all .3s ease;position:absolute;visibility:hidden;border:3px solid #fa4242}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon{position:absolute;z-index:100;top:50%;left:50%;width:25px;height:25px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon path{fill:#fff}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video:after{content:'';top:0;left:0;right:0;bottom:0;z-index:50;position:absolute;background:rgba(0,0,0,.6)}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.active:before,.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:hover:before{opacity:1;visibility:visible}.cool-lightbox .cool-lightbox__inner{padding:60px 0;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transition:none;transition:none}@media (min-width:767px){.cool-lightbox .cool-lightbox__inner{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox__progressbar{position:absolute;top:0;left:0;right:0;height:2px;z-index:500;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 3s linear;transition:-webkit-transform 3s linear;transition:transform 3s linear;transition:transform 3s linear, -webkit-transform 3s linear;display:block}.cool-lightbox.cool-lightbox--is-swipping{cursor:-webkit-grabbing;cursor:grabbing}.cool-lightbox.cool-lightbox--is-swipping iframe{pointer-events:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide{-webkit-transition:none;transition:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide.cool-lightbox__slide--hide{display:-webkit-box;display:-ms-flexbox;display:flex;z-index:50}.cool-lightbox.cool-lightbox--zoom-disabled .cool-lightbox__slide .cool-lightbox__slide__img{-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.cool-lightbox.cool-lightbox--can-zoom .cool-lightbox__slide img{cursor:-webkit-zoom-in;cursor:zoom-in}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox__slide img{cursor:move;cursor:grab;cursor:-webkit-grab}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox-caption{opacity:0}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:102px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:212px}}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox-thumbs{right:0}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{width:100%;left:0;right:0;top:auto;height:70px;bottom:-70px;overflow:auto}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{bottom:-79px;height:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list{width:100%;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:100px;-ms-flex-negative:0;flex-shrink:0;margin-bottom:0;height:65px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{height:75px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:70px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox-thumbs{bottom:0}.cool-lightbox *{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}.cool-lightbox button{background:0 0;border:none;cursor:pointer;outline:0}.cool-lightbox svg path,.cool-lightbox svg rect{fill:currentColor}.cool-lightbox .cool-lightbox-button{padding:21px 16px 21px 4px;height:100px;opacity:1;z-index:800;color:#ccc;-webkit-transition:all .3s ease;transition:all .3s ease;position:absolute;top:calc(50% - 50px);width:54px;transition:all .3s ease;visibility:visible}@media (min-width:767px){.cool-lightbox .cool-lightbox-button{width:70px;padding:31px 26px 31px 6px}}.cool-lightbox .cool-lightbox-button.hidden{opacity:0;visibility:hidden}.cool-lightbox .cool-lightbox-button:hover{color:#fff}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon{padding:7px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(30,30,30,.6)}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon>svg{width:100%;height:100%}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--prev{left:0}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{right:0;padding:21px 4px 21px 16px}@media (min-width:767px){.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{padding:31px 6px 31px 26px}}.cool-lightbox .cool-lightbox-pdf{max-width:100%}.cool-lightbox .cool-lightbox__iframe{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;top:50%;left:50%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transform:translate3d(-50%,-50%,0) scale3d(1,1,1);transform:translate3d(-50%,-50%,0) scale3d(1,1,1)}.cool-lightbox .cool-lightbox__iframe iframe{width:100%;height:100%}@media (min-width:767px){.cool-lightbox .cool-lightbox__iframe iframe{max-width:80vw;max-height:80vh}}.cool-lightbox .cool-lightbox__wrapper{width:100%;height:100%;position:relative}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:100%;opacity:.4;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide.cool-lightbox__slide--current{opacity:1}.cool-lightbox .cool-lightbox__slide{width:100%;top:0;bottom:0;left:0;right:0;z-index:100;display:none;position:absolute;margin-right:30px;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease, -webkit-transform .3s ease}.cool-lightbox .cool-lightbox__slide:last-of-type{margin-right:0}.cool-lightbox .cool-lightbox__slide.cool-lightbox__slide--current{display:-webkit-box;display:-ms-flexbox;display:flex}.cool-lightbox .cool-lightbox__slide .cool-lightbox__slide__img{position:absolute;height:100%;width:100%;left:50%;top:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate3d(-50%,-50%,0) scale3d(1,1,1);transform:translate3d(-50%,-50%,0) scale3d(1,1,1);-webkit-transition:all .3s ease;transition:all .3s ease;display:-webkit-box;display:-ms-flexbox;display:flex}.cool-lightbox .cool-lightbox__slide img{max-width:100%;max-height:100%;margin:auto;z-index:9999;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-shadow:0 0 1.5rem rgba(0,0,0,.45);box-shadow:0 0 1.5rem rgba(0,0,0,.45)}.cool-lightbox .cool-lightbox__slide picture{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:100%;height:100%;margin:auto;z-index:9999}.cool-lightbox-toolbar{position:absolute;top:0;right:0;opacity:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:visible}.cool-lightbox-toolbar.hidden{opacity:0;visibility:hidden}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{background:rgba(30,30,30,.6);border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:9px;position:relative;-webkit-transition:color .2s;transition:color .2s;vertical-align:top;visibility:inherit;width:40px;height:40px;color:#ccc}@media (min-width:767px){.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{width:44px;height:44px;padding:10px}}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn>svg{width:100%;height:100%}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn:hover{color:#fff}.cool-lightbox-caption{bottom:0;color:#eee;font-size:14px;font-weight:400;left:0;opacity:1;line-height:1.5;padding:18px 28px 16px 24px;right:0;text-align:center;direction:ltr;position:absolute;-webkit-transition:opacity .25s ease,visibility 0s ease .25s;transition:opacity .25s ease,visibility 0s ease .25s;z-index:99997;background:-webkit-gradient(linear,left bottom, left top,color-stop(0, rgba(0,0,0,.75)),color-stop(50%, rgba(0,0,0,.3)),color-stop(65%, rgba(0,0,0,.15)),color-stop(75.5%, rgba(0,0,0,.075)),color-stop(82.85%, rgba(0,0,0,.037)),color-stop(88%, rgba(0,0,0,.019)),to(transparent));background:linear-gradient(0deg,rgba(0,0,0,.75) 0,rgba(0,0,0,.3) 50%,rgba(0,0,0,.15) 65%,rgba(0,0,0,.075) 75.5%,rgba(0,0,0,.037) 82.85%,rgba(0,0,0,.019) 88%,transparent)}@media (min-width:767px){.cool-lightbox-caption{padding:22px 30px 23px 30px}}.cool-lightbox-caption a{color:#eee;text-decoration:underline}.cool-lightbox-caption h6{font-size:14px;margin:0 0 6px 0;line-height:130%}@media (min-width:767px){.cool-lightbox-caption h6{font-size:16px;margin:0 0 6px 0}}.cool-lightbox-caption p{font-size:13px;line-height:130%;color:#ccc}@media (min-width:767px){.cool-lightbox-caption p{font-size:15px}}.cool-lightbox-caption p a{color:#ccc}.cool-lightbox-caption p a:hover{color:#eee}.cool-lightbox-modal-enter-active,.cool-lightbox-modal-leave-active{-webkit-transition:opacity .35s;transition:opacity .35s}.cool-lightbox-modal-enter,.cool-lightbox-modal-leave-to{opacity:0}.cool-lightbox-slide-change-enter-active,.cool-lightbox-slide-change-leave-active{-webkit-transition:opacity .27s;transition:opacity .27s}.cool-lightbox-slide-change-enter,.cool-lightbox-slide-change-leave-to{opacity:0}.cool-lightbox-loading-wrapper{top:50%;left:50%;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cool-lightbox-loading-wrapper .cool-lightbox-loading{-webkit-animation:cool-lightbox-rotate 1s linear infinite;animation:cool-lightbox-rotate 1s linear infinite;background:0 0;border:4px solid #888;border-bottom-color:#fff;border-radius:50%;height:50px;opacity:.7;padding:0;width:50px;z-index:500}@-webkit-keyframes cool-lightbox-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cool-lightbox-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");


var attributes = ['media', 'srcset', 'sizes', 'src'];

var LazyLoadDirective = {
  inserted: function (el) {

    function loadImage() {
      var imageElement = findChild(el, 'img');
      var pictureElement = findChild(el, 'picture');
      if (imageElement) {
        setLoadListeners(imageElement);
        swapAttributes(imageElement);
      } else if (pictureElement) {
        var pictureImg = findChild(pictureElement, 'img');
        var pictureSources = Array.from(pictureElement.children).filter(
            function (child) { return child.nodeName === "SOURCE"; }
        );
        if (pictureImg) {
          setLoadListeners(pictureImg);
          if (pictureSources.length) {
            pictureSources.forEach(function (source) {
              swapAttributes(source);
            });
          }
          swapAttributes(pictureImg);
        }
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      var options = {
        root: null,
        threshold: "0"
      };
      var observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  }
};

function swapAttributes(el) {
  attributes.forEach(function (attribute) {
    var dataAttribute = el.dataset[attribute];
    if (dataAttribute) {
      el[attribute] = dataAttribute;
      el.removeAttribute(("data-" + attribute));
    }
  });
}

function setLoadListeners(el) {
  el.addEventListener("load", function () {
    setTimeout(function () { return el.classList.add("loaded"); }, 100);
  });
  el.addEventListener("error", function () { return console.log("error"); });
}

function findChild(parent, nodeName) {
  return Array.from(parent.children).find(
      function (el) { return el.nodeName === nodeName.toUpperCase(); }
  );
}

var AutoplayObserver = {
    inserted: function (el) {
      // getYoutube ID
      function isYoutubeVideo(url) {

        // youtube data
        var youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var ytId = (url.match(youtubeRegex)) ? RegExp.$1 : false;

        if(ytId) {
          return true;
        }

        return false;
      }

      function autoplayVideo() {
        var tagName = el.tagName;
        var autoplay = el.dataset.autoplay; 
        if(autoplay) {
          if(tagName === 'VIDEO') {
            el.muted = true;
            el.autoplay = true;

            return;
          }

          if(tagName === 'IFRAME') {
            var url = new URL(el.src);
            var muted = 'muted';

            if(isYoutubeVideo(el.src)) {
              muted = 'mute';
            }

            // append autoplay
            url.searchParams.append(muted, 1);
            url.searchParams.append('autoplay', 1);

            el.src = url.href;
          }
        }
      }
  
      function handleIntersect(entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            autoplayVideo();
            observer.unobserve(el);
          }
        });
      }
  
      function createObserver() {
        var options = {
          root: null,
          threshold: "0"
        };
        var observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
      }
      if (window["IntersectionObserver"]) {
        createObserver();
      } else {
        loadImage();
      }
    }
  };

//

var script = {
  directives: {
    lazyload: LazyLoadDirective,
    autoplayObserver: AutoplayObserver,
  },

  data: function data() {
    return {
      // swipe data
      initialMouseX: 0,
      initialMouseY: 0,
      endMouseX: 0,
      endMouseY: 0,
      swipeType: null,
      IsSwipping: false,
      isDraggingSwipe: false,

      // use for mouse wheel
      prevTime: 0,

      // swipe effect
      xSwipeWrapper: 0,
      ySwipeWrapper: 0,
      swipeAnimation: null,
      swipeInterval: null,
      lightboxInnerWidth: null,

      // styles data
      imgIndex: this.index,
      isVisible: false,
      paddingBottom: false,
      imageLoading: false,
      showThumbs: false,
      isFullScreenMode: false,

      // aspect ratio videos
      aspectRatioVideo: {
        width: 'auto',
        height: 'auto',
      },

      // props to bind styles
      buttonsVisible: true,
      scale: 1,
      top: 0,
      left: 0,
      lastX: 0,
      lastY: 0,
      isDraging: false,
      canZoom: true,
      isZooming: false,
      transition: 'all .3s ease',
      zoomBar: 0,

      // slideshow playing data
      isPlayingSlideShow: false,
      intervalProgress: null,
      loopData: false,
      stylesInterval: {
        'display': 'block'
      }
    };
  },

  props: {
    index: {
      required: true
    },

    effect: {
      type: String,
      default: 'swipe'
    },

    items: {
      type: Array,
      required: true,
    },

    loop: {
      type: Boolean,
      default: true,
    },

    slideshow: {
      type: Boolean,
      default: true,
    },

    slideshowColorBar: {
      type: String,
      default: '#fa4242',
    },

    slideshowDuration: {
      type: Number,
      default: 3000,
    },
    
    useZoomBar: {
      type: Boolean,
      default: false,
    },

    closeOnClickOutsideMobile: {
      type: Boolean,
      default: false,
    },
    
    srcName: {
      type: String,
      default: 'src',
    },

    srcSetName: {
      type: String,
      default: 'srcset'
    },
    
    srcThumb: {
      type: String,
      default: 'thumb',
    },

    srcMediaType: {
      type: String,
      default: 'mediaType',
    },

    overlayColor: {
      type: String,
      default: 'rgba(30, 30, 30, .9)'
    },

    zIndex: {
      type: Number,
      default: 9999,
    },

    gallery: {
      type: Boolean,
      default: true,
    },

    fullScreen: {
      type: Boolean,
      default: false,
    },

    thumbsPosition: {
      type: String,
      default: 'right',
    },

    youtubeCookies: {
      type: Boolean,
      default: true,
    },

    enableWheelEvent: {
      type: Boolean,
      default: false,
    },

    showCloseButton: {
      type: Boolean,
      default: true,
    },
    
    disableZoom: {
      type: Boolean,
      default: false,
    },

    dir: {
      type: String,
      default: 'ltr',
    },

    enableScrollLock: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    zoomBar: function zoomBar(newVal, prevVal) {
      var item;
      if(this.isZooming) {
        if(this.effect == 'swipe') {
          item = this.$refs.items[this.imgIndex].childNodes[0];
        } else {
          item = this.$refs.items.childNodes[0];
        }

        var newZoom = 1.6 + newVal/10;
        item.style.transform  = 'translate3d(calc(-50% + '+this.left+'px), calc(-50% + '+this.top+'px), 0px) scale3d('+newZoom+', '+newZoom+', '+newZoom+')';
      }
    },

    showThumbs: function showThumbs(prev, val) {
      var widthGalleryBlock = 212;
      var swipeAnimation = 'all .3s ease';
      if(window.innerWidth < 767) {
        widthGalleryBlock = 102;
        swipeAnimation = null;
      }

      if (this.thumbsPosition === 'bottom') {
        widthGalleryBlock = 0;
      }

      var self = this;
      this.swipeAnimation = swipeAnimation;

      if(prev) {

        if(this.dir === 'rtl') {
          this.xSwipeWrapper = this.imgIndex*(window.innerWidth - widthGalleryBlock) + 30*this.imgIndex;
        } else {
          this.xSwipeWrapper = -this.imgIndex*(window.innerWidth - widthGalleryBlock) - 30*this.imgIndex;
        }

      } else {
        
        if(this.dir === 'rtl') {
          this.xSwipeWrapper = this.imgIndex*window.innerWidth + 30*this.imgIndex;
        } else {
          this.xSwipeWrapper = -this.imgIndex*window.innerWidth - 30*this.imgIndex;
        }

      }

      setTimeout(function() {
        self.swipeAnimation = null;
      }, 300);
    },

    index: function index(prev, val) {
      var self = this;
      
      // body scroll lock
      var $body = document.querySelector('body');

      if(prev !== null) {
        
        // swipe type
        this.swipeType = null;
        this.initialMouseY = 0;
        this.ySwipeWrapper = 0;
        
        // set loop from data
        this.loopData = this.loop;

        // swipe effect case remove loop
        if(this.effect === 'swipe') {
          this.loopData = false;
          window.addEventListener('resize', this.xPositionOnResize);
        }

        // add img index
        this.imgIndex = prev;
        this.isVisible = true;

        // add events listener
        window.addEventListener('keydown', this.eventListener);

        // add wheel event
        if(this.enableWheelEvent) {
          window.addEventListener('wheel', this.wheelEvent);
        }
        
        // only in mobile
        if(window.innerWidth < 700) {

          // add click event
          setTimeout(function() {
            window.addEventListener('click', self.showButtons);
          }, 200);
        }

        if (this.enableScrollLock) {
          setTimeout(function() {
            self.setCompensateForScrollbar();
            (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disableBodyScroll)(self.$refs.coolLightbox);
          }, 50);
        }

      } else {

        // hide and stop slideshow
        this.isVisible = false;
        this.stopSlideShow();

        // set starts X to 0
        this.startsX = 0;
        this.initialMouseY = 0;
        this.swipeType = null;

        // clear interval
        clearInterval(this.swipeInterval);
        this.swipeAnimation = null;

        // finish swipe
        this.isDraggingSwipe = false;
        this.isZooming = true;

        // remove events listener
        window.removeEventListener('keydown', this.eventListener);

        if (this.enableScrollLock) {
          self.removeCompensateForScrollbar();
          (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enableBodyScroll)(self.$refs.coolLightbox);
        }

        // remove click event
        window.removeEventListener('click', this.showButtons);

        // remove resize event
        window.removeEventListener('resize', this.xPositionOnResize);
        
        // remove wheel event
        if(this.enableWheelEvent) {
          window.removeEventListener('wheel', this.wheelEvent);
        }
      }

    }, 
    
    imgIndex: function imgIndex(prev, val) {
      var this$1 = this;
      
      // when animation is loaded
      this.$nextTick(function () {

        if(this$1.effect === 'swipe') {
          this$1.setLightboxInnerWidth();
          this$1.setXPosition(prev);
        }
        
        if(prev !== null & val === null) {
          this$1.$emit("on-open", prev);
        }

        if(prev !== null) {
          if(prev !== val) {
            if(!this$1.getYoutubeUrl(this$1.getItemSrc(prev)) && !this$1.getVimeoUrl(this$1.getItemSrc(prev))) {
              this$1.stopVideos();
            }
          }

          // if is an image change imageLoading to true
          if(!this$1.getVideoUrl(this$1.getItemSrc(prev))) {
            if(!this$1.is_cached(this$1.getItemSrc(prev))) {
              this$1.imageLoading = true;
            }
          }

          // add caption padding to Lightbox wrapper
          this$1.addCaptionPadding();
          
          // setAspectRatioVideo when is swipe
          if(this$1.effect === 'swipe') {
            this$1.setAspectRatioVideo();
          } else {

            if(this$1.getVideoUrl(this$1.getItemSrc(prev))) {
              this$1.setAspectRatioVideo();
            }
          }
        }

        // reset zoom
        this$1.resetZoom();

        // reset swipe type
        this$1.swipeType = null;
        this$1.ySwipeWrapper = 0;

      });
    }, 
  },

  beforeDestroy: function beforeDestroy () {
    if (this.enableScrollLock) {
      this.removeCompensateForScrollbar();
      if(this.$refs.coolLightbox) {
        (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enableBodyScroll)(this.$refs.coolLightbox);
      }
    }
  },

  methods: {
    getExtFromItem: function getExtFromItem(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      if(this.checkIfIsObject(imgIndex)) {
        var item = this.items[imgIndex];

        //item extension is specified, so return it
        if (item['ext']) {
          return item['ext']
        }

        return 'mp4';
      }
    },

    stopVideos: function stopVideos() {
      var videos = document.getElementsByClassName("cool-lightbox-video");
      var isVideoPlaying = function (video) { return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2); };
      if(videos.length > 0) {
        Array.prototype.forEach.call(videos, function (video) {
          var type = video.tagName;
          
          if(type === 'IFRAME') {
            var iframeSrc = video.src;
            return video.src = iframeSrc;
          }

          if(isVideoPlaying(video)) {
            return video.pause();
          }

        });
      }
    }, 

    removeCompensateForScrollbar: function removeCompensateForScrollbar() {
      document.body.classList.remove("compensate-for-scrollbar");
      var noscrollStyle = document.getElementById("coollightbox-style-noscroll");
      if(noscrollStyle !== null) {
        document.getElementById("coollightbox-style-noscroll").remove();
      }
    },

    setCompensateForScrollbar: function setCompensateForScrollbar() {
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (
        !isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend',
          '<style id="coollightbox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
            (window.innerWidth - document.documentElement.clientWidth) +
          "px;}</style>"
        );

        document.body.classList.add("compensate-for-scrollbar");
      }
    }, 

    setAutoplay: function setAutoplay(itemIndex) {
      if(this.checkIfIsObject(itemIndex) && this.items[itemIndex].hasOwnProperty('autoplay') && this.items[itemIndex].autoplay) {
        return true;
      }

      return false;
    },

    toggleFullScreenMode: function toggleFullScreenMode() {
      if(this.isFullScreenMode) {
        this.closeFullscreen();
      } else {
        this.fullScreenMode();
      }

      this.isFullScreenMode = !this.isFullScreenMode;
    },

    closeFullscreen: function closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    },

    fullScreenMode: function fullScreenMode() {
      /* Get the documentElement (<html>) to display the page in fullscreen */
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },

    // check if event is arrow button or toolbar button
    checkIfIsButton: function checkIfIsButton(event) {
      var elements = '.cool-lightbox__iframe *, .cool-lightbox-button, .cool-lightbox-button *, .cool-lightbox-toolbar__btn, .cool-lightbox-toolbar__btn *, .cool-lightbox-caption h6, .cool-lightbox-caption p, .cool-lightbox-caption a';
      if (event.target.matches(elements)) {
        return true
      }

      return false
    },

    // start swipe event
    startSwipe: function startSwipe(event) {
      if(this.isZooming) {
        return false;
      }

      // check if is some button
      if(this.checkIfIsButton(event)) {
        return false;
      }

      // clear interval
      clearInterval(this.swipeInterval);
      this.swipeAnimation = null;

      // starts swipe
      this.isDraggingSwipe = true;
      this.initialMouseX = this.getMouseXPosFromEvent(event);
      this.initialMouseY = this.getMouseYPosFromEvent(event);
    },

    // continue swipe event
    continueSwipe: function continueSwipe(event) {
      if(this.isDraggingSwipe) {
        this.IsSwipping = true;
        var currentPosX = this.getMouseXPosFromEvent(event);
        var currentPosY = this.getMouseYPosFromEvent(event);
        var windowWidth = this.lightboxInnerWidth;

        // diffs
        var diffX = Math.abs(currentPosX - this.initialMouseX);
        var diffY = Math.abs(currentPosY - this.initialMouseY);

        // swipe type
        if(this.swipeType == null) {
          if(diffY > 5 || diffX > 5) {
            if(diffY > diffX) {
              this.swipeType = 'v';
            } else {
              this.swipeType = 'h';
            }
          }
        }

        // swipe
        if(this.swipeType == 'h') {
          // swipe wrapper
          if(this.dir === 'rtl') {
            this.xSwipeWrapper = (windowWidth*this.imgIndex) + currentPosX - this.initialMouseX + 30*this.imgIndex;
          } else {
            this.xSwipeWrapper = -(windowWidth*this.imgIndex) + currentPosX - this.initialMouseX - 30*this.imgIndex;
          }

        } else {
          this.ySwipeWrapper = currentPosY - this.initialMouseY;
        }

        // mobile caseS
        if(event.type === 'touchmove') {
          this.endMouseX = this.getMouseXPosFromEvent(event);
          this.endMouseY = this.getMouseYPosFromEvent(event);
        }
      }
    },

    // end swipe event
    endSwipe: function endSwipe(event) {
      if(this.checkIfIsButton(event) && this.initialMouseX === 0) {
        return false;
      }

      // event check is dragging and swipe
      var self = this;
      var swipeType = this.swipeType;
      this.isDraggingSwipe = false;
      
      // horizontal swipe type
      if(this.initialMouseX === 0 && swipeType == 'h') {
        return false
      }

      // touch end fixes
      if(event.type !== 'touchend') {
        this.endMouseX = this.getMouseXPosFromEvent(event);
        this.endMouseY = this.getMouseYPosFromEvent(event);
      } else {
        if(this.endMouseX === 0) {
          return;
        }
      }

      // check if is dragged 
      if(
        ((this.endMouseX - this.initialMouseX === 0) && swipeType == 'h') || 
        this.isZooming ||
        ((this.endMouseY - this.initialMouseY === 0) && swipeType == 'v')
      ) {
        return;
      } 
      
      // set swipe animation
      this.setSwipeAnimation();

      // reset swipe data
      setTimeout(function() {
        self.IsSwipping = false;
        self.initialMouseX = 0;
        self.endMouseX = 0;
      }, 10);

      // type of swipe
      if(this.swipeType === 'h') {

        // if the swipe is to the right
        if((this.endMouseX - this.initialMouseX) < -40) {
          if(this.dir === 'rtl') {
            return this.swipeToLeft()
          }
          return this.swipeToRight()
        } 

        // if the swipe is to the left
        if((this.endMouseX - this.initialMouseX) > 40) {
          if(this.dir === 'rtl') {
            return this.swipeToRight()
          }
          return this.swipeToLeft();
        }
      }


      if(this.swipeType === 'v') {
        var diffY = Math.abs(this.endMouseY - this.initialMouseY);

        // diff Y
        if(diffY >= 90) {
          this.close();
        } else {
          this.ySwipeWrapper = 0;
        }
      } 
      
      this.swipeType = null;
      var windowWidth = this.lightboxInnerWidth;

      if(this.dir === 'rtl') {
        this.xSwipeWrapper = this.imgIndex*windowWidth + 30*this.imgIndex;
        return;
      }

      this.xSwipeWrapper = -this.imgIndex*windowWidth - 30*this.imgIndex;
    },
    
    // swipe to left effect
    swipeToLeft: function swipeToLeft() {
      if(!this.hasPrevious && this.effect === 'swipe') {

        if(this.dir === 'rtl') {
          return this.xSwipeWrapper = this.imgIndex*this.lightboxInnerWidth + 30*this.imgIndex
        }

        return this.xSwipeWrapper = -this.imgIndex*this.lightboxInnerWidth - 30*this.imgIndex
      }

      this.changeIndexToPrev();
    },
    
    // swipe to right effect
    swipeToRight: function swipeToRight() {
      if(!this.hasNext && this.effect === 'swipe') {

        if(this.dir === 'rtl') {
          return this.xSwipeWrapper = this.imgIndex*this.lightboxInnerWidth + 30*this.imgIndex
        }

        return this.xSwipeWrapper = -this.imgIndex*this.lightboxInnerWidth - 30*this.imgIndex
      }

      this.changeIndexToNext();
    },

    // function that return x position from event
    getMouseXPosFromEvent: function getMouseXPosFromEvent(event) {
      if(event.type.indexOf('mouse') !== -1){
          return event.clientX;
      }
      return event.touches[0].clientX;
    },
    
    // function that return Y position from event
    getMouseYPosFromEvent: function getMouseYPosFromEvent(event) {
      if(event.type.indexOf('mouse') !== -1){
          return event.clientY;
      }
      return event.touches[0].clientY;
    },

    // check if the image is cached
    is_cached: function is_cached(src) {
      var image = new Image();
      image.src = src;

      return image.complete;
    },

    // image loaded event
    imageLoaded: function imageLoaded() {
      this.imageLoading = false;
    },

    // get video url
    itemThumb: function itemThumb(itemUrl, itemIndex) {

      var thumb = this.getItemThumb(itemIndex);
      if(thumb) {
        return thumb
      }

      var youtubeID = this.getYoutubeID(itemUrl);
      if(youtubeID) {
        return 'https://img.youtube.com/vi/'+youtubeID+'/mqdefault.jpg'
      }

      var vimeoID = this.getVimeoID(itemUrl);
      if(vimeoID) {
        return false
      }

      return itemUrl
    },

    isItemPicture: function isItemPicture(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      var item = this.items[imgIndex];
      if(this.checkIfIsObject(imgIndex)) {
        return item.picture
      }

      return false
    },

    getPictureSources: function getPictureSources(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      var picture = this.items[imgIndex].picture;

      return picture.sources ? picture.sources : []
    },
    
    // get item src
    getItemSrc: function getItemSrc(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      var item = this.items[imgIndex];
      if(this.checkIfIsObject(imgIndex)) {
        return item[this.srcName]
      }

      return item
    },

    getItemSrcSet: function getItemSrcSet(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      var item = this.items[imgIndex];
      if(this.checkIfIsObject(imgIndex)) {
        return item[this.srcSetName]
      }

      return null
    },

    getItemSizes: function getItemSizes(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      var item = this.items[imgIndex];
      if(this.checkIfIsObject(imgIndex)) {
        return item.sizes
      }

      return null
    },
    
    getItemAlt: function getItemAlt(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      var item = this.items[imgIndex];
      if(this.checkIfIsObject(imgIndex)) {
        return item.alt;
      }

      return null
    },

    getItemThumb: function getItemThumb(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      var item = this.items[imgIndex];
      if(this.checkIfIsObject(imgIndex)) {
        return item[this.srcThumb]
      } 

      if(this.getVideoUrl(item)) {
        return false
      }

      return item
    },

    // get item media type
    getMediaType: function getMediaType(imgIndex) {
      if(imgIndex === null) {
        return false
      }

      if(this.checkIfIsObject(imgIndex)) {
        
        var item$1 = this.items[imgIndex];

        //item type is specified, so return it
        if (item$1[this.srcMediaType]) {
          return item$1[this.srcMediaType]
        }
      }
    
      if (this.getVideoUrl(this.getItemSrc(imgIndex))) {
        return 'video'
      } else if (this.getPDFurl(this.getItemSrc(imgIndex))) { 
        return 'iframe'
      } else {
        return 'image'
      }
    },

    // toggle play slideshow event
    togglePlaySlideshow: function togglePlaySlideshow() {
      if(!this.slideshow) {
        return false
      }

      if(!this.hasNext && !this.loopData) {
        return false
      }
      this.isPlayingSlideShow = !this.isPlayingSlideShow;

      // if is playing move if not stop it
      if(this.isPlayingSlideShow) {
        this.move();
      } else {
        this.stopSlideShow();
      }
    },

    // stop slideshow
    stopSlideShow: function stopSlideShow() {
      this.isPlayingSlideShow = false;
      clearInterval(this.intervalProgress);
      this.stylesInterval = {
        'transform': 'scaleX(0)',
        'transition': 'none',
      };
    },

    // move event in zoom
    move: function move() {
      var self = this;
      this.progressWidth = 100;
      this.intervalProgress = setInterval(frame, this.slideshowDuration + 90);
      
      self.stylesInterval = {
        'transform': 'scaleX(1)',
        'background': this.slideshowColorBar,
        'transition-duration': this.slideshowDuration+'ms',
      };
      function frame() {
        self.stylesInterval = {
          'transform': 'scaleX(0)',
          'transition': 'none',
        };
        
        if(self.dir === 'rtl') {
          self.onPrevClick(true);
        } else {
          self.onNextClick(true);
        }

        if(!self.hasNext && !self.loopData) {
          self.stopSlideShow();
        } else {
          setTimeout(function() {
            self.stylesInterval = {
              'transform': 'scaleX(1)',
              'background': self.slideshowColorBar,
              'transition-duration': self.slideshowDuration+'ms',
            };
          }, 50);
        }
      }
    }, 

    // show buttons event
    showButtons: function showButtons(event) {
      if (!this.checkIfIsButton(event)) {
        var self = this;
        setTimeout(function() {
          self.buttonsVisible = !self.buttonsVisible;
        }, 100);
      }
    },

    // check if is allowed to drag
    checkMouseEventPropButton: function checkMouseEventPropButton(button) {
      if (!this.isZooming) { return false }
      // mouse left btn click
      return button === 0
    },

    // handle mouse down event
    handleMouseDown: function handleMouseDown(e) {
      if (!this.checkMouseEventPropButton(e.button)) { return }
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.isDraging = true;
      e.stopPropagation();
    },

    // handle mouse up event
    handleMouseUp: function handleMouseUp(e) {
      if (!this.checkMouseEventPropButton(e.button)) { return }
      this.isDraging = false;
      this.lastX = this.lastY = 0;

      // Fix drag zoom out
      var thisContext = this;
      setTimeout(function() {
        thisContext.canZoom = true;
      }, 100);
    },

    // handle mouse move event
    handleMouseMove: function handleMouseMove(e) {
      if (!this.checkMouseEventPropButton(e.button)) { return }
      if (this.isDraging) {
        this.top = this.top - this.lastY + e.clientY;
        this.left = this.left - this.lastX + e.clientX;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.canZoom = false;
        
        var item = e.target.parentNode.nodeName === 'PICTURE'
            ? e.target.parentNode.parentNode
            : e.target.parentNode;
        var newZoom = 1.6 + this.zoomBar/10;
        item.style.transform  = 'translate3d(calc(-50% + '+this.left+'px), calc(-50% + '+this.top+'px), 0px) scale3d('+newZoom+', '+newZoom+', '+newZoom+')';
      }
      e.stopPropagation();
    },

    // zoom image event
    zoomImage: function zoomImage(indexImage) {
      if(this.disableZoom) {
        return false
      }

      if(window.innerWidth < 700) {
        return false
      }

      if(!this.canZoom) {
        return false
      }

      if(this.IsSwipping) {
        return false
      }

      // item zoom
      var item;
      if(this.effect == 'swipe') {
        item = this.$refs.items[this.imgIndex].childNodes[0];
      } else {
        item = this.$refs.items.childNodes[0];
      }
      
      // zoom variables
      var isZooming = this.isZooming;
      var thisContext = this;

      // Is zooming check
      if(isZooming) {
        if(!this.isDraging) { 
          this.isZooming = false;
          this.zoomBar = 0;
        }
      } else {
        this.isZooming = true;
      }

      // check if is zooming
      if(this.isZooming) {
        this.stopSlideShow();

        // add scale
        item.style.transform  = 'translate3d(calc(-50%), calc(-50%), 0px) scale3d(1.6, 1.6, 1.6)';

        // hide buttons
        this.buttonsVisible = false;

        // fix drag transition problems
        setTimeout(function() {
          thisContext.transition = 'all .0s ease';
        }, 100);

      } else {

        // show buttons 
        this.buttonsVisible = true;
        this.resetZoom();
      }
    },

    // Reset zoom data
    resetZoom: function resetZoom() {
      this.scale = 1;
      this.left = 0;
      this.top = 0;
      this.zoomBar = 0;
      this.isZooming = false;
      this.swipeType = null;
      this.transition = 'all .3s ease';

      // only if index is not null
      if(this.imgIndex != null) {
        
        var item;
        if(this.effect == 'swipe') {
          item = this.$refs.items[this.imgIndex].childNodes[0];
        } else {
          item = this.$refs.items.childNodes[0];
        }

        // reset styles
        if(this.disableZoom) {
          item.style.transform  = 'translate3d(calc(-50% + '+this.left+'px), calc(-50% + '+this.top+'px), 0px)';
        } else {
          item.style.transform  = 'translate3d(calc(-50% + '+this.left+'px), calc(-50% + '+this.top+'px), 0px) scale3d(1, 1, 1)';
        }

        this.initialMouseX = 0;
        if(window.innerWidth >= 700) {
          this.buttonsVisible = true;
        }
      }
    },

    // Aspect Ratio responsive video
    setAspectRatioVideo: function setAspectRatioVideo() {
      var thisContext = this;
      var el = document.getElementsByClassName('cool-lightbox__inner');
      el = el[0];

      var computedStyle = getComputedStyle(el);
      if(window.innerWidth < 1440) {

        var width = el.clientWidth;
        var height = Math.round((width/16)*9);

        this.aspectRatioVideo.height = height+'px';
        this.aspectRatioVideo.width = width+'px';

      } else {
        
        setTimeout(function() {
          var height = el.clientHeight;
          height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);

          var width = (height/9)*16;

          thisContext.aspectRatioVideo.height = height+'px';
          thisContext.aspectRatioVideo.width = width+'px';
        }, 150);

      }
    },

    // close event
    close: function close() {
      this.stopSlideShow();
      this.swipeType = null;
      this.$emit("close", this.imgIndex);
      this.showThumbs = false;
      this.imgIndex = null;
    },

    wheelEvent: function wheelEvent(event) {
      var delay = 350;
      var currentTime = new Date().getTime();
      var direction = event.deltaY > 0 ? 'top' : 'down';

      if (currentTime - this.prevTime < delay) { return; }

      this.prevTime = currentTime;

      switch (direction) {
        case 'top':
          return this.changeIndexToPrev();
        case 'down':
          return this.changeIndexToNext();
      }
    },

    // close event click outside
    closeModal: function closeModal(event) {
      if(!this.closeOnClickOutsideMobile) {
        if(window.innerWidth < 700) {
          return false;
        }
      }

      if(this.IsSwipping) {
        return false;
      }

      var elements = '.cool-lightbox__iframe, .cool-lightbox__iframe *, .cool-lightbox-zoom, .cool-lightbox-zoom *, .cool-lightbox-thumbs, svg, path, rect, .cool-lightbox-thumbs *, .cool-lightbox-button, .cool-lightbox-toolbar__btn, .cool-lightbox-toolbar__btn *, .cool-lightbox-button *, .cool-lightbox__slide__img *, .cool-lightbox-video, .cool-lightbox-caption h6, .cool-lightbox-caption p, .cool-lightbox-caption a';
      if (!event.target.matches(elements)) {
        this.close();
      }
    },

    // set swipe animation
    setSwipeAnimation: function setSwipeAnimation() {
      var self = this;
      clearInterval(this.swipeInterval);
      this.swipeAnimation = null;

      // animation swipe
      this.swipeAnimation = 'all .3s ease';
      this.swipeInterval = setInterval(interval, 330);

      function interval() {
        self.swipeAnimation = null;
      }
    },

    // next slide event
    onNextClick: function onNextClick(isFromSlideshow) {
      if ( isFromSlideshow === void 0 ) isFromSlideshow = false;

      if(this.isZooming) {
        return false;
      }

      if(!isFromSlideshow) {
        this.stopSlideShow();
      }

      this.setSwipeAnimation();

      if(this.dir === 'rtl') {
        return this.changeIndexToPrev();
      }

      this.changeIndexToNext();
    },

    // prev slide event
    onPrevClick: function onPrevClick(isFromSlideshow) {
      if ( isFromSlideshow === void 0 ) isFromSlideshow = false;

      if(this.isZooming) {
        return false;
      }
      
      if(!isFromSlideshow) {
        this.stopSlideShow();
      }
      
      this.setSwipeAnimation();

      if(this.dir === 'rtl') {
        return this.changeIndexToNext();
      }

      this.changeIndexToPrev();
    },

    // change to next index
    changeIndexToNext: function changeIndexToNext() {
      if(this.hasNext) {
        this.onIndexChange(this.imgIndex + 1);
      } else {
        // only if has loop prop
        if(this.loopData) {
          this.onIndexChange(0);
        }
      }
    },

    // change to prev index
    changeIndexToPrev: function changeIndexToPrev() {
      if(this.hasPrevious) {
        this.onIndexChange(this.imgIndex - 1);
      } else {
        // only if has loop prop
        if(this.loopData) {
          this.onIndexChange(this.items.length - 1);
        }
      }
    },

    // set lightbox inner width
    setLightboxInnerWidth: function setLightboxInnerWidth() {
      var el = document.getElementsByClassName('cool-lightbox__inner');
      var width = el[0].clientWidth;
      this.lightboxInnerWidth = width;
    },

    // x position on resize event
    xPositionOnResize: function xPositionOnResize() {
      this.setLightboxInnerWidth();
      var index = this.imgIndex;

      if(this.dir === 'rtl') {
        this.xSwipeWrapper = index*this.lightboxInnerWidth+30*index;
        return;
      }

      // set x position
      this.xSwipeWrapper = -index*this.lightboxInnerWidth-30*index;
    },

    // set x position by img index
    setXPosition: function setXPosition(index) {
      if(this.dir === 'rtl') {
        this.xSwipeWrapper = index*this.lightboxInnerWidth+30*index;
        return
      }

      // set x position
      this.xSwipeWrapper = -index*this.lightboxInnerWidth-30*index;
      return; 
    },

    // index change
    onIndexChange: function onIndexChange(index) {
      var self = this;
      this.imgIndex = index;
      this.$emit('on-change', index);

      setTimeout(function() {
        self.$emit('on-change-end', index);
      }, 400);
    },

    // caption size 
    addCaptionPadding: function addCaptionPadding() {
      if(this.checkIfIsObject(this.imgIndex) && (this.items[this.imgIndex].title || this.items[this.imgIndex].descripcion)) {
        var el = document.getElementsByClassName('cool-lightbox-caption');
        if(el.length > 0) {
          this.paddingBottom = el[0].offsetHeight;
        } 
      } else {
        this.paddingBottom = 60;
      }
    },

    getPDFurl: function getPDFurl(url) {
      if(this.imgIndex === null) {
        return false
      }

      var str = new String(url);
      if(str.endsWith('.pdf')){
        return url
      }

      return false
    },

    // check if is video
    getVideoUrl: function getVideoUrl(itemSrc) {

      var youtubeUrl = this.getYoutubeUrl(itemSrc);
      var vimeoUrl = this.getVimeoUrl(itemSrc);
      var mp4Url = this.checkIsMp4(itemSrc);

      if(youtubeUrl) {
        return youtubeUrl
      }

      if(vimeoUrl) {
        return vimeoUrl
      }

      if(mp4Url) {
        return mp4Url
      }

      return false
    },
    
    // getYoutube ID
    getYoutubeID: function getYoutubeID(url) {

      // youtube data
      var youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      var ytId = (url.match(youtubeRegex)) ? RegExp.$1 : false;

      if(ytId) {
        return ytId
      }

      return false
    },

    // get youtube url
    getYoutubeUrl: function getYoutubeUrl(url) {

      // youtube data
      var ytId = this.getYoutubeID(url);

      // if is youtube video
      if(ytId) {

        // check if allows youtube cookies
        if(this.youtubeCookies) {
          return 'https://www.youtube.com/embed/'+ytId
        }

        return 'https://www.youtube-nocookie.com/embed/'+ytId
      }

      return false
    },

    // vimeo ID
    getVimeoID: function getVimeoID(url) {
      
      // if is vimeo video
      var result = url.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i);
      if(result !== null) {
        return result[1]
      }

      return false
    },

    // get vimeo url
    getVimeoUrl: function getVimeoUrl(url) {

      // if is vimeo video
      var result = url.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i);
      if(result !== null) {
        return '//player.vimeo.com/video/'+result[1]+'?hd=1&show_title=1&show_byline=1&show_portrait=0&fullscreen=1'
      }

      return false
    },

    // check if video is mp4
    checkIsMp4: function checkIsMp4(url) {
      if(this.imgIndex === null) {
        return false
      }

      var str = new String(url);
      if(
        (str.indexOf('.mp4') !== -1) || 
        (str.indexOf('.mov') !== -1) || 
        (str.indexOf('.webm') !== -1) || 
        (str.indexOf('.ogg') !== -1) || 
        (str.indexOf('.avi') !== -1)
      ) {
        return url
      }

      return false
    },

    // if is video get extension
    getVideoExt: function getVideoExt(url) {
      if(this.imgIndex === null) {
        return false
      }

      var str = new String(url);
      if(str.indexOf('.mp4') !== -1 || str.indexOf('.mov') !== -1){
        return 'mp4'
      }

      if(str.indexOf('.webm') !== -1) {
        return 'webm'
      }

      if(str.indexOf('.ogg') !== -1) {
        return 'ogg'
      }
      
      if(str.indexOf('.avi') !== -1) {
        return 'avi'
      }

      return false
    },

    // check if item is object
    checkIfIsObject: function checkIfIsObject(itemIndex) {
      var item = this.items[itemIndex];
      if(typeof item === 'object' && item !== null) {
        return true
      }
      return false;
    },

    // arrows and escape events
    eventListener: function eventListener(e) {
      switch (e.keyCode) {
        case 39:
          return this.onNextClick()
        case 37:
          return this.onPrevClick()
        case 38:
        case 40:
        case ' ':
          return e.preventDefault()
        case 27:
          return this.close()
      }
    },
  },

  computed: {
    
    // Images wrapper styles to use drag and zoom
    imgWrapperStyle: function imgWrapperStyle() {
      return {
        top: "50%",
        left: "50%",
        transition: this.transition,
      }
    },

    // lightbox styles
    lightboxStyles: function lightboxStyles() {
      return { 
        'z-index': this.zIndex,
        'background-color': this.overlayColor,
      }
    },

    innerStyles: function innerStyles() {
      return {
        'padding-bottom': this.paddingBottom+'px',
      }
    },

    // get item src
    itemSrc: function itemSrc() {
      if(this.imgIndex === null) {
        return false
      }

      var item = this.items[this.imgIndex];
      if(this.checkIfIsObject(this.imgIndex)) {
        return item[this.srcName]
      }

      return item
    },

    // Lightbox classes
    lightboxClasses: function lightboxClasses() {
      var classesReturn = [
        { 'cool-lightbox--can-zoom': this.canZoom && !this.disableZoom },
        { 'cool-lightbox--zoom-disabled': this.disableZoom},
        { 'cool-lightbox--is-zooming': this.isZooming },
        { 'cool-lightbox--show-thumbs': this.showThumbs },
        { 'cool-lightbox--is-swipping': this.isDraggingSwipe }
      ];

      var classString = 'cool-lightbox--thumbs-'+this.thumbsPosition;
      classesReturn.push(classString);

      return classesReturn
    },

    // Buttons classes
    buttonsClasses: function buttonsClasses() {
      return {
        'hidden': !this.buttonsVisible,
      }
    },

    // check if the slide has next element
    hasNextButton: function hasNextButton() {
      if(this.dir === 'rtl') {
        return (this.imgIndex - 1 >= 0)
      }
        
      return (this.imgIndex + 1 < this.items.length)
    },

    // check if the slide has previous element 
    hasPreviousButton: function hasPreviousButton() {
      if(this.dir === 'rtl') {
        return (this.imgIndex + 1 < this.items.length)
      }

      return (this.imgIndex - 1 >= 0)
    },

    // check if the slide has next element
    hasNext: function hasNext() {
      return (this.imgIndex + 1 < this.items.length)
    },

    // check if the slide has previous element 
    hasPrevious: function hasPrevious() {
      return (this.imgIndex - 1 >= 0)
    },
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"cool-lightbox-modal"}},[(_vm.isVisible)?_c('div',{ref:"coolLightbox",staticClass:"cool-lightbox",class:_vm.lightboxClasses,style:(_vm.lightboxStyles),on:{"click":_vm.closeModal}},[(_vm.gallery)?_c('div',{staticClass:"cool-lightbox-thumbs"},[_c('div',{staticClass:"cool-lightbox-thumbs__list"},_vm._l((_vm.items),function(item,itemIndex){return _c('button',{key:itemIndex,staticClass:"cool-lightbox__thumb",class:{ 
            active: itemIndex === _vm.imgIndex,
            'is-video': _vm.getMediaType(itemIndex) === 'video' 
          },attrs:{"type":"button"},on:{"click":function($event){_vm.imgIndex = itemIndex;}}},[(_vm.getMediaType(itemIndex) === 'video')?_c('svg',{staticClass:"cool-lightbox__thumb__icon",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M6.5 5.4v13.2l11-6.6z"}})]):_vm._e(),_vm._v(" "),_c('img',{attrs:{"src":_vm.itemThumb(_vm.getItemSrc(itemIndex), itemIndex),"alt":""}})])}),0)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"cool-lightbox__inner",style:(_vm.innerStyles),on:{"mousedown":_vm.startSwipe,"mousemove":_vm.continueSwipe,"mouseup":_vm.endSwipe,"touchstart":_vm.startSwipe,"touchmove":_vm.continueSwipe,"touchend":_vm.endSwipe}},[_c('div',{staticClass:"cool-lightbox__progressbar",style:(_vm.stylesInterval)}),_vm._v(" "),_c('div',{staticClass:"cool-lightbox__navigation"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:((_vm.hasPreviousButton || _vm.loopData) && _vm.items.length > 1),expression:"(hasPreviousButton || loopData) && items.length > 1"}],staticClass:"cool-lightbox-button cool-lightbox-button--prev",class:_vm.buttonsClasses,attrs:{"type":"button","title":"Previous"},on:{"click":_vm.onPrevClick}},[_vm._t("icon-previous",[_c('div',{staticClass:"cool-lightbox-button__icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"}})])])])],2),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:((_vm.hasNextButton || _vm.loopData) && _vm.items.length > 1),expression:"(hasNextButton || loopData) && items.length > 1"}],staticClass:"cool-lightbox-button cool-lightbox-button--next",class:_vm.buttonsClasses,attrs:{"type":"button","title":"Next"},on:{"click":function($event){return _vm.onNextClick(false)}}},[_vm._t("icon-next",[_c('div',{staticClass:"cool-lightbox-button__icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"}})])])])],2)]),_vm._v(" "),(_vm.effect === 'swipe')?_c('div',{staticClass:"cool-lightbox__wrapper cool-lightbox__wrapper--swipe",style:({
          transform: 'translate3d('+_vm.xSwipeWrapper+'px, '+_vm.ySwipeWrapper+'px, 0)',
          transition: _vm.swipeAnimation
        })},_vm._l((_vm.items),function(item,itemIndex){return _c('div',{key:itemIndex,ref:"items",refInFor:true,staticClass:"cool-lightbox__slide",class:{ 'cool-lightbox__slide--current': itemIndex === _vm.imgIndex }},[(_vm.getMediaType(itemIndex) === 'image')?_c('div',{directives:[{name:"lazyload",rawName:"v-lazyload"}],key:"image",staticClass:"cool-lightbox__slide__img",style:(_vm.imgWrapperStyle)},[(!_vm.isItemPicture(itemIndex))?_c('img',{key:itemIndex,attrs:{"data-src":_vm.getItemSrc(itemIndex),"data-srcset":_vm.getItemSrcSet(itemIndex),"data-sizes":_vm.getItemSizes(itemIndex),"draggable":"false","alt":_vm.getItemAlt(itemIndex)},on:{"load":_vm.imageLoaded,"click":function($event){return _vm.zoomImage(itemIndex)},"mousedown":function($event){return _vm.handleMouseDown($event)},"mouseup":function($event){return _vm.handleMouseUp($event)},"mousemove":function($event){return _vm.handleMouseMove($event)},"touchstart":function($event){return _vm.handleMouseDown($event)},"touchmove":function($event){return _vm.handleMouseMove($event)},"touchend":function($event){return _vm.handleMouseUp($event)}}}):_c('picture',{key:itemIndex},[_vm._l((_vm.getPictureSources(itemIndex)),function(source,sourceIndex){return _c('source',{key:("source-" + _vm.imgIndex + "-" + sourceIndex),attrs:{"data-srcset":source.srcset,"data-media":source.media,"type":source.type,"data-sizes":source.sizes || _vm.getItemSizes(_vm.imgIndex)}})}),_vm._v(" "),_c('img',{attrs:{"data-src":_vm.getItemSrc(itemIndex),"data-srcset":_vm.getItemSrcSet(itemIndex),"data-sizes":_vm.getItemSizes(itemIndex),"draggable":"false","alt":_vm.getItemAlt(itemIndex)},on:{"load":_vm.imageLoaded,"click":function($event){return _vm.zoomImage(itemIndex)},"mousedown":function($event){return _vm.handleMouseDown($event)},"mouseup":function($event){return _vm.handleMouseUp($event)},"mousemove":function($event){return _vm.handleMouseMove($event)},"touchstart":function($event){return _vm.handleMouseDown($event)},"touchmove":function($event){return _vm.handleMouseMove($event)},"touchend":function($event){return _vm.handleMouseUp($event)}}})],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.imageLoading),expression:"imageLoading"}],staticClass:"cool-lightbox-loading-wrapper"},[_vm._t("loading",[_c('div',{staticClass:"cool-lightbox-loading"})])],2)]):_c('div',{key:"video",staticClass:"cool-lightbox__iframe"},[((!_vm.checkIsMp4(_vm.getItemSrc(itemIndex)) && _vm.getMediaType(itemIndex) === 'video'))?_c('iframe',{directives:[{name:"autoplayObserver",rawName:"v-autoplayObserver"}],key:itemIndex,staticClass:"cool-lightbox-video",style:(_vm.aspectRatioVideo),attrs:{"data-autoplay":_vm.setAutoplay(itemIndex),"src":_vm.getVideoUrl(_vm.getItemSrc(itemIndex)),"frameborder":"0","allow":"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen":""}}):_vm._e(),_vm._v(" "),((_vm.getMediaType(itemIndex) === 'iframe') || (_vm.getPDFurl(_vm.getItemSrc(itemIndex))))?_c('iframe',{key:itemIndex,staticClass:"cool-lightbox-pdf",attrs:{"src":_vm.getItemSrc(itemIndex),"frameborder":"0","allowfullscreen":""}}):_vm._e(),_vm._v(" "),(_vm.checkIsMp4(_vm.getItemSrc(itemIndex)) || _vm.getMediaType(itemIndex) === 'webVideo')?_c('video',{directives:[{name:"autoplayObserver",rawName:"v-autoplayObserver"}],key:_vm.checkIsMp4(_vm.getItemSrc(itemIndex)),staticClass:"cool-lightbox-video",style:(_vm.aspectRatioVideo),attrs:{"data-autoplay":_vm.setAutoplay(itemIndex),"controls":"","controlslist":"nodownload","l":"","poster":""}},[_c('source',{attrs:{"src":_vm.checkIsMp4(_vm.getItemSrc(itemIndex)),"type":'video/'+(_vm.getVideoExt(_vm.getItemSrc(itemIndex)) ? _vm.getVideoExt(_vm.getItemSrc(itemIndex)) : _vm.getExtFromItem(itemIndex))}}),_vm._v("\n              Sorry, your browser doesn't support embedded videos\n            ")]):_vm._e()])])}),0):_vm._e(),_vm._v(" "),(_vm.effect === 'fade')?_c('div',{staticClass:"cool-lightbox__wrapper"},[_c('div',{ref:"items",staticClass:"cool-lightbox__slide cool-lightbox__slide--current"},[_c('transition',{attrs:{"name":"cool-lightbox-slide-change","mode":"out-in"}},[(_vm.getMediaType(_vm.imgIndex) === 'image')?_c('div',{key:"image",staticClass:"cool-lightbox__slide__img",style:(_vm.imgWrapperStyle)},[(!_vm.isItemPicture(_vm.imgIndex))?_c('transition',{attrs:{"name":"cool-lightbox-slide-change","mode":"out-in"}},[_c('img',{key:_vm.imgIndex,attrs:{"src":_vm.getItemSrc(_vm.imgIndex),"srcset":_vm.getItemSrcSet(_vm.imgIndex),"sizes":_vm.getItemSizes(_vm.imgIndex),"draggable":"false","alt":_vm.getItemAlt(_vm.imgIndex)},on:{"load":_vm.imageLoaded,"click":_vm.zoomImage,"mousedown":function($event){return _vm.handleMouseDown($event)},"mouseup":function($event){return _vm.handleMouseUp($event)},"mousemove":function($event){return _vm.handleMouseMove($event)}}})]):_c('transition',{attrs:{"name":"cool-lightbox-slide-change","mode":"out-in"}},[_c('picture',{key:_vm.imgIndex},[_vm._l((_vm.getPictureSources(_vm.imgIndex)),function(source,sourceIndex){return _c('source',{key:("source-" + _vm.imgIndex + "-" + sourceIndex),attrs:{"srcset":source.srcset,"type":source.type,"media":source.media,"sizes":source.sizes || _vm.getItemSizes(_vm.imgIndex)}})}),_vm._v(" "),_c('img',{attrs:{"src":_vm.getItemSrc(_vm.imgIndex),"srcset":_vm.getItemSrcSet(_vm.imgIndex),"sizes":_vm.getItemSizes(_vm.imgIndex),"draggable":"false","alt":_vm.getItemAlt(_vm.imgIndex)},on:{"load":_vm.imageLoaded,"click":function($event){return _vm.zoomImage(_vm.imgIndex)},"mousedown":function($event){return _vm.handleMouseDown($event)},"mouseup":function($event){return _vm.handleMouseUp($event)},"mousemove":function($event){return _vm.handleMouseMove($event)}}})],2)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.imageLoading),expression:"imageLoading"}],staticClass:"cool-lightbox-loading-wrapper"},[_vm._t("loading",[_c('div',{staticClass:"cool-lightbox-loading"})])],2)],1):_c('div',{key:"video",staticClass:"cool-lightbox__iframe"},[_c('transition',{attrs:{"name":"cool-lightbox-slide-change","mode":"out-in"}},[((!_vm.checkIsMp4(_vm.getItemSrc(_vm.imgIndex)) && _vm.getMediaType(_vm.imgIndex) === 'video'))?_c('iframe',{directives:[{name:"autoplayObserver",rawName:"v-autoplayObserver"}],key:_vm.getVideoUrl(_vm.getItemSrc(_vm.imgIndex)),staticClass:"cool-lightbox-video",style:(_vm.aspectRatioVideo),attrs:{"data-autoplay":_vm.setAutoplay(_vm.imgIndex),"src":_vm.getVideoUrl(_vm.getItemSrc(_vm.imgIndex)),"frameborder":"0","allow":"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen":""}}):_vm._e(),_vm._v(" "),((_vm.getMediaType(_vm.imgIndex) === 'iframe') || (_vm.getPDFurl(_vm.getItemSrc(_vm.imgIndex))))?_c('iframe',{key:_vm.imgIndex,staticClass:"cool-lightbox-pdf",attrs:{"src":_vm.getItemSrc(_vm.imgIndex),"frameborder":"0","allowfullscreen":""}}):_vm._e(),_vm._v(" "),(_vm.checkIsMp4(_vm.getItemSrc(_vm.imgIndex)) || _vm.getMediaType(_vm.imgIndex) === 'webVideo')?_c('video',{directives:[{name:"autoplayObserver",rawName:"v-autoplayObserver"}],key:_vm.checkIsMp4(_vm.getItemSrc(_vm.imgIndex)),staticClass:"cool-lightbox-video",style:(_vm.aspectRatioVideo),attrs:{"data-autoplay":_vm.setAutoplay(_vm.imgIndex),"controls":"","controlslist":"nodownload","poster":""}},[_c('source',{attrs:{"src":_vm.checkIsMp4(_vm.getItemSrc(_vm.imgIndex)),"type":'video/'+(_vm.getVideoExt(_vm.getItemSrc(_vm.imgIndex)) ? _vm.getVideoExt(_vm.getItemSrc(_vm.imgIndex)) : _vm.getExtFromItem(_vm.imgIndex))}}),_vm._v("\n                  Sorry, your browser doesn't support embedded videos\n                ")]):_vm._e()])],1)])],1)]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"cool-lightbox-modal"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.checkIfIsObject(_vm.imgIndex) && (_vm.items[_vm.imgIndex].title || _vm.items[_vm.imgIndex].description)),expression:"checkIfIsObject(imgIndex) && (items[imgIndex].title || items[imgIndex].description)"}],key:"caption-block",staticClass:"cool-lightbox-caption"},[_c('transition',{attrs:{"name":"cool-lightbox-slide-change","mode":"out-in"}},[(_vm.checkIfIsObject(_vm.imgIndex) && _vm.items[_vm.imgIndex].title)?_c('h6',{key:"title",domProps:{"innerHTML":_vm._s(_vm.items[_vm.imgIndex].title)}}):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"cool-lightbox-slide-change","mode":"out-in"}},[(_vm.checkIfIsObject(_vm.imgIndex) && _vm.items[_vm.imgIndex].description)?_c('p',{key:"description",domProps:{"innerHTML":_vm._s(_vm.items[_vm.imgIndex].description)}}):_vm._e()])],1)]),_vm._v(" "),_c('div',{staticClass:"cool-lightbox-toolbar",class:_vm.buttonsClasses},[(this.slideshow && _vm.items.length > 1)?_c('button',{staticClass:"cool-lightbox-toolbar__btn",attrs:{"type":"button","title":"Play slideshow"},on:{"click":_vm.togglePlaySlideshow}},[(!_vm.isPlayingSlideShow)?_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M6.5 5.4v13.2l11-6.6z"}})]):_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg"}},[_c('g',[_c('rect',{attrs:{"id":"svg_4","height":"11.97529","width":"11.728392","y":"6.030873","x":"6.259265","stroke-width":"1.5","stroke":"#000","fill":"#000000"}})])])]):_vm._e(),_vm._v(" "),(_vm.items.length > 1 && _vm.gallery)?_c('button',{staticClass:"cool-lightbox-toolbar__btn",attrs:{"type":"button","title":"Show thumbnails"},on:{"click":function($event){_vm.showThumbs = !_vm.showThumbs;}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 \n            0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 \n            0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 \n            0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"}})])]):_vm._e(),_vm._v(" "),(_vm.fullScreen)?_c('button',{staticClass:"cool-lightbox-toolbar__btn",attrs:{"type":"button","title":"Fullscreen"},on:{"click":_vm.toggleFullScreenMode}},[_c('svg',{attrs:{"width":"20px","height":"20px","viewBox":"0 0 18 18","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"}})])]):_vm._e(),_vm._v(" "),(_vm.showCloseButton)?_c('button',{staticClass:"cool-lightbox-toolbar__btn",attrs:{"type":"button","title":"Close"},on:{"click":_vm.close}},[_vm._t("close",[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"}})])])],2):_vm._e()])],1),_vm._v(" "),_c('transition',{attrs:{"name":"cool-lightbox-modal"}},[(_vm.isZooming && _vm.useZoomBar)?_c('div',{staticClass:"cool-lightbox-zoom"},[_c('svg',{staticClass:"cool-lightbox-zoom__icon",attrs:{"height":"469pt","viewBox":"0 -192 469.33333 469","width":"469pt","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"m437.332031.167969h-405.332031c-17.664062 \n          0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 \n          32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"}})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.zoomBar),expression:"zoomBar"}],attrs:{"type":"range","name":"points","min":"0","max":"50"},domProps:{"value":(_vm.zoomBar)},on:{"__r":function($event){_vm.zoomBar=$event.target.value;}}}),_vm._v(" "),_c('svg',{staticClass:"cool-lightbox-zoom__icon",attrs:{"height":"426.66667pt","viewBox":"0 0 426.66667 426.66667","width":"426.66667pt","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 \n          9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 \n          11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 \n          21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 \n          21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"}})])]):_vm._e()])],1):_vm._e()])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var CoolLightBox = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component("CoolLightBox", CoolLightBox);
}

var plugin = {
  install: install
};

var GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== "undefined") {
  GlobalVue = __webpack_require__.g.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

CoolLightBox.install = install;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoolLightBox);


/***/ }),

/***/ "./resources/js/components/app/AppAbout.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/app/AppAbout.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppAbout_vue_vue_type_template_id_20448905___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppAbout.vue?vue&type=template&id=20448905& */ "./resources/js/components/app/AppAbout.vue?vue&type=template&id=20448905&");
/* harmony import */ var _AppAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppAbout.vue?vue&type=script&lang=js& */ "./resources/js/components/app/AppAbout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AppAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppAbout_vue_vue_type_template_id_20448905___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppAbout_vue_vue_type_template_id_20448905___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app/AppAbout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app/AppAbout.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/app/AppAbout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppAbout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppAbout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/app/AppAbout.vue?vue&type=template&id=20448905&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/app/AppAbout.vue?vue&type=template&id=20448905& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAbout_vue_vue_type_template_id_20448905___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAbout_vue_vue_type_template_id_20448905___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAbout_vue_vue_type_template_id_20448905___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppAbout.vue?vue&type=template&id=20448905& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppAbout.vue?vue&type=template&id=20448905&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppAbout.vue?vue&type=template&id=20448905&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app/AppAbout.vue?vue&type=template&id=20448905& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("section", { staticClass: "about-section section-gap" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row justify-content-center align-items-center" },
            [
              _c(
                "div",
                {
                  staticClass: "col-lg-6 col-md-8 wow fadeInLeft",
                  attrs: { "data-wow-delay": "0.3s" }
                },
                [
                  _c("div", { staticClass: "about-thumb" }, [
                    _c("img", {
                      directives: [
                        {
                          name: "lazy",
                          rawName: "v-lazy",
                          value: "/uploads/" + _vm.sectionInfo.about_image,
                          expression: "`/uploads/${sectionInfo.about_image}`"
                        }
                      ]
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-lg-6 col-md-10 wow fadeInRight",
                  attrs: { "data-wow-delay": "0.3s" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "about-text-block pl-lg-5 mt-md-gap-60" },
                    [
                      _c("div", { staticClass: "section-title mb-40" }, [
                        _c("span", { staticClass: "title-tag" }, [
                          _vm._v(
                            _vm._s(_vm.sectionInfo.about_experince_yers) +
                              " - " +
                              _vm._s(_vm.$t("Years Of Experience"))
                          )
                        ]),
                        _vm._v(" "),
                        _c("h2", { staticClass: "title" }, [
                          _vm._v(_vm._s(_vm.sectionInfo.about_title))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-color-3" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.sectionInfo.about_text) +
                            "\n                        "
                        )
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "who-we-are-area pb-120" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            _vm._l(_vm.features, function(item, i) {
              return _c(
                "div",
                {
                  key: i,
                  staticClass: "col-lg-3 col-md-6 col-sm-6 wow fadeInLeft",
                  attrs: { "data-wow-delay": "0.3s" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "service-item-three text-center mt-30" },
                    [
                      _c("div", { staticClass: "icon" }, [
                        _c("i", { class: item.icon })
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "title" }, [
                        _vm._v(_vm._s(item.title))
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(item.text))])
                    ]
                  )
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "whu-section section-gap soft-blue-bg" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row justify-content-center align-content-center" },
            [
              _c("div", { staticClass: "col-lg-6 col-md-10 order-lg-2" }, [
                _c("div", { staticClass: "tile-gallery-two mb-md-gap-50" }, [
                  _c(
                    "div",
                    {
                      staticClass: "img-one wow fadeInRight",
                      attrs: { "data-wow-delay": "0.3s" }
                    },
                    [
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: "/uploads/" + _vm.sectionInfo.w_c_us_image1,
                            expression:
                              "`/uploads/${sectionInfo.w_c_us_image1}`"
                          }
                        ]
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "img-two text-right wow fadeInUp",
                      attrs: { "data-wow-delay": "0.5s" }
                    },
                    [
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: "/uploads/" + _vm.sectionInfo.w_c_us_image2,
                            expression:
                              "`/uploads/${sectionInfo.w_c_us_image2}`"
                          }
                        ]
                      })
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-md-10 order-lg-1" }, [
                _c(
                  "div",
                  {
                    staticClass: "section-title mb-50 wow fadeInUp",
                    attrs: { "data-wow-delay": "0.3s" }
                  },
                  [
                    _c("span", { staticClass: "title-tag" }, [
                      _vm._v(_vm._s(_vm.sectionInfo.w_c_us_sub_title))
                    ]),
                    _vm._v(" "),
                    _c("h2", { staticClass: "title" }, [
                      _vm._v(_vm._s(_vm.sectionInfo.w_c_us_title))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "feature-list" },
                  _vm._l(_vm.whayChooses, function(whayChoose, i) {
                    return _c(
                      "li",
                      {
                        key: i,
                        staticClass: "wow fadeInUp",
                        attrs: {
                          "data-wow-duration": ".5s",
                          "data-wow-delay": ".4s"
                        }
                      },
                      [
                        _c("h4", [_vm._v(_vm._s(whayChoose.title))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(whayChoose.text))])
                      ]
                    )
                  }),
                  0
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "feature-intro-video mt-100" }, [
            _c("img", {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy",
                  value: "/uploads/" + _vm.sectionInfo.video_bg_image,
                  expression: "`/uploads/${sectionInfo.video_bg_image}`"
                }
              ]
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "video-popup",
                on: {
                  click: function($event) {
                    _vm.index = 0
                  }
                }
              },
              [_c("i", { staticClass: "fal fa-play" })]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "about-history-area" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-6 col-md-8" }, [
              _c("div", { staticClass: "section-title text-center" }, [
                _c("h2", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.sectionInfo.our_history_title))
                ]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.sectionInfo.our_history_text))])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _vm._l(_vm.histories, function(history, i) {
                  return [
                    i % 2 == 0
                      ? _c(
                          "div",
                          { key: i, staticClass: "row justify-content-start" },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "history-item" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "history-thumb wow fadeInUp",
                                    attrs: {
                                      "data-wow-duration": ".8s",
                                      "data-wow-delay": ".1s"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: "/uploads/" + history.image,
                                          expression:
                                            "`/uploads/${history.image}`"
                                        }
                                      ]
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "history-content wow fadeInUp",
                                    attrs: {
                                      "data-wow-duration": ".8s",
                                      "data-wow-delay": ".1s"
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(history.date) +
                                          " - " +
                                          _vm._s(history.position)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("h4", { staticClass: "title" }, [
                                      _vm._v(_vm._s(history.title))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "number-box" }, [
                                  _c("span", [_vm._v(_vm._s(++i))])
                                ])
                              ])
                            ])
                          ]
                        )
                      : _c(
                          "div",
                          { key: i, staticClass: "row justify-content-end" },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "history-item history-item-2" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "history-thumb wow fadeInUp",
                                      attrs: {
                                        "data-wow-duration": ".8s",
                                        "data-wow-delay": ".1s"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value: "/uploads/" + history.image,
                                            expression:
                                              "`/uploads/${history.image}`"
                                          }
                                        ]
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "history-content wow fadeInUp",
                                      attrs: {
                                        "data-wow-duration": ".8s",
                                        "data-wow-delay": ".1s"
                                      }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(history.date) +
                                            " - " +
                                            _vm._s(history.position)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("h4", { staticClass: "title" }, [
                                        _vm._v(_vm._s(history.title))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "number-box" }, [
                                    _c("span", [_vm._v(_vm._s(++i))])
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                  ]
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("CoolLightBox", {
        attrs: { items: _vm.items, index: _vm.index, effect: "fade" },
        on: {
          close: function($event) {
            _vm.index = null
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./vue-cool-lightbox.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f830e852", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);