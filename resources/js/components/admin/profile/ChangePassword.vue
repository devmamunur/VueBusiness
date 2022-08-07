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
                    <el-form-item :label="`${$t('New Password')}`">
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.password"
                      />
                      <span class="text-danger" v-if="errors.password">
                        {{ errors.password[0] }}
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
        password: "",
      },
    };
  },
  methods: {
    Update() {
      this.loading = true;
      axios
        .post(`/api/admin/dashboards/admin/password/update`, this.form)
        .then((result) => {
          this.$notify({
            title: "Success",
            message: "Data Updated Successfully",
            type: "success",
          });
          this.errors = {};
          this.form = {};
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>
