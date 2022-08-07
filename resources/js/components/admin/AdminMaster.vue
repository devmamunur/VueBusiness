<template>
  <div class="wrapper">
    <template v-if="$route.name !== 'AdminLogin'">
      <admin-header></admin-header>
      <admin-sidebar></admin-sidebar>
    </template>
    <router-view v-if="$route.name === 'AdminLogin'"></router-view>
    <div class="content-wrapper" v-else>
      <admin-breadcrumb></admin-breadcrumb>
      <router-view></router-view>
    </div>
    <admin-footer v-if="$route.name !== 'AdminLogin'"></admin-footer>
  </div>
</template>

<script>
import AdminFooter from "./inc/AdminFooter";
import AdminHeader from "./inc/AdminHeader";
import AdminSidebar from "./inc/AdminSidebar";
import AdminBreadcrumb from "./inc/AdminBreadcrumb";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AdminMaster",
  data() {
    return {
      isAdmin: "",
    };
  },
  components: {
    AdminFooter,
    AdminHeader,
    AdminSidebar,
    AdminBreadcrumb,
  },
};
</script>

<style>
.el-select {
  display: block;
  width: 100%;
}
form label {
  margin-bottom: 0px !important;
}

.img-demo {
  display: block;
  background-color: #fff;
  border: 3px solid #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  max-width: 100%;
  height: auto;
}
.mw-300 {
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
}
.tImg {
  width: 80px;
  height: 50px;
  object-fit: cover;
}
.content-header h1 {
  font-size: 22px;
}
.w-200 {
  margin: 5px;
  width: 200px;
  height: 150px;
  object-fit: cover;
  display: inline-block;
}
.drop-img .custom-file-label {
  padding-top: 33px;
  border: 2px dashed #ddd !important;
  color: #777;
}
.h80 {
  height: 100px !important;
}
.drop-img .custom-file-input {
  opacity: 0;
}
</style>
