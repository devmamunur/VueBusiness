<template>
  <div>
    <Hero v-if="visibility.is_t3_hero_section"></Hero>
    <About v-if="visibility.is_t3_about_section"></About>
    <Service v-if="visibility.is_t3_service_section"></Service>
    <Intro v-if="visibility.is_t3_intro_video_section"></Intro>
    <Team v-if="visibility.is_t3_team_section"></Team>
    <Counter v-if="visibility.is_t3_counter_section"></Counter>
    <Testimonial v-if="visibility.is_t3_testimonial_section"></Testimonial>
    <Faq v-if="visibility.is_t3_faq_section"></Faq>
    <Banner v-if="visibility.is_t3_meet_us_section"></Banner>
    <Blog v-if="visibility.is_t3_news_section"></Blog>
    <Client v-if="visibility.is_t3_client_section"></Client>
  </div>
</template>

<script>
import Hero from "./sections/Hero";
import About from "./sections/About";
import Service from "./sections/Service";
import Intro from "./sections/Intro";
import Team from "./sections/Team";
import Counter from "./sections/Counter";
import Testimonial from "./sections/Testimonial";
import Faq from "./sections/Faq";
import Banner from "./sections/Banner";
import Blog from "./sections/Blog";
import Client from "./sections/Client";
import { mapGetters } from 'vuex';
export default {
  components: {
    Hero,
    About,
    Service,
    Intro,
    Team,
    Counter,
    Testimonial,
    Faq,
    Banner,
    Blog,
    Client,
  },
    computed: {
    ...mapGetters({
      visibility: "index/getVisibility",
    }),
  },
};
</script>

<style>
</style>