<template>
   <section class="team-area section-gap">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center mb-30 wow fadeInUp" data-wow-delay="0.3s">
                        <span class="title-tag">{{ sectionInfo.team_sub_title }}</span>
                        <h2 class="title">{{ sectionInfo.team_title }}</h2>
                    </div>
                </div>
            </div>
            <div class="row  justify-content-center">
                <div class="col-lg-3 col-md-4 col-sm-6" v-for="(team, i) in teams" :key="i">
                    <router-link :to="{name: 'TeamDetails', params: { id: team.id } }" class="team-member-four text-center mt-30">
                        <div class="member-photo">
                            <img v-lazy="`/uploads/${team.image}`" alt="">
                        </div>
                        <div class="member-content">
                            <h5 class="title"><a href="#">{{ team.name }}</a></h5>
                            <span class="position">{{ team.dagenation }}</span>
                        </div>
                    </router-link>
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



