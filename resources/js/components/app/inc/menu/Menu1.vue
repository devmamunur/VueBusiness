<template>
  <header class="header-one sticky-header">
    <div class="header-navigation">
      <div
        class="
          container-fluid
          mainmenu-wrapper
          container-1470
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <div class="header-left">
          <div class="site-logo">
            <router-link :to="{ name: 'Home' }"
              ><img v-lazy="`/uploads/${setting.header_logo_dark}`"
            /></router-link>
          </div>
        </div>
        <NavItem></NavItem>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import NavItem from "./NavItem";
export default {
  props: ["title"],
  components: {
    NavItem,
  },
  computed: {
    ...mapGetters({
      setting: "index/getSetting",
    }),
  },

};
</script>

<style>
</style>