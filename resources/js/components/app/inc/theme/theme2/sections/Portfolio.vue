<template>
   <section class="portfolio-area soft-blue-bg section-gap">
        <div class="container">
            <div class="section-title text-center mb-30 wow fadeInUp">
                <span class="title-tag">{{  sectionInfo.portfolio_sub_title  }}</span>
                <h2 class="title">{{  sectionInfo.portfolio_title  }}</h2>
            </div>
            <div class="portfolio-items row">
                <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" v-for="(portfolio, i) in portfolios" :key="i">
                    <div class="portfolio-item mt-30">
                            <div class="portfolio-img" v-lazy:background-image="`/uploads/${portfolio.featured_image}`">
                            </div>
                        <div class="portfolio-content">
                            <div class="item">
                                <span class="category">{{ portfolio.service.title }}</span>
                                <h5 class="title">{{ portfolio.service.title }}</h5>
                            </div>
                            <router-link :to="{name: 'PortfolioDetails', params: { slug: portfolio.slug } }" class="portfolio-link"><i class="fal fa-long-arrow-right"></i></router-link>
                        </div>
                    </div>
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



