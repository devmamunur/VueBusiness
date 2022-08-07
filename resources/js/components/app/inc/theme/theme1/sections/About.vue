<template>
  <div>
    <div class="about-section section-gap home5">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-lg-6 col-md-12 order-2 order-lg-1 wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            <div class="about-thumb mt-30">
              <img v-lazy="`/uploads/${sectionInfo.about_image}`" />
            </div>
            <!-- about thumb -->
          </div>
          <div
            class="col-lg-6 col-md-12 wow fadeInRight order-1 order-lg-2"
            data-wow-delay="0.3s"
          >
            <div class="about-text-block pl-lg-5 mt-md-gap-60">
              <div class="section-title mb-40">
                <span class="title-tag">{{ sectionInfo.about_sub_title }}</span>
                <h3 class="title">{{ sectionInfo.about_title }}</h3>
              </div>
              <p class="text-color-3">
                {{
                  sectionInfo.about_text && sectionInfo.about_text.length > 280
                    ? sectionInfo.about_text.substring(0, 280) + "..."
                    : sectionInfo.about_text
                }}
              </p>
              <div class="about-experience pb-40 pt-20">
                <h3>{{ sectionInfo.about_experince_yers }}</h3>
                <span>{{ $t("Years Of Experience") }}</span>
              </div>
              <ul class="about-btns">
                <li>
                  <router-link :to="{ name: 'About' }" class="main-btn">{{ $t("Learn More") }}</router-link>
                </li>
                <li>
                  <span class="main-btn main-btn-2" @click="index = 0"
                    ><i class="fal fa-video"></i> {{ $t("Intro Video") }}</span
                  >
                </li>
              </ul>
            </div>
            <!-- about item -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>

    <section class="service-section section-gap-bottom">
      <div class="container">
        <div class="row service-items">
          <div
            v-for="(item, i) in features"
            :key="i"
            class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="service-item text-center mt-30">
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

    <CoolLightBox
      :items="items"
      :index="index"
      :effect="'fade'"
      @close="index = null"
    >
    </CoolLightBox>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  data() {
    return {
      imageList: [],
      loading: true,
      items: [
        {
          src: null,
        },
      ],
      index: null,
    };
  },
  components: {
    CoolLightBox,
  },
  methods: {
    ...mapActions({
      getFeatures: "index/getFeatures",
    }),
  },
  computed: {
    ...mapGetters({
      sectionInfo: "index/getSectionInfo",
      features: "index/getFeatures",
    }),
  },
  watch: {
    sectionInfo() {
      this.items[0].src = this.sectionInfo.about_intro_video;
    },
  },
  created() {
    this.getFeatures();
    this.items[0].src = this.sectionInfo.about_intro_video;
  },
};
</script>



