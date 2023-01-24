<template>
  <div class="blog-area portfolio-page section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row justify-content-center">
            <template v-if="blogs.data[0]">
              <div
                v-for="(blog, i) in blogs.data"
                :key="i"
                class="col-md-6 about-contnent wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div class="latest-news-box mt-30">
                  <div class="post-thumb">
                    <img v-lazy="`/uploads/${blog.image}`" />
                  </div>
                  <div class="post-content">
                    <ul class="post-meta">
                      <li>
                        <span>{{ $t("By Admin") }},</span>
                      </li>
                      <li>
                        <span>{{ blog.created_at | timeFormat }}</span>
                      </li>
                    </ul>
                    <h4 class="title">
                      <router-link
                        router-link
                        :to="{
                          name: 'BlogDetails',
                          params: { slug: blog.slug },
                        }"
                      >
                        {{
                          blog.title && blog.title.length > 40
                            ? blog.title.substring(0, 40) + "..."
                            : blog.title
                        }}
                      </router-link>
                    </h4>
                    <router-link
                      router-link
                      :to="{ name: 'BlogDetails', params: { slug: blog.slug } }"
                      class="read-more-btn"
                      >{{ $t("Read More") }}
                      <i class="fal fa-long-arrow-right"></i
                    ></router-link>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div v-for="(l, i) in 6" :key="i" class="col-md-6 mb-30">
                <el-skeleton style="width: 100%">
                  <template slot="template">
                    <el-skeleton-item
                      variant="image"
                      style="width: 100%; height: 240px"
                    />
                    <div style="padding: 14px">
                      <el-skeleton-item variant="p" style="width: 50%" />
                      <div
                        style="display: flex;
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
          <template v-if="blogs.meta">
            <div class="row" v-if="blogs.meta.total > 6">
              <div class="col-lg-12 text-center" v-if="blogs.meta">
                <el-pagination
                  class="text-center mt-4"
                  background
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="blogs.meta.per_page"
                  layout="prev, pager, next"
                  :total="blogs.meta.total"
                >
                </el-pagination>
              </div>
            </div>
          </template>
        </div>
        <div class="col-lg-4 blog-sidebar order-first order-lg-last">
          <div class="widget search-widget">
            <h4 class="widget-title">{{ $t("Search Blog") }}</h4>
            <div class="input-box">
              <input
                name="term"
                type="text"
                :placeholder="`${$t('Search Blog...')}`"
                value=""
                v-model="blogSearchText"
                @keyup="blogBySearch"
              />
            </div>
          </div>
          <div class="widget categories-widget">
            <h4 class="widget-title">{{ $t("All Categories") }}</h4>
            <ul>
              <li>
                <a
                  @click.prevent="resortAllBlog"
                  :class="currentBcategory == '' ? 'active' : ''"
                  href="#"
                  class=""
                  >{{ $t("All") }}
                </a>
              </li>
              <li v-for="(bcategory, i) in bcategories" :key="i">
                <a
                  href="#"
                  :class="currentBcategory == bcategory.slug ? 'active' : ''"
                  @click.prevent="blogByCategory(bcategory.slug)"
                  class=""
                  >{{ bcategory.name }}</a
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
      currentBcategory: "",
      number: [],
      blogSearchText: "",
    };
  },
  methods: {
    ...mapActions({
      getBcategories: "index/getBcategories",
    }),
    getBlogs() {
      this.$store.dispatch("index/getBlogs", {
        page: this.currentPage,
        category: this.currentBcategory,
        search: this.blogSearchText,
      });
    },
    handleCurrentChange() {
      this.$store.dispatch("index/getBlogs", {
        page: this.currentPage,
        category: this.currentBcategory,
        search: this.blogSearchText,
      });
    },
    blogByCategory(bcategory) {
      this.currentBcategory = bcategory;
      this.currentPage = 1;
      this.$store.dispatch("index/getBlogs", {
        page: this.currentPage,
        category: this.currentBcategory,
        search: this.blogSearchText,
      });
    },
    blogBySearch() {
      this.currentPage = 1;
      this.$store.dispatch("index/getBlogs", {
        page: this.currentPage,
        category: this.currentBcategory,
        search: this.blogSearchText,
      });
    },
    resortAllBlog() {
      this.currentPage = 1;
      this.currentBcategory = "";
      this.blogSearchText = "";
      this.$store.dispatch("index/getBlogs", {
        page: this.currentPage,
        category: this.currentBcategory,
        search: this.blogSearchText,
      });
    },
  },
  computed: {
    ...mapGetters({
      blogs: "index/getBlogs",
      bcategories: "index/getBcategories",
      socialLinks: "index/getSocialLinks",
    }),
  },
  created() {
    this.getBlogs();
    this.getBcategories();
  },
};
</script>



