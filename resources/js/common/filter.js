import Vue from 'vue'

import moment from 'moment'

Vue.filter('timeFormat', (arg)=>{
    return moment().format("MMM Do YYYY");
});