<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title mt-1">
                {{ $t($route.name.replace(/([A-Z])/g, " $1").trim()) }}
              </h3>
              <div class="card-tools">
                <router-link :to="{ name: 'Visibility' }">
                  <el-button type="primary" size="small">
                    <i class="fas fa-angle-double-left"></i>
                    {{ $t("Back") }}
                  </el-button>
                </router-link>
              </div>
            </div>
            <!-- /.card-header -->

            <div class="card-body visibilities">
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Hero Section") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_hero_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("About Section") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_about_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Service") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_service_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Intro Video") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_intro_video_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Team") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_team_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Counter") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_counter_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Testimonial") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_testimonial_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Faq") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_faq_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Meet us") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_meet_us_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("News") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_news_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-5 control-label">
                  {{ $t("Client") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_t3_client_section"
                      active-value="1"
                      inactive-value="0"
                      :active-text="`${$t('Active')}`"
                      :inactive-text="`${$t('Deactivate')}`"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="form-group row mt-4">
                <div class="col-sm-12">
                  <el-button
                    @click.prevent="update"
                    type="primary"
                    :loading="loading"
                    >{{ $t("Update") }}</el-button
                  >
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
export default {
  name: "ThemeOne",
  data() {
    return {
      loading: false,
      form: {
        is_t3_hero_section: "",
        is_t3_about_section: "",
        is_t3_service_section: "",
        is_t3_intro_video_section: "",
        is_t3_team_section: "",
        is_t3_counter_section: "",
        is_t3_testimonial_section: "",
        is_t3_faq_section: "",
        is_t3_meet_us_section: "",
        is_t3_news_section: "",
        is_t3_client_section: ""
      },
    };
  },
  created() {
    this.List();
  },
  methods: {
    update() {
      this.loading = true;
      axios
        .post(`/api/admin/visibilities`, this.form)
        .then((result) => {
          this.loading = false;
          this.$notify({
            title: "Success",
            message: "Data Updated Successfully",
            type: "success",
          });
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    },
    List() {
      this.loading = true;
      this.$store.dispatch("visibility/visibilityList").then((result) => {
        this.loading = false;
      });
    },
  },
  computed: {
    visibilities() {
      return this.$store.getters["visibility/visibilityList"];
    },
  },
  watch: {
    visibilities() {
      this.form.is_t3_hero_section =
        this.visibilities.is_t3_hero_section.toString();
      this.form.is_t3_about_section =
        this.visibilities.is_t3_about_section.toString();
      this.form.is_t3_service_section =
        this.visibilities.is_t3_service_section.toString();
      this.form.is_t3_intro_video_section =
        this.visibilities.is_t3_intro_video_section.toString();
      this.form.is_t3_team_section =
        this.visibilities.is_t3_team_section.toString();
      this.form.is_t3_counter_section =
        this.visibilities.is_t3_counter_section.toString();
      this.form.is_t3_testimonial_section =
        this.visibilities.is_t3_testimonial_section.toString();
      this.form.is_t3_faq_section =
        this.visibilities.is_t3_faq_section.toString();
      this.form.is_t3_meet_us_section =
        this.visibilities.is_t3_meet_us_section.toString();
      this.form.is_t3_news_section =
        this.visibilities.is_t3_news_section.toString();
      this.form.is_t3_client_section =
        this.visibilities.is_t3_client_section.toString();
    },
  },
};
</script>


