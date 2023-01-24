<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
    </ul>
    <h6 class="mb-0 text-red">*** You <b>don't</b> have <b>PERMISSION</b> to change and edit Data ***</h6>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <div class="nav-link">
          <router-link
            :to="{ name: 'Home' }"
            class="btn btn-primary btn-sm d-block mybtn9"
            target="_blank"
          >
            <i class="far fa-eye"></i> {{ $t("Visite Site") }}</router-link
          >
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link pt-0 pr-3" data-toggle="dropdown" href="#">
          <img
            :src="`/uploads/${adminInfox.image}`"
            alt=""
            class="user-image w-40 img-circle"
          />
        </a>

        <div
          class="dropdown-menu dropdown-menu-lg dropdown-menu-right border-none"
        >
          <div class="card card-widget widget-user-2 mb-0 shadow-none">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-primary">
              <div class="widget-user-image">
                <img
                  :src="`/uploads/${adminInfox.image}`"
                  alt=""
                  class="tImg"
                />
              </div>
              <!-- /.widget-user-image -->
              <h6 class="widget-user-username mt-3">{{ adminInfox.name }}</h6>
            </div>
            <div class="card-footer p-0 bg-white">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <router-link
                    :to="{ name: 'AdminEditProfile' }"
                    class="nav-link"
                  >
                    <i class="fas fa-edit mr-1"></i> {{ $t("Edit Profile") }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    :to="{ name: 'AdminChangePassword' }"
                    class="nav-link"
                  >
                    <i class="fas fa-unlock-alt mr-1"></i>
                    {{ $t("Change Password") }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0)" @click="logout" class="nav-link">
                    <i class="fas fa-sign-out-alt mr-1"></i> {{ $t("Logout") }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script>
export default {
  name: "AdminHeader",
  methods: {
    logout() {
      axios
        .get("/api/logout")
        .then((response) => {
            localStorage.removeItem("token");
          this.$router.push({ name: "AdminLogin" });
        })
        .catch((errors) => {
          console.log(errors);
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
};
</script>

<style scoped>
.w-40 {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
</style>
