<template>
    <div>
        <div class="myPreloader" v-if="$store.state.index.loading">
            <div class="spinner"></div>
        </div>
        <ThemeOne v-if="setting.theme_version == 1"></ThemeOne>
        <ThemeTwo v-if="setting.theme_version == 2"></ThemeTwo>
        <ThemeThree v-if="setting.theme_version == 3"></ThemeThree>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ThemeOne from './inc/theme/theme1/Index'
import ThemeTwo from './inc/theme/theme2/Index'
import ThemeThree from './inc/theme/theme3/Index'
export default {
  name: "AppHome",
   data() {
        return {
            loading: false,
            theme_version: "",
        };
    },
    components : {
        ThemeOne,
        ThemeTwo,
        ThemeThree
    },
    computed: {
        ...mapGetters({
            setting : "index/getSetting"
        })
    },
    mounted (){
        this.$store.dispatch('index/getLoading', false);
    }
};
</script>
