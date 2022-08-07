<template>
    <section class="counter-faq-section-one primary-bg section-gap">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6 col-md-10">
                    <div class="section-title white-color mb-50">
                         <span class="title-tag">{{ sectionInfo.faq_sub_title }}</span>
                        <h2 class="title">{{ sectionInfo.faq_title }}</h2>
                    </div>
                    <div class="accordion-one white-version" id="accordionExample">
                        <div class="card" v-for="(faq, i) in faqs" :key="i">
                            <div class="card-header" :id="`heading${i}`">
                                <a :class="i == 0 ? '' : 'collapsed'" href="" data-toggle="collapse" :data-target="`#collapse${i}`" :aria-expanded="i == 0 ? 'true' : 'false'" :aria-controls="`collapse${i}`">
                                      <i class="fal fa-long-arrow-right"></i>   {{ faq.title }}
                                 </a>
                            </div>

                            <div :id="`collapse${i}`" :class="i == 0 ? 'show' : ''+`collapse `" :aria-labelledby="`heading${i}`" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>{{ faq.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-10">
                    <div class="faq-counter-boxes-two row">
                        <div class="col-sm-6 wow fadeInUp" data-wow-delay="0.3s" v-for="(counter, i) in counters" :key="i">
                            <div class="counter-box-two counter-active">
                                <div class="counter-wrap">
                                    <span class="counter">{{ counter.number }}</span> <sup>{{ $t('+') }}</sup>
                                </div>
                                <span class="title">{{ counter.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="map-image">
            <img v-lazy="`/uploads/map.png`" alt="Map">
        </div>
    </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            getCounters: "index/getCounters",
            getFaqs: "index/getFaqs"
        })
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            counters : "index/getCounters",
            faqs : "index/getFaqs",
        })
    },
    created(){
        this.getCounters();
        this.getFaqs();
    }
};
</script>



