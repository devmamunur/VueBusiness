<template>
  <div class="blog-standard-area pt-120 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="jobdetails-area">
            <h3 class="job_name">
              <i class="fas fa-briefcase"></i> {{ job.title }}
            </h3>
            <div v-if="job.job_responsibility" class="j-info">
              <h4>{{ $t("Job Responsibilities") }}</h4>
              <p>
                {{ job.job_responsibility }}
              </p>
            </div>
            <div v-if="job.job_context" class="j-info">
              <h4>{{ $t("Job Context") }}</h4>
              <p>
                {{ job.job_context }}
              </p>
            </div>
            <div v-if="job.education_requirement" class="j-info">
              <h4>{{ $t("Educational Requirements") }}</h4>
              <p>
                {{ job.education_requirement }}
              </p>
            </div>
            <div v-if="job.experience_requirement" class="j-info">
              <h4>{{ $t("Experience Requirements") }}</h4>
              <p>
                {{ job.experience_requirement }}
              </p>
            </div>
            <div v-if="job.additional_requirement" class="j-info">
              <h4>{{ $t("Additional Requirements") }}</h4>
              <p>
                {{ job.additional_requirement }}
              </p>
            </div>
            <div v-if="job.job_location" class="j-info">
              <h4>{{ $t("Job Location") }}</h4>
              <p>
                {{ job.job_location }}
              </p>
            </div>
            <div v-if="job.employment_status" class="j-info">
              <h4>{{ $t("Employment Status") }}</h4>
              <p>
                {{ job.employment_status }}
              </p>
            </div>
            <div v-if="job.salary" class="j-info">
              <h4>{{ $t("Salary") }}</h4>
              <p>
                {{ job.salary }}
              </p>
            </div>
            <div v-if="job.vacancy" class="j-info">
              <h4>{{ $t("Vacancy") }}</h4>
              <p>
                {{ job.vacancy }}
              </p>
            </div>
            <div v-if="job.position" class="j-info">
              <h4>{{ $t("Position") }}</h4>
              <p>
                {{ job.position }}
              </p>
            </div>
            <div v-if="job.company_name" class="j-info">
              <h4>{{ $t("Company Name") }}</h4>
              <p>
                {{ job.company_name }}
              </p>
            </div>
            <div v-if="job.other_benefits" class="j-info">
              <h4>{{ $t("Compensation & Other Benefits") }}</h4>
              <p>
                {{ job.other_benefits }}
              </p>
            </div>
            <div v-if="job.deadline" class="j-info">
              <h4>{{ $t("Deadline") }}</h4>
              <p>
                {{ job.deadline | timeFormat }}
              </p>
            </div>

            <a
              href="#"
              @click.prevent="jobDialog = true"
              class="main-btn"
              data-toggle="modal"
              data-target="#applyjob"
              >{{ $t("Apply For Job") }}</a
            >

            <el-dialog
              :title="$t('Apply for This Job')"
              :visible.sync="jobDialog"
              width="50%"
              center
            >
              <el-form label-position="top" @submit.prevent="applyJob">
                <div class="row">
                  <div class="col-md-6">
                    <el-form-item :label="`${$t('Name')} *`">
                      <el-input v-model="form.name"></el-input>
                      <span class="text-danger" v-if="errors.name">
                        {{ errors.name[0] }}
                      </span>
                    </el-form-item>
                  </div>
                  <div class="col-md-6">
                    <el-form-item :label="`${$t('Email')} *`">
                      <el-input v-model="form.email"></el-input>
                      <span class="text-danger" v-if="errors.email">
                        {{ errors.email[0] }}
                      </span>
                    </el-form-item>
                  </div>
                  <div class="col-md-6">
                    <el-form-item :label="`${$t('Phone')} *`">
                      <el-input v-model="form.phone"></el-input>
                      <span class="text-danger" v-if="errors.phone">
                        {{ errors.phone[0] }}
                      </span>
                    </el-form-item>
                  </div>
                  <div class="col-md-6">
                    <el-form-item :label="`${$t('Expected Salary')} *`">
                      <el-input v-model="form.expected_salary"></el-input>
                      <span class="text-danger" v-if="errors.expected_salary">
                        {{ errors.expected_salary[0] }}
                      </span>
                    </el-form-item>
                  </div>
                  <div class="col-md-12">
                    <el-form-item :label="`${$t('Message')}`">
                      <el-input
                        type="textarea"
                        rows="3"
                        v-model="form.message"
                      ></el-input>
                      <span class="text-danger" v-if="errors.message">
                        {{ errors.message[0] }}
                      </span>
                    </el-form-item>
                  </div>
                  <div class="col-lg-12">
                    <div class="custom-file">
                      <label class="custom-file-label" for="image">{{
                        $t("Choose PDF File")
                      }}</label>
                      <input
                        type="file"
                        class="custom-file-input"
                        @change="onFileSelected"
                        id="image"
                      />
                      <span class="text-danger" v-if="errors.file">
                        {{ errors.file[0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <span class="main-btn" @click.prevent="applyJob" :loading="loading">{{ $t("Apply Job") }}</span>
              </span>
            </el-dialog>
          </div>
        </div>
        <div class="col-lg-4 blog-sidebar order-first order-lg-last">
          <div class="widget categories-widget">
            <router-link class="main-btn d-block" :to="{ name: 'Career' }">{{
              $t("All Jobs")
            }}</router-link>
          </div>
          <div class="widget social-links">
            <h4 class="widget-title">
              {{ $t("Never Miss News") }}
            </h4>
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
    <!-- container -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      jobDialog: false,
      errors: {},
      form: {
        job_title: "",
        type: "",
        name: "",
        email: "",
        phone: "",
        expected_salary: "",
        message: "",
        file: "",
      },
    };
  },
  methods: {
    ...mapActions({
      getJobCategories: "index/getJobCategories",
    }),
    getSingleJob() {
      this.$store.dispatch("index/getSingleJob", this.$route.params.slug);
    },
    onFileSelected(event) {
      this.form.file = event.target.files[0];
    },
    applyJob() {
      this.loading = true;

      let formData = new FormData();
      formData.append("job_title", this.job.title);
      formData.append("type", this.job.position);
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      formData.append("expected_salary", this.form.expected_salary);
      formData.append("message", this.form.message);
      formData.append("file", this.form.file);

      axios
        .post("/api/careers/apply", formData)
        .then((result) => {
          this.loading = false;
          this.form = {};
          this.errors = {};
          this.jobDialog = false;
          this.$notify({
            title: "Success",
            message: "Data Added Successfully",
            type: "success",
          });
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    },
  },
  computed: {
    ...mapGetters({
      sectionInfo: "index/getSectionInfo",
      setting: "index/getSetting",
      socialLinks: "index/getSocialLinks",
      job: "index/getSingleJob",
      jobCategories: "index/getJobCategories",
    }),
  },
  created() {
    this.getSingleJob();
    this.getJobCategories();
  },
};
</script>
