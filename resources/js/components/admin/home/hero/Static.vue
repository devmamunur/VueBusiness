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
                    <el-form-item :label="`${$t('BG Image')}`">
                      <img
                        class="mw-300 mb-3 img-demo"
                        v-if="form.hero_bg_image && viewImage == null"
                        :src="`/uploads/${form.hero_bg_image}`"
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
                        <label class="custom-file-label" for="hero_bg_image">{{
                          $t("Choose Image")
                        }}</label>
                        <input
                          type="file"
                          class="custom-file-input"
                          @change="onFileSelected"
                          id="hero_bg_image"
                        />
                      </div>
                      <span class="text-danger" v-if="errors.hero_bg_image">
                        {{ errors.hero_bg_image[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Image')}`">
                      <img
                        class="mw-300 mb-3 img-demo"
                        v-if="form.hero_image && viewImage2 == null"
                        :src="`/uploads/${form.hero_image}`"
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
                        <label class="custom-file-label" for="hero_image">{{
                          $t("Choose Image")
                        }}</label>
                        <input
                          type="file"
                          class="custom-file-input"
                          @change="onFileSelected2"
                          id="hero_image"
                        />
                      </div>
                      <span class="text-danger" v-if="errors.hero_image">
                        {{ errors.hero_image[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Title')}`">
                      <input type="text" class="form-control" v-model="form.hero_title">
                      <span class="text-danger" v-if="errors.hero_title">
                        {{ errors.hero_title[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Subtitle')}`">
                      <input type="text" class="form-control" v-model="form.hero_sub_title">
                      <span class="text-danger" v-if="errors.hero_sub_title">
                        {{ errors.hero_sub_title[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Text')}`">
                      <textarea class="form-control" rows="5"
                        type="textarea"
                        v-model="form.hero_text"
                      ></textarea>
                      <span class="text-danger" v-if="errors.hero_text">
                        {{ errors.hero_text[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Feature Icon 1')}`">
                      <input type="text" class="form-control" v-model="form.hero_f_icon1">
                      <span class="text-danger" v-if="errors.hero_f_icon1">
                        {{ errors.hero_f_icon1[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Feature Text 1')}`">
                      <input type="text" class="form-control" v-model="form.hero_f_text1">
                      <span class="text-danger" v-if="errors.hero_f_text1">
                        {{ errors.hero_f_text1[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Feature Icon 2')}`">
                      <input type="text" class="form-control" v-model="form.hero_f_icon2">
                      <span class="text-danger" v-if="errors.hero_f_icon2">
                        {{ errors.hero_f_icon2[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Feature Text 2')}`">
                      <input type="text" class="form-control" v-model="form.hero_f_text2">
                      <span class="text-danger" v-if="errors.hero_f_text2">
                        {{ errors.hero_f_text2[0] }}
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
  name: "Static",
  data() {
    return {
      loading: false,
      errors: {},
      viewImage: null,
      viewImage2: null,
      form: {
        hero_bg_image: "",
        hero_image: "",
        hero_title: "",
        hero_sub_title: "",
        hero_text: "",
        hero_f_icon1: "",
        hero_f_text1: "",
        hero_f_icon2: "",
        hero_f_text2: "",
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
        this.form.hero_bg_image = event.target.files[0];
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
        this.form.hero_image = event.target.files[0];
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
      formData.append("hero_bg_image", this.form.hero_bg_image);
      formData.append("hero_image", this.form.hero_image);
      formData.append("hero_title", this.form.hero_title);
      formData.append("hero_sub_title", this.form.hero_sub_title);
      formData.append("hero_text", this.form.hero_text);
      formData.append("hero_f_icon1", this.form.hero_f_icon1);
      formData.append("hero_f_text1", this.form.hero_f_text1);
      formData.append("hero_f_icon2", this.form.hero_f_icon2);
      formData.append("hero_f_text2", this.form.hero_f_text2);

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
      this.form.hero_bg_image = this.sectiontitle.hero_bg_image;
      this.form.hero_image = this.sectiontitle.hero_image;
      this.form.hero_title = this.sectiontitle.hero_title;
      this.form.hero_sub_title = this.sectiontitle.hero_sub_title;
      this.form.hero_text = this.sectiontitle.hero_text;
      this.form.hero_f_icon1 = this.sectiontitle.hero_f_icon1;
      this.form.hero_f_text1 = this.sectiontitle.hero_f_text1;
      this.form.hero_f_icon2 = this.sectiontitle.hero_f_icon2;
      this.form.hero_f_text2 = this.sectiontitle.hero_f_text2;
    },
  },
};
</script>
