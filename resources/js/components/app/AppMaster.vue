<template>
    <div id="app_master">
            <app-header></app-header>
            <Breadcrumb v-if="$route.name !='Home'"></Breadcrumb>
            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>
            <app-footer></app-footer>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from './inc/AppHeader'
import AppFooter from './inc/AppFooter'
import Breadcrumb from './inc/Breadcrumb'
export default {
    name : "AppMaster",
    components : {
        AppHeader,
        AppFooter,
        Breadcrumb
    },
    methods: {
        ...mapActions({
            getSetting : "index/getSetting",
            getSectionInfo : "index/getSectionInfo",
            getSocialLinks : "index/getSocialLinks",
            getVisibility : "index/getVisibility",
        })
    },
    created (){

        this.getSetting();
        this.getSectionInfo();
        this.getSocialLinks();
        this.getVisibility();
    }
}
</script>

<style>

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>