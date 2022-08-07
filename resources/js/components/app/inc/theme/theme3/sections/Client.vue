<template>
    <div class="brand-section section-gap  soft-blue-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-slider" v-if="clients[0]">
                        <VueSlickCarousel v-bind="sliderSettings">
                            <template v-for="(client, i) in clients">
                                <a  :href="client.link" :key="i" class="brand-item">
                                    <img v-lazy="`/uploads/${client.image}`" :alt="client.name">
                                </a>
                            </template>

                        </VueSlickCarousel>
                    </div>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </div>
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
                slidesToScroll: 2,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2500,
                infinite: true,
                pauseOnHover: true,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]

            }
        };
    },
    components: { VueSlickCarousel },
    methods: {
        ...mapActions({
            getClientSection: "index/getClientSection"
        })
    },
    computed: {
        ...mapGetters({
            clients : "index/getClientSection"
        })
    },
    created(){
        this.getClientSection();
    }
};
</script>



