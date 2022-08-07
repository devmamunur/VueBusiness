<template>
  <div class="blog-standard-area pt-120 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8" v-if="jobs.data">
          <div v-if="jobs.data.length <= 0" class="col-md-12">
            <div class="bg-light py-5">
              <h3 class="text-center">{{ $t("NO JOB FOUND") }}</h3>
            </div>
          </div>

          <template v-else>
            <div v-for="(job, i) in jobs.data" :key="i" class="single-job">
              <router-link
                :to="{ name: 'CareerDetails', params: { slug: job.slug } }"
                ><h3 class="title">{{ job.title }}</h3></router-link
              >
              <p>
                <span><i class="far fa-calendar-alt"></i>Deadline :</span>
                {{ job.deadline }}
              </p>
              <p>
                <span><i class="fas fa-money-bill-wave"></i>Salary :</span>
                {{ job.salary }}
              </p>
              <p>
                <span><i class="fas fa-briefcase"></i> Work Experience :</span>
                {{
                  job.experience_requirement &&
                  job.experience_requirement.length > 100
                    ? job.experience_requirement.substring(0, 100) + "..."
                    : job.experience_requirement
                }}
              </p>
              <p>
                <span><i class="fas fa-gift"></i>Vacancy :</span>
                {{ job.vacancy }}
              </p>
              <router-link
                :to="{ name: 'CareerDetails', params: { slug: job.slug } }"
                >{{ $t("Read More") }}<i class="fal fa-long-arrow-right"></i
              ></router-link>
            </div>
          </template>
          <template v-if="jobs.meta">
            <div class="row" v-if="jobs.meta.total > 6">
              <div class="col-lg-12 text-center" v-if="jobs.meta">
                <el-pagination
                  class="text-center mt-4"
                  background
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="jobs.meta.per_page"
                  layout="prev, pager, next"
                  :total="jobs.meta.total"
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
                  @click.prevent="resortAllJob"
                  :class="currentJob == '' ? 'active' : ''"
                  href="#"
                  class=""
                  >{{ $t("All") }}
                </a>
              </li>
              <li v-for="(jobCategory, i) in jobCategories" :key="i">
                <a
                  href="#"
                  :class="currentJob == jobCategory.slug ? 'active' : ''"
                  @click.prevent="jobByCategory(jobCategory.slug)"
                  class=""
                  >{{ jobCategory.name }}</a
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
      currentJob: "",
      number: [],
    };
  },
  methods: {
    ...mapActions({
      getJobCategories: "index/getJobCategories",
    }),
    getJobs() {
      this.$store.dispatch("index/getJobs", {
        page: this.currentPage,
        category: this.currentJob,
      });
    },
    handleCurrentChange() {
      this.$store.dispatch("index/getJobs", {
        page: this.currentPage,
        category: this.currentJob,
      });
    },
    jobByCategory(service) {
      this.currentJob = service;
      this.currentPage = 1;
      this.$store.dispatch("index/getJobs", {
        page: this.currentPage,
        category: this.currentJob,
      });
    },
    resortAllJob() {
      this.currentPage = 1;
      this.currentJob = "";
      this.$store.dispatch("index/getJobs", {
        page: this.currentPage,
        category: this.currentJob,
      });
    },
  },
  computed: {
    ...mapGetters({
      jobs: "index/getJobs",
      jobCategories: "index/getJobCategories",
      socialLinks: "index/getSocialLinks",
      sectionInfo: "index/getSectionInfo",
      setting: "index/getSetting",
    }),
  },
  created() {
    this.getJobs();
    this.getJobCategories();
  },
};
</script>



