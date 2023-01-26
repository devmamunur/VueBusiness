require('./bootstrap');

window.Vue = require('vue').default;


import router from './app/router'

import {store} from './common/store/store'

Vue.component('app-master', require('./components/app/AppMaster.vue').default);

import i18n from './locales/appLocal'

import library from './common/library'

import VueLazyload from 'vue-lazyload';

import VueDisqus from 'vue-disqus'



import NProgress from 'nprogress'


NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })
  router.afterEach(() => {
    NProgress.done()
  })


Vue.use(VueDisqus, {
    shortname: 'vuebusiness'
})

Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
})

const app = new Vue({
    el: '#app',
    router,
    store,
    i18n
});
