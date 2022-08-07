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
                    <el-form-item :label="`${$t('SMTP')} *`">
                      <el-select v-model="form.is_smtp">
                        <el-option key="Activated" label="Activated" value="Activated">
                        </el-option>
                        <el-option
                          key="Deactivated"
                          label="Deactivated"
                          value="Deactivated"
                        >
                        </el-option>
                      </el-select>
                      <span
                        class="text-danger d-block mb-2"
                        v-if="errors.is_smtp"
                      >
                        {{ errors.is_smtp[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Mail Engine')} *`">
                      <el-input v-model="form.header_email"></el-input>
                      <span class="text-danger" v-if="errors.header_email">
                        {{ errors.header_email[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('SMTP HOST')} *`">
                      <el-input v-model="form.smtp_host"></el-input>
                      <span class="text-danger" v-if="errors.smtp_host">
                        {{ errors.smtp_host[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('SMTP PORT')} *`">
                      <el-input v-model="form.smtp_port"></el-input>
                      <span class="text-danger" v-if="errors.smtp_port">
                        {{ errors.smtp_port[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Encryption')} *`">
                      <el-input v-model="form.email_encryption"></el-input>
                      <span class="text-danger" v-if="errors.email_encryption">
                        {{ errors.email_encryption[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('SMTP Username')} *`">
                      <el-input v-model="form.smtp_user"></el-input>
                      <span class="text-danger" v-if="errors.smtp_user">
                        {{ errors.smtp_user[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('SMTP Password')} *`">
                      <el-input v-model="form.smtp_pass"></el-input>
                      <span class="text-danger" v-if="errors.smtp_pass">
                        {{ errors.smtp_pass[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('Email')} *`">
                      <el-input v-model="form.from_email"></el-input>
                      <span class="text-danger" v-if="errors.from_email">
                        {{ errors.from_email[0] }}
                      </span>
                    </el-form-item>
                    <el-form-item :label="`${$t('From Name')} *`">
                      <el-input v-model="form.from_name"></el-input>
                      <span class="text-danger" v-if="errors.from_name">
                        {{ errors.from_name[0] }}
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
  name: "Email",
  data() {
    return {
      loading: false,
      errors: {},
      form: {},
    };
  },
  methods: {
    handelDataChange() {
      this.$store.dispatch("mailConfiguration/mailConfiguration").then((result) => {
        this.loading = false;
      });
    },
    Update() {
      this.loading = true;
      axios
        .post(`/api/admin/mails/`, this.form)
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
      this.$store.dispatch("mailConfiguration/mailConfiguration");
    },
  },
  created() {
    this.edit();
  },
  computed: {
    mailConfiguration() {
      return this.$store.getters["mailConfiguration/mailConfiguration"];
    },
  },
  watch: {
    mailConfiguration() {
      this.form = this.mailConfiguration;
    },
  },
};
</script>
