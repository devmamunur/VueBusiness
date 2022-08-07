<template>
    <section class="portfolio-area portfolio-area-shape primary-bg section-gap">
        <div class="container">
            <div class="portfolio-top-title mb-60">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-6 col-md-8">
                        <div class="section-title white-color mb-md-gap-30">
                            <span class="title-tag">{{  sectionInfo.portfolio_sub_title  }}</span>
                            <h2 class="title">{{  sectionInfo.portfolio_title  }}</h2>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="portfolio-arrow"></div>
                    </div>
                </div>
            </div>
            <div class="portfolio-items row portfolio-arrow-top">
                <div class="col-lg-12" v-if="portfolios[0]">
                    <VueSlickCarousel v-bind="sliderSettings">
                        <div class="single-portfolio" v-for="(portfolio, i) in portfolios" :key="i">
                            <div class="portfolio-item">
                                <div class="portfolio-img" v-lazy:background-image="`/uploads/${portfolio.featured_image}`">
                                </div>
                                <div class="portfolio-content">
                                    <div class="item">
                                        <span class="category">{{ portfolio.service.title }}</span>
                                        <h5 class="title">
                                            {{ portfolio.title.length > 140 ? portfolio.title.substring(0, 140)+"..." : portfolio.title }}
                                        </h5>
                                    </div>
                                    <router-link :to="{ name: 'PortfolioDetails', params: { slug: portfolio.slug } }" class="portfolio-link"><i class="fal fa-long-arrow-right"></i></router-link>
                                </div>
                            </div>
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
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueSlickCarousel from "vue-slick-carousel";
export default {
    data() {
        return {
            sliderSettings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2500,
                centerPadding: '20px',
                infinite: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]

            }
        };
    },
    methods: {
        ...mapActions({
            getPortfolioSection: "index/getPortfolioSection"
        })
    },
    components: { VueSlickCarousel },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            portfolios : "index/getPortfolioSection"
        })
    },
    created(){
        this.getPortfolioSection();
    }
};
</script>



