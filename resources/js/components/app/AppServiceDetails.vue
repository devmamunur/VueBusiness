<template>
  <section class="service-details-page section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="service-details-content">
            <div class="img">
              <img v-lazy="`/uploads/${service.image}`" />
            </div>
            <div class="content">
              {{ service.content }}
            </div>
          </div>
        </div>
        <div class="col-lg-4 blog-sidebar order-first order-lg-last">
          <div class="widget categories-widget">
            <h4 class="widget-title">{{ $t("All Services") }}</h4>

            <ul>
              <li v-for="(service, i) in services" :key="i">
                <a
                  href="#"
                  @click.prevent="selectCategory(service.slug)"
                  :class="$route.params.slug == service.slug ? 'active' : ''"
                  >{{ service.title }}</a
                >
              </li>
            </ul>
          </div>
          <div class="widget social-links">
            <h4 class="widget-title">{{ $t("Never Miss News") }}</h4>
            <ul>
              <li v-for="(socialLink, i) in socialLinks" :key="i">
                <a :href="socialLink.url"><i :class="socialLink.icon"></i></a>
              </li>
            </ul>
          </div>
          <div
            class="side-bar-contact mt-30"
            v-lazy:background-image="
              `/uploads/${sectionInfo.meeet_us_bg_image}`
            "
          >
            <div class="overlay"></div>
            <div class="content">
              <h3>{{ $t("Make a call for any type query.") }}</h3>
              <i class="fas fa-headset"></i>
              <h4 class="call" v-if="setting.number">
                <a
                  class="d-block"
                  :href="`tel:${JSON.parse(setting.number)[0]}`"
                >
                  {{ JSON.parse(setting.number)[0] }}
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      number: [],
    };
  },
  methods: {
    getSingleService() {
      this.$store.dispatch("index/getSingleService", this.$route.params.slug);
    },
    ...mapActions({
      getServices: "index/getServices",
    }),
    selectCategory(category) {
      this.$store.dispatch("index/getSingleService", category);
      this.$router.push({ name: "ServiceDetails", params: { slug: category } });
    },
  },
  computed: {
    ...mapGetters({
      services: "index/getServices",
      service: "index/getSingleService",
      sectionInfo: "index/getSectionInfo",
      setting: "index/getSetting",
      socialLinks: "index/getSocialLinks",
    }),
  },
  created() {
    this.getSingleService();
    this.getServices();
  },
};
</script>



