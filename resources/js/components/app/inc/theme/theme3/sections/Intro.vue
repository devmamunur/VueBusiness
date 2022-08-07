<template>
  <div>
    <section
      class="intro-video-area"
      v-lazy:background-image="`/uploads/${sectionInfo.video_bg_image}`"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 col-md-10 wow fadeInLeft" data-wow-delay="0.3s">
            <div class="intro-video-content">
              <span>{{ sectionInfo.video_sub_title }}</span>
              <h2 class="title">{{ sectionInfo.video_title }}</h2>
              <p class="text-1">{{ sectionInfo.video_text }}</p>
              <p class="text-2">{{ sectionInfo.video_content }}</p>

              <a class="main-btn" href="#">{{ $t("Learn More") }}</a>
            </div>
          </div>
          <div class="col-lg-6 col-md-10 wow fadeInRight" data-wow-delay="0.3s">
            <div class="intro-thumb mt-md-gap-60">
              <img :src="`/uploads/${sectionInfo.video_image}`" alt="" />
              <span @click="index = 0" class="video-popup"
                ><i class="fas fa-play"></i
              ></span>
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
import { mapGetters } from "vuex";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  data() {
    return {
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
  computed: {
    ...mapGetters({
      sectionInfo: "index/getSectionInfo",
    }),
  },
  watch: {
    sectionInfo() {
      this.items[0].src = this.sectionInfo.about_intro_video;
    },
  },
  created() {
    this.items[0].src = this.sectionInfo.about_intro_video;
  },
};
</script>

<style>
</style>