<template>
    <div class="faq-section section-gap">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-10">
                        <div class="accordion-three accordion-three-two" id="accordionExample">
                            <div class="card" v-for="(faq, i) in faqs" :key="i">
                                <div class="card-header" :id="`heading${i}`">
                                    <a :class="i == 0 ? '' : 'collapsed'" href="" data-toggle="collapse" :data-target="`#collapse${i}`" :aria-expanded="i == 0 ? 'true' : 'false'" :aria-controls="`collapse${i}`">
                                        {{ faq.title }}
                                    </a>
                                </div>

                                <div :id="`collapse${i}`" :class="i == 0 ? 'show' : ''+`collapse `" :aria-labelledby="`heading${i}`" data-parent="#accordionExample">
                                    <div class="card-body">
                                        {{ faq.content }}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="col-lg-6">
                    <div class="faq-video-thumb-area">
                        <div class="tile-gallery-three mt-md-gap-50">
                            <div class="img-one"> <img v-lazy="`/uploads/${sectionInfo.faq_image2}`" alt="Image"> </div>
                            <div class="img-two text-right"> <img v-lazy="`/uploads/${sectionInfo.faq_image1}`" alt="Image"> </div>
                        </div>
                    </div>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </div>
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
            faqs : "index/getFaqs",
            sectionInfo : "index/getSectionInfo",
        })
    },
    created(){
        this.getFaqs();
    }
};
</script>



