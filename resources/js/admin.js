
require('./bootstrap');

window.Vue = require('vue').default;

import router from './admin/router'
import {store} from './common/store/store'

Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);

import library from './common/library'

import i18n from './locales/adminLocal'


const admin = new Vue({
    el: '#admin',
    router,
    store,
    i18n
});

