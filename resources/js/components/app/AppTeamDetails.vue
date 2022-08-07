<template>
  <section class="team-area section-gap">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="team-details-thumb mb-md-gap-50">
            <img v-lazy="`/uploads/${team.image}`" />
          </div>
        </div>
        <div class="col-lg-6 col-md-10">
          <div class="team-details-content">
            <h4 class="title">{{ team.name }}</h4>
            <span>{{ team.dagenation }}</span>
            <p class="pb-15">
              {{ team.description }}
            </p>
            <ul>
              <li v-if="team.url1 && team.icon1">
                <a :href="team.url1">
                  <i :class="team.icon1"></i>
                </a>
              </li>
              <li v-if="team.url2 && team.icon2">
                <a :href="team.url2">
                  <i :class="team.icon2"></i>
                </a>
              </li>
              <li v-if="team.url3 && team.icon3">
                <a :href="team.url3">
                  <i :class="team.icon3"></i>
                </a>
              </li>
              <li v-if="team.url4 && team.icon4">
                <a :href="team.url4">
                  <i :class="team.icon4"></i>
                </a>
              </li>
              <li v-if="team.url5 && team.icon5">
                <a :href="team.url5">
                  <i :class="team.icon5"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    getSingleTeam() {
      this.$store.dispatch("index/getSingleTeam", this.$route.params.id);
    },
  },
  computed: {
    ...mapGetters({
      team: "index/getSingleTeam",
    }),
  },
  created() {
    this.getSingleTeam();
  },
};
</script>

<style>
</style>