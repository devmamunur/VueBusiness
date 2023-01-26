<template>
  <div class="blog-area blog-details section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-right">
          <router-link :to="{ name: 'Blog' }" class="main-btn">{{
            $t("View All Blog")
          }}</router-link>
        </div>
        <div class="col-lg-12">
          <div v-if="blog.description" class="blog-dteails-content">
            <img v-lazy="`/uploads/${blog.image}`" alt="" />
            <div class="content">
              <h3 class="title">
                {{ blog.title }}
              </h3>
              <ul class="post-meta">
                <li><i class="fal fa-user"></i> {{ $t("By Admin") }}</li>
                <li>
                  <i class="fal fa-calendar-alt"></i
                  >{{ blog.created_at | timeFormat }}
                </li>
              </ul>
              <div>
                {{ blog.description }}
              </div>
              <div class="blog-details-bar mt-30">
                <div class="blog-social">
                  <h4 class="title">{{ $t("Social Share :") }}</h4>
                  <ShareNetwork
                    network="Facebook"
                    title="Facebook"
                    :url="this.$url + $route.fullPath"
                    hashtags="vuejs,vite"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </ShareNetwork>
                  <ShareNetwork
                    network="Twitter"
                    title="Twitter"
                    :url="this.$url + $route.fullPath"
                    hashtags="vuejs,vite"
                  >
                    <i class="fab fa-twitter"></i>
                  </ShareNetwork>
                  <ShareNetwork
                    network="LinkedIn"
                    title="LinkedIn"
                    :url="this.$url + $route.fullPath"
                    hashtags="vuejs,vite"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </ShareNetwork>
                  <ShareNetwork
                    network="Pinterest"
                    title="Pinterest"
                    :url="this.$url + $route.fullPath"
                    hashtags="vuejs,vite"
                  >
                    <i class="fab fa-pinterest"></i>
                  </ShareNetwork>
                  <ShareNetwork
                    network="WhatsApp"
                    title="WhatsApp"
                    :url="this.$url + $route.fullPath"
                    hashtags="vuejs,vite"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </ShareNetwork>
                </div>
              </div>
                <div class="mt-5">
                    <Disqus />
                </div>
            </div>
          </div>
          <el-skeleton v-else style="width: 100%">
            <template slot="template">
              <el-skeleton-item
                variant="image"
                style="width: 100%; height: 540px"
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
                  <el-skeleton-item variant="text" style="margin-right: 16px" />
                  <el-skeleton-item variant="text" style="width: 30%" />
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
Vue.prototype.$url = window.location.origin;
export default {
  methods: {
    getSingleBlog() {
      this.$store.dispatch("index/getSingleBlog", this.$route.params.slug);
    },
  },
  computed: {
    ...mapGetters({
      blog: "index/getSingleBlog",
    }),
  },
  created() {
    this.getSingleBlog();
  },
};
</script>



