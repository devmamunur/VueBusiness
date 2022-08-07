<template>
    <div>
        <section v-if="visibility.is_about_about" class="about-section section-gap">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-8" data-wow-delay="0.3s">
                        <div class="about-thumb">
                            <img v-lazy="`/uploads/${sectionInfo.about_image}`">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-10 wow fadeInRight" data-wow-delay="0.3s">
                        <div class="about-text-block pl-lg-5 mt-md-gap-60">
                            <div class="section-title mb-40">
                                <span class="title-tag">{{  sectionInfo.about_experince_yers }} - {{ $t('Years Of Experience') }}</span>
                                <h2 class="title">{{ sectionInfo.about_title }}</h2>
                            </div>
                            <p class="text-color-3">
                                {{ sectionInfo.about_text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section  v-if="visibility.is_about_featured_work" class="who-we-are-area pb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div v-for="(item, i) in features" :key="i" class="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft"  data-wow-delay="0.3s">
                        <div class="service-item-three text-center mt-30">
                            <div class="icon">
                                <i :class="item.icon"></i>
                            </div>
                            <h5 class="title">{{ item.title }}</h5>
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section  v-if="visibility.is_about_choose_us" class="whu-section section-gap soft-blue-bg">
            <div class="container">
                <div class="row justify-content-center align-content-center">
                    <div class="col-lg-6 col-md-10 order-lg-2">
                        <div class="tile-gallery-two mb-md-gap-50">
                            <div class="img-one wow fadeInRight"  data-wow-delay="0.3s">
                                <img v-lazy="`/uploads/${sectionInfo.w_c_us_image1}`">
                            </div>
                            <div class="img-two text-right wow fadeInUp"  data-wow-delay="0.5s">
                                <img v-lazy="`/uploads/${sectionInfo.w_c_us_image2}`">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-10 order-lg-1">
                        <div class="section-title mb-50 wow fadeInUp"  data-wow-delay="0.3s">
                            <span class="title-tag">{{  sectionInfo.w_c_us_sub_title  }}</span>
                            <h2 class="title">{{  sectionInfo.w_c_us_title  }}</h2>
                        </div>
                        <ul class="feature-list">
                            <li v-for="(whayChoose, i) in whayChooses" :key="i" class="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".4s">
                                <h4>{{ whayChoose.title }}</h4>
                                <p>{{ whayChoose.text }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="feature-intro-video mt-100">
                    <img v-lazy="`/uploads/${sectionInfo.video_bg_image}`">
                    <span @click="index = 0" class="video-popup"><i class="fal fa-play"></i></span>
                </div>
            </div>
        </section>

        <div  v-if="visibility.is_about_history" class="about-history-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="section-title text-center">
                            <h2 class="title">{{  sectionInfo.our_history_title }}</h2>
                            <p>{{  sectionInfo.our_history_text }}</p>
                        </div> <!-- section title -->
                    </div>
                </div> <!-- row -->
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <template v-for="(history, i) in histories">
                            <div v-if="i % 2 == 0" :key="i" class="row justify-content-start">
                                <div class="col-md-6">
                                    <div class="history-item">
                                        <div class="history-thumb wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                                            <img v-lazy="`/uploads/${history.image}`">
                                        </div>
                                        <div class="history-content wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                                            <span>{{ history.date }} - {{ history.position }}</span>
                                            <h4 class="title">{{ history.title }}</h4>
                                        </div>
                                        <div class="number-box">
                                            <span>{{ ++i }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else :key="i" class="row justify-content-end">
                                <div class="col-md-6">
                                    <div class="history-item history-item-2">
                                        <div class="history-thumb wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                                            <img v-lazy="`/uploads/${history.image}`">
                                        </div>
                                        <div class="history-content wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                                            <span>{{ history.date }} - {{ history.position }}</span>
                                            <h4 class="title">{{ history.title }}</h4>
                                        </div>
                                        <div class="number-box">
                                            <span>{{ ++i }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>

                </div> <!-- row -->
            </div> <!-- container -->
        </div>

        <CoolLightBox
        :items="items"
        :index="index"
        :effect="'fade'"
        @close="index = null">
        </CoolLightBox>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css"
export default {
    data() {
      return {
        imageList: [],
        loading: true,
        items: [
            {
                src: null,
            }
      ],
      index: null
      };
    },
    components: {
        CoolLightBox
    },
    methods: {
        ...mapActions({
            getFeatures: "index/getFeatures",
            getWhayChooses: "index/getWhayChooses",
            getHistories: "index/getHistories"
        })
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            features : "index/getFeatures",
            whayChooses : "index/getWhayChooses",
            histories : "index/getHistories",
            visibility: "index/getVisibility",
        })
    },
    watch: {
        sectionInfo() {
            this.items[0].src = this.sectionInfo.about_intro_video;
        }
    },
    created(){
        this.getFeatures();
        this.getWhayChooses();
        this.getHistories();
        this.items[0].src = this.sectionInfo.about_intro_video;
    }
};
</script>



