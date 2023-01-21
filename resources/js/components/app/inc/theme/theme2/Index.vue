<template>
  <div>
    <Slider v-if="visibility.is_t2_slider_section"></Slider>
    <ChooseUs v-if="visibility.is_t2_who_we_are_section"></ChooseUs>
    <Service v-if="visibility.is_t2_service_section"></Service>
    <Portfolio v-if="visibility.is_t2_portfolio_section"></Portfolio>
    <Team v-if="visibility.is_t2_team_section"></Team>
    <Testimonial v-if="visibility.is_t2_testimonial_section"></Testimonial>
    <Counter v-if="visibility.is_t2_faq_section"></Counter>
    <Blog v-if="visibility.is_t2_news_section"></Blog>
    <Brand v-if="visibility.is_t2_client_section"></Brand>
  </div>
</template>

<script>
import Slider from "./sections/Slider";
import Brand from "./sections/Brand";
import ChooseUs from "./sections/ChooseUs";
import Service from "./sections/Service";
import Portfolio from "./sections/Portfolio";
import Team from "./sections/Team";
import Testimonial from "./sections/Testimonial";
import Counter from "./sections/Counter";
import Blog from "./sections/Blog";
import { mapGetters } from 'vuex';
export default {
  components: {
    Slider,
    Brand,
    ChooseUs,
    Service,
    Portfolio,
    Team,
    Testimonial,
    Counter,
    Blog,
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