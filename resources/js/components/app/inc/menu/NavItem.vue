<template>
  <div class="header-right d-flex align-items-center justify-content-end">
    <div class="site-nav-menu">
      <ul class="primary-menu">
        <li class="pore">
          <router-link class="nav-link" :to="{ name: 'Home' }">{{
            $t("Home")
          }}</router-link>
        </li>
        <li v-if="visibility.is_about_page" class="pore">
          <router-link class="nav-link" :to="{ name: 'About' }">{{
            $t("About")
          }}</router-link>
        </li>
        <li v-if="visibility.is_service_page" class="pore">
          <router-link class="nav-link" :to="{ name: 'Service' }">{{
            $t("Service")
          }}</router-link>
        </li>
        <li v-if="visibility.is_poerfolio_page" class="pore">
          <router-link class="nav-link" :to="{ name: 'Portfolio' }">{{
            $t("Portfolio")
          }}</router-link>
        </li>
        <li
          v-if="
            visibility.is_package_page ||
            visibility.is_team_page ||
            visibility.is_faq_page ||
            visibility.is_gallery_page ||
            visibility.is_career_page ||
            visibility.is_blog_page
          "
          class="submenu-wrapper pore"
        >
          <a class="sm-link p-link" href="javascript: void(0)"
            >{{ $t("Pages") }}
           </a>
            <span class="dd-trigger"><i class="fas fa-plus"></i></span
          >
          <ul class="submenu">
            <li v-if="visibility.is_package_page">
              <router-link :to="{ name: 'Package' }">{{
                $t("Package")
              }}</router-link>
            </li>
            <li v-if="visibility.is_team_page">
              <router-link :to="{ name: 'Team' }">{{ $t("Team") }}</router-link>
            </li>
            <li v-if="visibility.is_faq_page">
              <router-link :to="{ name: 'Faq' }">{{ $t("Faq") }}</router-link>
            </li>
            <li v-if="visibility.is_gallery_page">
              <router-link :to="{ name: 'Gallery' }">{{
                $t("Gallery")
              }}</router-link>
            </li>
            <li v-if="visibility.is_career_page">
              <router-link :to="{ name: 'Career' }">{{
                $t("Career")
              }}</router-link>
            </li>
            <li v-if="visibility.is_blog_page">
              <router-link :to="{ name: 'Blog' }">{{ $t("Blog") }}</router-link>
            </li>
          </ul>
        </li>
        <li v-if="visibility.is_contact_page" class="pore">
          <router-link class="nav-link" :to="{ name: 'Contact' }">{{
            $t("Contact")
          }}</router-link>
        </li>
        <li v-if="visibility.is_quote_page" class="mobile-quote">
          <router-link class="nav-link" :to="{ name: 'GateQuote' }">{{
            $t("Gate A Quote")
          }}</router-link>
        </li>
      </ul>
      <a href="#" class="nav-close"><i class="fas fa-times"></i></a>
    </div>

    <div class="header-extra d-flex align-items-center">
      <div class="nav-toggler"><span></span><span></span><span></span></div>
      <div v-if="visibility.is_quote_page" class="navbar-btn">
        <router-link :to="{ name: 'GateQuote' }">{{
          $t("Gate A Quote")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      visibility: "index/getVisibility",
    }),
  },
  mounted() {

    $(".dd-trigger").on("click", function () {
       $('.dd-trigger i').toggleClass("fa-minus fa-plus");
    });

    // Open menu on toggler click
    $(".nav-toggler").on("click", function (e) {
      $(".site-nav-menu").toggleClass("menu-opened");
      e.preventDefault();
      $(this).toggleClass("menu-opened");
    });
    // Close menu on toggler click
    $(".nav-close").on("click", function (e) {
      $(".site-nav-menu").removeClass("menu-opened");
      $(".nav-toggler").removeClass("menu-opened");
      e.preventDefault();
    });
    // check browser width in real-time
    function breakpointCheck() {
      var windoWidth = window.innerWidth;
      if (windoWidth <= 991) {
        $(".header-right").addClass("breakpoint-on");
      } else {
        $(".header-right").removeClass("breakpoint-on");
      }
    }
    breakpointCheck();
    $(window).on("resize", function () {
      breakpointCheck();
    });
  },
};
</script>

<style>
</style>


