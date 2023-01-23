<template>
  <div class="blog-area portfolio-page section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row blog-grid-items">
            <template v-if="portfolios.data.length > 0">
              <div
                v-for="(item, i) in portfolios.data"
                :key="i"
                class="col-lg-6"
              >
                <router-link
                  :to="{
                    name: 'PortfolioDetails',
                    params: { slug: item.slug },
                  }"
                  class="single-blog-grid mb-30"
                >
                  <div
                    class="img"
                    v-lazy:background-image="`/uploads/${item.featured_image}`"
                  ></div>
                  <span class="cat">{{ item.service.title }}</span>
                  <div class="blog-grid-overlay">
                    <h5 class="title">{{ item.title }}</h5>
                  </div>
                </router-link>
              </div>
            </template>
            <template v-else>
              <div v-for="(l, i) in 6" :key="i" class="col-lg-6 mb-30">
                <el-skeleton style="width: 100%">
                  <template slot="template">
                    <el-skeleton-item
                      variant="image"
                      style="width: 100%; height: 240px"
                    />
                    <div style="padding: 14px">
                      <el-skeleton-item variant="p" style="width: 50%" />
                      <div
                        style="
                          display: flex;
                          align-items: center;
                          justify-items: space-between;
                        "
                      >
                        <el-skeleton-item
                          variant="text"
                          style="margin-right: 16px"
                        />
                        <el-skeleton-item variant="text" style="width: 30%" />
                      </div>
                    </div>
                  </template>
                </el-skeleton>
              </div>
            </template>
          </div>
          <template v-if="portfolios.meta">
            <div class="row" v-if="portfolios.meta.total > 8">
              <div class="col-lg-12 text-center">
                <el-pagination
                  class="text-center mt-4"
                  background
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="portfolios.meta.per_page"
                  layout="prev, pager, next"
                  :total="portfolios.meta.total"
                >
                </el-pagination>
              </div>
            </div>
          </template>
        </div>
        <div class="col-lg-4 blog-sidebar order-first order-lg-last">
          <div class="widget categories-widget">
            <h4 class="widget-title">{{ $t("All Categories") }}</h4>
            <ul>
              <li>
                <a
                  @click.prevent="resortAllPortfolio"
                  :class="currentService == '' ? 'active' : ''"
                  href="#"
                  class=""
                  >{{ $t("All") }}
                </a>
              </li>
              <li v-for="(service, i) in services" :key="i">
                <a
                  href="#"
                  :class="currentService == service.slug ? 'active' : ''"
                  @click.prevent="portfolioByCategory(service.slug)"
                  class=""
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
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      currentPage: 1,
      currentService: "",
      number: [],
    };
  },
  methods: {
    ...mapActions({
      getServices: "index/getServices",
    }),
    getPortfolios() {
      this.$store.dispatch("index/getPortfolios", {
        page: this.currentPage,
        category: this.currentService,
      });
    },
    handleCurrentChange() {
      this.$store.dispatch("index/getPortfolios", {
        page: this.currentPage,
        category: this.currentService,
      });
    },
    portfolioByCategory(service) {
      this.currentService = service;
      this.currentPage = 1;
      this.$store.dispatch("index/getPortfolios", {
        page: this.currentPage,
        category: this.currentService,
      });
    },
    resortAllPortfolio() {
      this.currentPage = 1;
      this.currentService = "";
      this.$store.dispatch("index/getPortfolios", {
        page: this.currentPage,
        category: this.currentService,
      });
    },
  },
  computed: {
    ...mapGetters({
      portfolios: "index/getPortfolios",
      services: "index/getServices",
      socialLinks: "index/getSocialLinks",
      sectionInfo: "index/getSectionInfo",
      setting: "index/getSetting",
    }),
  },
  created() {
    this.getPortfolios();
    this.getServices();
  },
};
</script>



