<template>
    <div class="page-title-area" v-lazy:background-image="`/uploads/${setting.breadcrumb_image}`">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-item text-center">
                        <h2 class="title" v-if="$route.name">
                            {{ $t($route.name.replace(/([A-Z])/g, ' $1').trim()) }}
                        </h2>
                        <ul class="breadcrumb-nav">
                            <li class="">
                                <router-link :to="{ name: 'Home' }" >{{ $t('Home') }}</router-link>
                            </li>
                            <li class="active" aria-current="page" v-if="$route.name">
                                {{ $t($route.name.replace(/([A-Z])/g, ' $1').trim()) }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props : ['title'],
    computed: {
        ...mapGetters({
            setting : "index/getSetting"
        })
    }
}
</script>
