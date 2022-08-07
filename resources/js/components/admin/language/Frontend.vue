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
                    <router-link :to="{ name: 'Language' }">
                        <el-button type="primary" size="small">
                            <i class="fas fa-angle-double-left"></i>
                            {{ $t("Back") }}
                        </el-button>
                    </router-link>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <form>
                <div class="row">
                  <div
                    class="col-md-4 mt-2"
                    v-for="(value, key) in form"
                    :key="key"
                  >
                    <div class="form-group">
                      <label for="title" class="control-label">{{ key }}</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form[key]"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12 mt-3">
                    <el-button
                      @click.prevent="Update"
                      type="primary"
                      :loading="loading"
                      >{{ $t("Update") }}</el-button
                    >
                  </div>
                </div>
              </form>
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
  name: "Frontend",
  data() {
    return {
      loading: false,
      form: [],
    };
  },
  created() {
    this.List();
  },
  methods: {
    Update() {
      this.loading = true;
      axios
        .post(`/api/admin/languages/frontend/update/`, this.form)
        .then((result) => {
        this.loading = false;
          this.$notify({
            title: "Success",
            message: "Data Updated Successfully",
            type: "success",
          });
          this.handelDataChange();
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    List() {
      this.$store.dispatch("language/languagesList").then((result) => {});
    },
    handelDataChange() {
      this.$store.dispatch("language/languagesList").then((result) => {});
    },
  },
  computed: {
    languages() {
      return this.$store.getters["language/languagesList"];
    },
  },
  watch: {
    languages() {
      this.form = this.languages;
    },
  },
};
</script>

<style></style>
