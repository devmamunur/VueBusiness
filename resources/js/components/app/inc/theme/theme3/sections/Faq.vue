<template>
    <section class="counter-faq-section section-gap ">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-10">
                    <div class="section-title mb-50">
                         <span class="title-tag">{{ sectionInfo.faq_sub_title }}</span>
                        <h2 class="title">{{ sectionInfo.faq_title }}</h2>
                    </div>
                    <div class="accordion-two" id="accordionExample">
                        <div class="card" v-for="(faq, i) in faqs" :key="i">
                            <div class="card-header" :id="`heading${i}`">
                                <a :class="i == 0 ? '' : 'collapsed'" href="" data-toggle="collapse" :data-target="`#collapse${i}`" :aria-expanded="i == 0 ? 'true' : 'false'" :aria-controls="`collapse${i}`">
                                      {{ faq.title }}
                                 </a>
                            </div>

                            <div :id="`collapse${i}`" :class="i == 0 ? 'show' : ''+`collapse `" :aria-labelledby="`heading${i}`"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>{{ faq.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-10">
                    <div class="tile-gallery-three mt-md-gap-50">
                        <div class="img-one wow fadeInRight" data-wow-delay="0.4s">
                            <img v-lazy="`/uploads/${sectionInfo.faq_image2}`"  alt="">
                        </div>
                        <div class="img-two text-right wow fadeInUp" data-wow-delay="0.4s">
                            <img  v-lazy="`/uploads/${sectionInfo.faq_image1}`"  alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            getFaqs: "index/getFaqs"
        })
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            faqs : "index/getFaqs",
        })
    },
    created(){
        this.getFaqs();
    }
};
</script>

<style>

</style>