<template>
  <section class="quote-page pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <el-form label-position="top" @submit.prevent="SubmitQuote">
            <div class="row">
              <div class="col-md-6">
                <el-form-item :label="`${$t('Name')} *`">
                  <el-input v-model="form.name"></el-input>
                  <span class="text-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-md-6">
                <el-form-item :label="`${$t('Email')} *`">
                  <el-input v-model="form.email"></el-input>
                  <span class="text-danger" v-if="errors.email">
                    {{ errors.email[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-md-6">
                <el-form-item :label="`${$t('Phone')} *`">
                  <el-input v-model="form.phone"></el-input>
                  <span class="text-danger" v-if="errors.phone">
                    {{ errors.phone[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-md-6">
                <el-form-item :label="`${$t('Country')}`">
                  <el-input v-model="form.country"></el-input>
                  <span class="text-danger" v-if="errors.country">
                    {{ errors.country[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-md-6">
                <el-form-item :label="`${$t('Approx Budget')}`">
                  <el-input v-model="form.budget"></el-input>
                  <span class="text-danger" v-if="errors.budget">
                    {{ errors.budget[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-md-6">
                <el-form-item :label="`${$t('Skype ID')}`">
                  <el-input v-model="form.skypeid"></el-input>
                  <span class="text-danger" v-if="errors.skypeid">
                    {{ errors.skypeid[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-md-6">
                <el-form-item :label="`${$t('Subject')} *`">
                  <el-input v-model="form.subject"></el-input>
                  <span class="text-danger" v-if="errors.subject">
                    {{ errors.subject[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-md-6">
                <el-form-item :label="`${$t('File')}`">
                  <div class="custom-file">
                    <label class="custom-file-label" for="File">{{
                      $t("Choose PDF File")
                    }}</label>
                    <input
                      type="file"
                      class="custom-file-input"
                      @change="onFileSelected"
                      id="File"
                    />
                    <span class="text-danger" v-if="errors.file">
                      {{ errors.file[0] }}
                    </span>
                  </div>
                </el-form-item>
              </div>
              <div class="col-md-12">
                <el-form-item :label="`${$t('Project Description')} *`">
                  <el-input
                    type="textarea"
                    rows="3"
                    v-model="form.description"
                  ></el-input>
                  <span class="text-danger" v-if="errors.description">
                    {{ errors.description[0] }}
                  </span>
                </el-form-item>
              </div>
              <div class="col-lg-12">
                    <span class="main-btn" @click.prevent="SubmitQuote" >
                      <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span> {{ $t("Submit") }}
                    </span>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppGateQuote",
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        name: "",
        email: "",
        phone: "",
        country: "",
        budget: "",
        skypeid: "",
        subject: "",
        description: "",
        file: "",
      },
    };
  },
  methods: {
    onFileSelected(event) {
      this.form.file = event.target.files[0];
    },
    SubmitQuote() {
      this.loading = true;

      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      formData.append("country", this.form.country);
      formData.append("budget", this.form.budget);
      formData.append("skypeid", this.form.skypeid);
      formData.append("subject", this.form.subject);
      formData.append("description", this.form.description);
      formData.append("file", this.form.file);

      axios
        .post("/api/quote/submit", formData)
        .then((result) => {
           this.form = null;
          this.loading = false;
          this.$router.push({ name: "Home" });
          this.$notify({
            title: "Success",
            message: "Quote Submitted Successfully",
            type: "success",
          });
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>

<style>
</style>