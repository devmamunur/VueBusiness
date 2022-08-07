<template>
    <section
        class="banner-slider banner-slider-two banner-slider-active"
    >
        <template v-if="sliders[0]">
            <VueSlickCarousel v-bind="settings">
                <div v-for="(slider, i) in sliders"
                    :key="i"
                    class="single-banner" :style="{ 'background-image': `url(/uploads/${slider.background_image}` }">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-9">
                                <div class="banner-text">
                                    <div class="banner-content">
                                        <span class="title-tag">
                                            {{ slider.subtitle }}
                                        </span>
                                        <h1 class="title">
                                            {{ slider.title }}
                                        </h1>
                                        <p>
                                            {{ slider.text }}
                                        </p>
                                        <a class="main-btn rounded-btn icon-right small-size" :href="slider.button_link">
                                            {{ slider.button_text }} <i class="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
        </template>
    </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
    data() {
        return {
            loading: false,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        };
    },
    components: { VueSlickCarousel },
    created() {
        this.getSlider();
    },
    methods: {
        getSlider() {
            this.loading = true;
            this.$store.dispatch("index/getSlider").then(result => {
                this.loading = false;
            });
        }
    },
    computed: {
        sliders() {
            return this.$store.getters["index/getSlider"];
        }
    }
};
</script>

<style></style>
