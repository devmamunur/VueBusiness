<template>
    <div>
        <Slider v-if="visibility.is_t1_slider_section"></Slider>
        <About v-if="visibility.is_t1_about_section"></About>
        <ChooseUs v-if="visibility.is_t1_who_we_are_section"></ChooseUs>
        <Service v-if="visibility.is_t1_service_section"></Service>
        <Portfolio v-if="visibility.is_t1_portfolio_section"></Portfolio>
        <Team v-if="visibility.is_t1_team_section"></Team>
        <Counter v-if="visibility.is_t1_counter_section"></Counter>
        <Testimonial v-if="visibility.is_t1_testimonial_section"></Testimonial>
        <Meet v-if="visibility.is_t1_meet_us_section"></Meet>
        <Blog v-if="visibility.is_t1_blog_section"></Blog>
        <Client v-if="visibility.is_t1_clint_section"></Client>
    </div>
</template>

<script>
import Slider from './sections/Slider'
import About from './sections/About'
import ChooseUs from './sections/ChooseUs'
import Service from './sections/Service'
import Portfolio from './sections/Portfolio'
import Team from './sections/Team'
import Counter from './sections/Counter'
import Testimonial from './sections/Testimonial'
import Meet from './sections/Meet'
import Blog from './sections/Blog'
import Client from './sections/Client'
import { mapGetters } from 'vuex'
export default {

    components : {
        Slider,
        About,
        ChooseUs,
        Service,
        Portfolio,
        Team,
        Counter,
        Testimonial,
        Meet,
        Blog,
        Client,
    },
        computed: {
        ...mapGetters({
            visibility : "index/getVisibility",
        })
    },
}
</script>

<style>

</style>