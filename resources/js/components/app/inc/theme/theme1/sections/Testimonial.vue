<template>
  <section class="testimonials-section section-gap soft-blue-bg">
    <div class="container">
      <div class="section-title text-center mb-60">
        <span class="title-tag"
          >{{ sectionInfo.testimonial_subtitle }} asdf</span
        >
        <h2 class="title">{{ sectionInfo.testimonial_title }}</h2>
      </div>

      <div class="testimonials-slider" v-if="testimonials[0]">
        <div class="row">
          <div class="col-lg-12">
            <VueSlickCarousel v-bind="sliderSettings">
              <template v-for="(testimonial, i) in testimonials">
                <div :key="i" class="sengle-testi">
                  <div class="testimonial-box color-1s">
                    <p>
                      <span class="d-block">
                        <template v-for="star in Number(testimonial.rating)">
                        <i :key="star" class="fas fa-star"></i>
                        </template>
                      </span>
                      {{ testimonial.message }}
                    </p>
                    <div class="author d-flex align-items-center">
                      <div class="photo">
                        <img v-lazy="`/uploads/${testimonial.image}`" />
                      </div>
                      <div class="desc">
                        <h6>{{ testimonial.name }}</h6>
                        <span class="position">{{ testimonial.position }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
export default {
  data() {
    return {
      sliderSettings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        infinite: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions({
      getTestimonials: "index/getTestimonials",
    }),
  },
  components: { VueSlickCarousel },
  computed: {
    ...mapGetters({
      sectionInfo: "index/getSectionInfo",
      testimonials: "index/getTestimonials",
    }),
  },
  created() {
    this.getTestimonials();
  },
};
</script>



