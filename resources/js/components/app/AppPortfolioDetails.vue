<template>
 <div class="service-details-page section-gap">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="service-details-content">
                    <template v-if="portfolioImages.length > 0">
                        <div class="portfolio-details-slider">
                            <VueSlickCarousel v-bind="sliderSettings">
                                <div class="image" v-for="(portfolioImage, i) in portfolioImages" :key="i">
                                    <img v-lazy="`/uploads/${portfolioImage.image}`" alt="">
                                </div>
                                <template #prevArrow>
                                    <div class="custom-arrow">
                                        <i class="fal fa-angle-left"></i>
                                    </div>
                                </template>
                                <template #nextArrow>
                                    <div class="custom-arrow">
                                        <i class="fal fa-angle-right"></i>
                                    </div>
                                </template>
                            </VueSlickCarousel>
                        </div>
                    </template>
                    <template v-else>
                        <div class="img">
                            <img  v-lazy="`/uploads/${portfolio.featured_image}`" alt="">
                        </div>
                    </template>
                    <div class="content">
                      {{ portfolio.content }}
                    </div>
                  </div>
            </div>
            <div class="col-lg-4 blog-sidebar order-first order-lg-last">
                <div class="case-live">
                    <div class="case-live-item-area ">
                        <div class="case-live-item">
                            <h5 class="title">{{ $t('Sweet Client') }}</h5>
                            <span v-if="portfolio.client_name">{{ portfolio.client_name }}</span>
                            <i class="fal fa-user"></i>
                        </div>
                        <div class="case-live-item">
                            <h5 class="title">{{ $t('Start Date') }}</h5>
                            <span v-if="portfolio.start_date">{{ portfolio.start_date }}</span>
                            <i class="fal fa-calendar-alt"></i>
                        </div>
                        <div class="case-live-item">
                            <h5 class="title">{{ $t('Submit Date') }}</h5>
                            <span v-if="portfolio.submission_date">{{ portfolio.submission_date }}</span>
                            <i class="fal fa-calendar-alt"></i>
                        </div>
                        <div class="case-live-item">
                            <h5 class="title">{{ $t('Category') }}</h5>
                            <span v-if="portfolio.service">{{ portfolio.service.title }}</span>
                            <i class="fal fa-tags"></i>
                        </div>
                    </div>
                    <div class="case-live-btn text-center" v-if="portfolio.link">
                        <a class="main-btn" :href="portfolio.link">{{ $t('Live Preview') }}</a>
                    </div>
                </div>
                <div class="widget social-links mt-30">
                    <h4 class="widget-title">{{ $t('Never Miss News') }}</h4>
                    <ul>
                        <li v-for="(socialLink, i) in socialLinks" :key="i">
                            <a :href="socialLink.url"><i :class="socialLink.icon"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="side-bar-contact mt-30" v-lazy:background-image="`/uploads/${sectionInfo.meeet_us_bg_image}`">
                    <div class="overlay"></div>
                    <div class="content">
                        <h3>{{ $t('Make a call for any type query.') }}</h3>
                            <i class="fas fa-headset"></i>
                        <h4 class="call" v-if="setting.number">
                            <a class="d-block" :href="`tel:${JSON.parse(setting.number)[0]}`">
                                {{ JSON.parse(setting.number)[0] }}
                            </a>
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

</template>

<script>

import { mapGetters } from 'vuex'
import VueSlickCarousel from "vue-slick-carousel";
export default {
    data() {
        return {
            sliderSettings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        };
    },
    components: { VueSlickCarousel },
    methods: {
        getSinglePortfolio() {
            this.$store.dispatch("index/getSinglePortfolio", this.$route.params.slug);
        },
        getSinglePortfolioImages() {
            this.$store.dispatch("index/getSinglePortfolioImages", this.$route.params.slug);
        },
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            setting : "index/getSetting",
            socialLinks : "index/getSocialLinks",
            portfolio : "index/getSinglePortfolio",
            portfolioImages : "index/getSinglePortfolioImages",
        })
    },
    created(){
        this.getSinglePortfolio();
        this.getSinglePortfolioImages();
    }
};
</script>



