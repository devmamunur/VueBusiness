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
                  <el-form label-position="top" @submit.prevent="sendMail">
                    <el-form-item :label="`${$t('Subject')}`">
                      <el-input v-model="form.subject"></el-input>
                      <span class="text-danger" v-if="errors.subject">
                        {{ errors.subject[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Message')}`">
                      <el-input type="textarea" rows="6" v-model="form.message"></el-input>
                      <span class="text-danger" v-if="errors.message">
                        {{ errors.message[0] }}
                      </span>
                    </el-form-item>
                    <el-button
                      @click.prevent="sendMail"
                      type="primary"
                      :loading="loading"
                      >{{ $t("Send Mail") }}</el-button
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
  name: "Mail",
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        subject: "",
        message: "",
      },
    }
  },
  methods: {
    sendMail() {
      this.loading = true;
      axios
        .post(`/api/admin/newsletters/mailsubscriber/`, this.form)
        .then((result) => {
          this.$notify({
            title: "Success",
            message: "Mail Send Successfully",
            type: "success",
          });
          this.errors = {};
          this.form = {};
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    }
  },
};
</script>
