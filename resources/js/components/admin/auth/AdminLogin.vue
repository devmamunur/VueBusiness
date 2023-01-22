<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="#" class="h1"
            ><b>{{ $t("Login") }}</b></a
          >
        </div>
        <div class="card-body">
          <p class="login-box-msg">{{ $t("Sign in to start your session") }}</p>
          <form action="#" method="post" @submit.prevent="login()">
            <div class="g-wrapper mb-3">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  :placeholder="$t('Email')"
                  v-model="form.email"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <span class="text-danger d-block mb-2" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>
            <div class="g-wrapper mb-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="$t('Password')"
                  v-model="form.password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <span class="text-danger d-block mb-2" v-if="errors.password">
                {{ errors.password[0] }}
              </span>
            </div>
            <div class="row">
              <!-- /.col -->
              <div class="col-12 text-center">
                <el-button @click="login()" :loading="loading" type="primary">
                  {{ $t("Sign In") }}</el-button
                >
              </div>
              <!-- /.col -->
            </div>
          </form>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        email : '',
        password : ''
      },
    };
  },
  methods: {
    async login() {
      this.loading = true;
        await axios
        .post("/api/login", this.form)
        .then((result) => {
          this.loading = false;
          localStorage.setItem('token', result.data.access_token);
          console.log("Login 6666 response data is : ", result.data.access_token);

          this.$notify({
            title: "Success",
            message: "Login Successfully !",
            type: "success",
          });
          this.$router.push({ name: "AdminDashboard" });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
   
    },
  },
  created () {
    let token = localStorage.getItem('token');
      if(token){
          this.$router.push({ name: "AdminDashboard" });
      }
  }
};
</script> 