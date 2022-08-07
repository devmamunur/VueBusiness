<template>
    <section class="whu-section section-gap soft-blue-bg">
        <div class="container">
            <div class="row justify-content-center align-content-center">
                <div class="col-lg-6 order-lg-2 col-md-9">
                    <div class="tile-gallery-two mb-md-gap-50">
                        <div class="img-one wow fadeInRight"  data-wow-delay="0.3s">
                            <img v-lazy="`/uploads/${sectionInfo.w_c_us_image1}`">
                        </div>
                        <div class="img-two text-right wow fadeInUp"  data-wow-delay="0.5s">
                            <img  v-lazy="`/uploads/${sectionInfo.w_c_us_image2}`">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-2 col-md-10">
                    <div class="section-title mb-50 wow fadeInUp"  data-wow-delay="0.3s">
                        <span class="title-tag">{{  sectionInfo.w_c_us_sub_title  }}</span>
                        <h2 class="title">{{  sectionInfo.w_c_us_title  }}</h2>
                    </div>
                    <ul class="feature-list">
                        <li v-for="(whyChoose, i) in whyChooses" :key="i" class="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".4s">
                            <h4>{{ whyChoose.title }}</h4>
                            <p>{{ whyChoose.text }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            getWhyChoose: "index/getWhyChoose"
        })
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            whyChooses : "index/getWhyChoose"
        })
    },
    created(){
        this.getWhyChoose();
    }
};
</script>



