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
              </ul>
            </div>
            <!-- about item -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      sectionInfo: "index/getSectionInfo"
    }),
  }
};
</script>



