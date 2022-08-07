<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title mt-1">
                {{ $t($route.name.replace(/([A-Z])/g, " $1").trim()) }}
              </h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <el-form label-position="top" @submit.prevent="saveOrUpdate">
                    <el-form-item :label="`${$t('Image')}`">
                      <img
                        class="mw-300 mb-3 img-demo"
                        v-if="form.w_c_us_image1 && viewImage == null"
                        :src="`/uploads/${form.w_c_us_image1}`"
                        alt=""
                      />

                      <img
                        class="mw-300 mb-3 img-demo"
                        v-else
                        :src="viewImage"
                        alt=""
                      />

                      <!--  -->
                      <div class="custom-file">
                        <label class="custom-file-label" for="about_image">{{
                          $t("Choose Image")
                        }}</label>
                        <input
                          type="file"
                          class="custom-file-input"
                          @change="onFileSelected"
                          id="about_image"
                        />
                      </div>
                      <span class="text-danger" v-if="errors.w_c_us_image1">
                        {{ errors.w_c_us_image1[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Section BG Image')}`">
                      <img
                        class="mw-300 mb-3 img-demo"
                        v-if="form.w_c_us_image2 && viewImage2 == null"
                        :src="`/uploads/${form.w_c_us_image2}`"
                        alt=""
                      />

                      <img
                        class="mw-300 mb-3 img-demo"
                        v-else
                        :src="viewImage2"
                        alt=""
                      />

                      <!--  -->
                      <div class="custom-file">
                        <label class="custom-file-label" for="about_image">{{
                          $t("Choose Image")
                        }}</label>
                        <input
                          type="file"
                          class="custom-file-input"
                          @change="onFileSelected2"
                          id="about_image"
                        />
                      </div>
                      <span class="text-danger" v-if="errors.w_c_us_image2">
                        {{ errors.w_c_us_image2[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Title')}`">
                      <input type="text" class="form-control" v-model="form.w_c_us_title">
                      <span class="text-danger" v-if="errors.w_c_us_title">
                        {{ errors.w_c_us_title[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Subtitle')}`">
                      <input type="text" class="form-control" v-model="form.w_c_us_sub_title">
                      <span class="text-danger" v-if="errors.w_c_us_sub_title">
                        {{ errors.w_c_us_sub_title[0] }}
                      </span>
                    </el-form-item>

                    <el-button
                      @click.prevent="Update"
                      type="primary"
                      :loading="loading"
                      >{{ $t("Update") }}</el-button
                    >
                  </el-form>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      loading: false,
      errors: {},
      viewImage: null,
      viewImage2: null,
      form: {
        w_c_us_image1: "",
        w_c_us_image2: "",
        w_c_us_title: "",
        w_c_us_sub_title: "",
      },
    };
  },
  methods: {
    onFileSelected(event) {
      let file = event.target.files[0];
      if (file.size > 1048770) {
        this.$notify({
          title: "Success",
          message: "Max Image Size 2 MB",
          type: "warning",
        });
      } else {
        this.form.w_c_us_image1 = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.viewImage = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    onFileSelected2(event) {
      let file = event.target.files[0];
      if (file.size > 1048770) {
        this.$notify({
          title: "Success",
          message: "Max Image Size 2 MB",
          type: "warning",
        });
      } else {
        this.form.w_c_us_image2 = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.viewImage2 = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handelDataChange() {
      this.$store.dispatch("sectiontitle/sectionTitle").then((result) => {
        this.loading = false;
      });
    },
    Update() {
      let formData = new FormData();
      formData.append("w_c_us_image1", this.form.w_c_us_image1);
      formData.append("w_c_us_image2", this.form.w_c_us_image2);
      formData.append("w_c_us_title", this.form.w_c_us_title);
      formData.append("w_c_us_sub_title", this.form.w_c_us_sub_title);

      this.loading = true;
      axios
        .post(`/api/admin/sectiontitles/update/`, formData)
        .then((result) => {
          this.$notify({
            title: "Success",
            message: "Data Updated Successfully",
            type: "success",
          });
          this.errors = {};
          this.form = {};
          this.handelDataChange();
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    },
    edit() {
      this.$store.dispatch("sectiontitle/sectionTitle");
    },
  },
  created() {
    this.edit();
  },
  computed: {
    sectiontitle() {
      return this.$store.getters["sectiontitle/sectionTitle"];
    },
  },
  watch: {
    sectiontitle() {
      this.form.w_c_us_image1 = this.sectiontitle.w_c_us_image1;
      this.form.w_c_us_image2 = this.sectiontitle.w_c_us_image2;
      this.form.w_c_us_title = this.sectiontitle.w_c_us_title;
      this.form.w_c_us_sub_title = this.sectiontitle.w_c_us_sub_title;
    },
  },
};
</script>
