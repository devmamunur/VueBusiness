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
              <div class="card-tools">
                <router-link :to="{ name: 'SliderList' }">
                  <el-button type="primary" size="small">
                    <i class="fas fa-angle-double-left"></i>
                    {{ $t("Back") }}
                  </el-button>
                </router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <el-form label-position="top" @submit.prevent="saveOrUpdate">
                    <el-form-item :label="`${$t('Background Image')} *`">
                      <image-show
                        :routeParamsId="$route.params.id"
                        :viewImage="viewImage2"
                        :image="slider.background_image"
                      ></image-show>
                      <div class="custom-file">
                        <label
                          class="custom-file-label"
                          for="background_image"
                          >{{ $t("Choose Image") }}</label
                        >
                        <input
                          type="file"
                          class="custom-file-input"
                          @change="onFileSelected2"
                          id="background_image"
                        />
                      </div>
                      <span class="text-danger" v-if="errors.background_image">
                        {{ errors.background_image[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Image')} *`">
                      <image-show
                        :routeParamsId="$route.params.id"
                        :viewImage="viewImage"
                        :image="slider.image"
                      ></image-show>
                      <div class="custom-file">
                        <label class="custom-file-label" for="image">{{
                          $t("Choose Image")
                        }}</label>
                        <input
                          type="file"
                          class="custom-file-input"
                          @change="onFileSelected"
                          id="image"
                        />
                      </div>
                      <span class="text-danger" v-if="errors.image">
                        {{ errors.image[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Title')} *`">
                      <el-input v-model="form.title"></el-input>
                      <span class="text-danger" v-if="errors.title">
                        {{ errors.title[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Subtitle')} *`">
                      <el-input v-model="form.subtitle"></el-input>
                      <span class="text-danger" v-if="errors.subtitle">
                        {{ errors.subtitle[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Text')} *`">
                      <el-input
                        type="textarea"
                        rows="4"
                        v-model="form.text"
                      ></el-input>
                      <span class="text-danger" v-if="errors.text">
                        {{ errors.text[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Button Text')} *`">
                      <el-input v-model="form.button_text"></el-input>
                      <span class="text-danger" v-if="errors.button_text">
                        {{ errors.button_text[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Button Link')} *`">
                      <el-input v-model="form.button_link"></el-input>
                      <span class="text-danger" v-if="errors.button_link">
                        {{ errors.button_link[0] }}
                      </span>
                    </el-form-item>

                    <el-form-item :label="`${$t('Status')} *`">
                      <el-select
                        v-model="form.status"
                        :placeholder="$t('Select Status')"
                      >
                        <el-option
                          key="Public"
                          label="Public"
                          value="Public"
                        ></el-option>
                        <el-option
                          key="Private"
                          label="Private"
                          value="Private"
                        ></el-option>
                      </el-select>
                      <span
                        class="text-danger d-block mb-2"
                        v-if="errors.status"
                      >
                        {{ errors.status[0] }}
                      </span>
                    </el-form-item>

                    <el-button
                      v-if="$route.params.id"
                      @click.prevent="saveOrUpdate"
                      type="primary"
                      :loading="loading"
                      >{{ $t("Update") }}</el-button
                    >
                    <el-button
                      v-else
                      @click.prevent="saveOrUpdate"
                      type="primary"
                      :loading="loading"
                      >{{ $t("Save") }}</el-button
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
import ImageShow from "../../helper/ImageShow.vue";
export default {
  name: "AddOrUpdate",
  data() {
    return {
      loading: false,
      errors: {},
      viewImage: null,
      viewImage2: null,
      form: {
        image: "",
        background_image: "",
        subtitle: "",
        title: "",
        text: "",
        button_text: "",
        button_link: "",
        status: "",
      },
    };
  },
  components: {
    ImageShow,
  },
  methods: {
    onFileSelected(event) {
      let file = event.target.files[0];
      if (file.size > 2000000) {
        this.$notify({
          title: "Success",
          message: "Max Image Size 2 MB",
          type: "warning",
        });
      } else {
        this.form.image = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.viewImage = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    onFileSelected2(event) {
      let file = event.target.files[0];
      if (file.size > 2000000) {
        this.$notify({
          title: "Success",
          message: "Max Image Size 2 MB",
          type: "warning",
        });
      } else {
        this.form.background_image = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.viewImage2 = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    save(formData) {
      this.loading = true;
      axios
        .post("/api/admin/sliders", formData)
        .then((result) => {
          this.loading = false;
          this.form = null;
          this.$router.push({ name: "SliderList" });
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
    update(formData) {
      this.loading = true;
      axios
        .post(`/api/admin/sliders/update/${this.$route.params.id}`, formData)
        .then((result) => {
          this.loading = false;
          this.form = null;
          this.$router.push({ name: "SliderList" });
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
    saveOrUpdate() {
      let formData = new FormData();
      formData.append("image", this.form.image);
      formData.append("background_image", this.form.background_image);
      formData.append("subtitle", this.form.subtitle);
      formData.append("title", this.form.title);
      formData.append("text", this.form.text);
      formData.append("button_text", this.form.button_text);
      formData.append("button_link", this.form.button_link);
      formData.append("status", this.form.status);

      if (this.form.id) {
        this.update(formData);
      } else {
        this.save(formData);
      }
    },
    edit() {
      this.$store.dispatch("slider/editSlider", this.$route.params.id);
    },
  },
  created() {
    if (this.$route.params.id) {
      this.edit();
    }
  },
  computed: {
    slider() {
      return this.$store.getters["slider/singleSlider"];
    },
  },
  watch: {
    slider() {
      this.form = this.slider;
    },
  },
};
</script>

<style></style>
