<template>
    <div v-if="$route.name == 'Home'">
        <template v-if="setting.theme_version == 1">
            <Menu1></Menu1>
        </template>
        <template v-if="setting.theme_version == 2">
            <Menu1></Menu1>
        </template>
        <template v-if="setting.theme_version == 3">
            <Menu3></Menu3>
        </template>
        <template v-if="setting.theme_version == 4">
            <Menu1></Menu1>
        </template>
        <template v-if="setting.theme_version == 5">
            <Menu2></Menu2>
        </template>
         <template v-if="setting.theme_version == 6">
            <Menu2></Menu2>
        </template>
    </div>
    <div v-else>
        <Menu2></Menu2>
    </div>
</template>

<script>
import Menu1 from './menu/Menu1'
import Menu2 from './menu/Menu2'
import Menu3 from './menu/Menu3'
import { mapGetters } from 'vuex'
export default {
    name : "AppHeader",
    components : {
        Menu1,
        Menu2,
        Menu3
    },
    computed: {
        ...mapGetters({
            setting : "index/getSetting"
        })
    }
}
</script>
