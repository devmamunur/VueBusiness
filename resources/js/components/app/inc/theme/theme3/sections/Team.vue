<template>
        <section class="team-area section-gap  position-relative">
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

        <div class="container">
            <div class="row team-members team-slider">

                <div class="col" v-if="teams[0]">
                    <VueSlickCarousel v-bind="sliderSettings">
                        <div class="slider-item" v-for="(team, i) in teams" :key="i">
                            <div class="team-member-three mb-30">
                                <div class="member-inner">
                                    <img v-lazy="`/uploads/${team.image}`" alt="">
                                    <div class="team-content">
                                        <h5 class="name"><router-link :to="{name: 'TeamDetails', params: { id: team.id } }">{{ team.name }}</router-link></h5>
                                        <span class="position">{{ team.dagenation }}</span>
                                    </div>
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
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2500,
                infinite: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
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



