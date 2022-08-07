<template>
  <section class="banner-slider banner-slider-one">
    <template v-if="sliders[0]">
      <VueSlickCarousel v-bind="sliderSettings">
        <div
          class="single-banner bg-cover"
          v-for="(slider, i) in sliders"
          :key="i"
          v-lazy:background-image="`/uploads/${slider.background_image}`"
        >
          <div class="container-fluid container-1470">
            <div class="row align-items-center">
              <div class="col-lg-7">
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
                    <a
                      class="main-btn rounded-btn icon-right small-size"
                      :href="slider.button_link"
                    >
                      {{ slider.button_text }}
                      <i class="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 d-none d-lg-block">
                <div class="banner-img">
                  <img v-lazy="`/uploads/${slider.image}`" alt="Banner" />
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
import { mapGetters, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
export default {
  data() {
    return {
      sliderSettings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  components: { VueSlickCarousel },
  created() {
    this.getSlider();
  },
  methods: {
    ...mapActions({
      getSlider: "index/getSlider",
    }),
  },
  computed: {
    ...mapGetters({
      sliders: "index/getSlider",
    }),
  },
};
</script>

<style></style>
