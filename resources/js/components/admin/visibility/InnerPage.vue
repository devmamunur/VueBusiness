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
                  {{ $t("About Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_about_page"
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
                  {{ $t("Service Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_service_page"
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
                  {{ $t("Portfolio Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_poerfolio_page"
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
                  {{ $t("Package Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_package_page"
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
                  {{ $t("Team Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_team_page"
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
                  {{ $t("Faq Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_faq_page"
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
                  {{ $t("Blog Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_blog_page"
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
                  {{ $t("Gallery Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_gallery_page"
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
                  {{ $t("Career Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_career_page"
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
                  {{ $t("Career Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_add_this_status"
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
                  {{ $t("Contact Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_contact_page"
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
                  {{ $t("Quate Page") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_quote_page"
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
                  {{ $t("About Page : About Section") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_about_about"
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
                  {{ $t("About Page : Featured Section") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_about_featured_work"
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
                  {{ $t("About Page : Choose Us Section") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_about_choose_us"
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
                  {{ $t("About Page : History") }}<span class="text-danger">*</span>
                </label>
                <div class="col-sm-7">
                  <div>
                    <el-switch
                      v-model="form.is_about_history"
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
        is_about_page: "",
        is_service_page: "",
        is_poerfolio_page: "",
        is_package_page: "",
        is_team_page: "",
        is_faq_page: "",
        is_blog_page: "",
        is_gallery_page: "",
        is_career_page: "",
        is_add_this_status: "",
        is_contact_page: "",
        is_quote_page: "",
        is_about_about: "",
        is_about_featured_work: "",
        is_about_choose_us: "",
        is_about_history: "",
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
      this.form.is_about_page =
        this.visibilities.is_about_page.toString();
      this.form.is_service_page =
        this.visibilities.is_service_page.toString();
      this.form.is_poerfolio_page =
        this.visibilities.is_poerfolio_page.toString();
      this.form.is_package_page =
        this.visibilities.is_package_page.toString();
      this.form.is_team_page =
        this.visibilities.is_team_page.toString();
      this.form.is_faq_page =
        this.visibilities.is_faq_page.toString();
      this.form.is_blog_page =
        this.visibilities.is_blog_page.toString();
      this.form.is_gallery_page =
        this.visibilities.is_gallery_page.toString();
      this.form.is_career_page =
        this.visibilities.is_career_page.toString();
      this.form.is_add_this_status =
        this.visibilities.is_add_this_status.toString();
      this.form.is_contact_page =
        this.visibilities.is_contact_page.toString();
      this.form.is_quote_page =
        this.visibilities.is_quote_page.toString();
      this.form.is_about_about =
        this.visibilities.is_about_about.toString();
      this.form.is_about_featured_work =
        this.visibilities.is_about_featured_work.toString();
      this.form.is_about_choose_us =
        this.visibilities.is_about_choose_us.toString();
      this.form.is_about_history =
        this.visibilities.is_about_history.toString();
    },
  },
};
</script>


