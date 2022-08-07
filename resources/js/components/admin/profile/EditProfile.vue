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
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <el-form label-position="top" @submit.prevent="saveOrUpdate">
                    <el-form-item :label="`${$t('Image')}`">
                      <img
                        class="mw-300 mb-3 img-demo"
                        v-if="form.image && viewImage == null"
                        :src="`/uploads/${form.image}`"
                        alt=""
                      />

                      <img
                        class="mw-300 mb-3 img-demo"
                        v-else
                        :src="viewImage"
                        alt=""
                      />
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
                      <span class="text-danger" v-if="errors.image">
                        {{ errors.image[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Name')}`">
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.name"
                      />
                      <span class="text-danger" v-if="errors.name">
                        {{ errors.name[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Email')}`">
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.email"
                      />
                      <span class="text-danger" v-if="errors.email">
                        {{ errors.email[0] }}
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
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </section>
</template>

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      loading: false,
      errors: {},
      viewImage: null,
      form: {
        image: "",
        name: "",
        email: "",
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
        this.form.image = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.viewImage = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handelDataChange() {
      this.$store.dispatch("dashboard/getAdminInfo").then((result) => {
        this.loading = false;
      });
    },
    Update() {
      let formData = new FormData();
      formData.append("image", this.form.image);
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);

      this.loading = true;
      axios
        .post(`/api/admin/dashboards/admin/profile/update`, formData)
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
    adminInfo() {
      this.$store.dispatch("dashboard/getAdminInfo");
    },
  },
  created() {
    this.adminInfo();
  },
  computed: {
    adminInfox() {
      return this.$store.getters["dashboard/getAdminInfo"];
    },
  },
  watch: {
    adminInfox() {
      this.form.image = this.adminInfox.image;
      this.form.name = this.adminInfox.name;
      this.form.email = this.adminInfox.email;
    },
  },
};
</script>
