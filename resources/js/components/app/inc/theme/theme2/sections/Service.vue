<template>
  <div>
      <section class="service-section service-with-shape-two section-gap">
        <div class="container">
            <div class="section-title text-center mb-10">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9">
                        <span class="title-tag">{{ sectionInfo.service_sub_title }}</span>
                        <h2 class="title">{{ sectionInfo.service_title }}</h2>
                    </div>
                </div>
                <div class="ring-shape"></div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-9 wow fadeInLeft" data-wow-delay="0.3s" v-for="(service, i) in services" :key="i">
                    <div class="service-item-four no-border mt-50">
                        <div class="services-thumb">
                            <img v-lazy="`/uploads/${service.image}`"  alt="Service-Image">
                        </div>
                        <div class="services-content">
                            <div class="icon">
                                <i :class="service.icon"></i>
                            </div>

                            <h4 class="title">{{ service.title }}</h4>
                            <p>{{ service.content && service.content.length > 140 ? service.content.substring(0, 140)+"..." : service.content }}</p>
                            <router-link :to="{name: 'ServiceDetails', params: { slug: service.slug } }" class="service-link">
                                {{ $t('Read More') }} <i class="fal fa-long-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            getServiceSection: "index/getServiceSection"
        })
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            services : "index/getServiceSection"
        })
    },
    created(){
        this.getServiceSection();
    }
};
</script>



