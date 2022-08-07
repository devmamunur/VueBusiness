<template>
      <div class="pricing-section section-gap">
        <div class="container">
            <div class="row">
                <div v-for="(packageItem, i) in packages" :key="i" class="col-lg-4 col-md-6 col-sm-8 mt-30">
                    <div class="pricing-plan-item text-center">
                        <b class="plan-name">{{ packageItem.title }}</b>
                        <h3 class="price">{{ $t('$') }} <span>{{ packageItem.price }}</span></h3>
                        <span v-if="packageItem.time" class="plan-duration">{{ packageItem.time }}</span>
                        <span class="bar"></span>
                        <ul class="list" v-if="packageItem.feature">
                            <li v-for="(featureItem, i) in JSON.parse(packageItem.feature)" :key="i">
                                <p>{{ featureItem }}</p>
                            </li>
                        </ul>
                        <router-link :to="{name : 'Contact'}" class="plans-btn" href="#">{{ $t('Contact Us') }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            getPackages: "index/getPackages"
        })
    },
    computed: {
        ...mapGetters({
            packages : "index/getPackages"
        })
    },
    created(){
        this.getPackages();
    }
};
</script>



