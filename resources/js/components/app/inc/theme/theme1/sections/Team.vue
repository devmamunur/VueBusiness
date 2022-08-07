<template>
        <section class="team-area section-gap-top pb-90 overflow-hidden">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center mb-60">
                        <span class="title-tag">{{  sectionInfo.team_sub_title  }}</span>
                        <h2 class="title">{{  sectionInfo.team_title  }}</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid p-0">
            <div class="row team-members team-slider">

                <div class="col" v-if="teams[0]">
                    <VueSlickCarousel v-bind="sliderSettings">
                        <div class="slider-item" v-for="(team, i) in teams" :key="i">
                            <div class="team-member mb-30">
                                <div class="member-photo">
                                    <img v-lazy="`/uploads/${team.image}`">
                                    <div class="social-icon">
                                        <a v-if="team.url1 && team.icon1" :href="team.url1">
                                            <i :class="team.icon1"></i>
                                        </a>
                                        <a v-if="team.url2 && team.icon2" :href="team.url2">
                                            <i :class="team.icon2"></i>
                                        </a>
                                        <a v-if="team.url3 && team.icon3" :href="team.url3">
                                            <i :class="team.icon3"></i>
                                        </a>
                                        <a v-if="team.url4 && team.icon4" :href="team.url4">
                                            <i :class="team.icon4"></i>
                                        </a>
                                        <a v-if="team.url5 && team.icon5" :href="team.url5">
                                            <i :class="team.icon5"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="team-content">
                                    <h5 class="name"><router-link :to="{name: 'TeamDetails', params: { id: team.id } }">{{ team.name }}</router-link></h5>
                                    <span class="position">{{ team.dagenation }}</span>
                                </div>
                            </div>
                        </div>
                        <template #prevArrow>
                            <div class="custom-arrow">
                                <i class="fal fa-angle-left"></i>
                            </div>
                        </template>
                        <template #nextArrow>
                            <div class="custom-arrow">
                                <i class="fal fa-angle-right"></i>
                            </div>
                        </template>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueSlickCarousel from "vue-slick-carousel";
export default {
    data() {
        return {
            sliderSettings: {
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2500,
                infinite: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]

            }
        };
    },
    methods: {
        ...mapActions({
            getTeamSection: "index/getTeamSection"
        })
    },
    components: { VueSlickCarousel },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            teams : "index/getTeamSection"
        })
    },
    created(){
        this.getTeamSection();
    }
};
</script>



