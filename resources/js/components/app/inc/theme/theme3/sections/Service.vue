<template>
    <section class="service-section-two section-gap soft-blue-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center mb-30 wow fadeInUp" data-wow-delay="0.3s">
                        <span class="title-tag">{{ sectionInfo.service_sub_title }}</span>
                        <h2 class="title">{{ sectionInfo.service_title }}</h2>
                    </div>
                </div>
            </div>

            <div class="row service-items justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-8" v-for="(service, i) in services" :key="i">
				<router-link :to="{name: 'ServiceDetails', params: { slug: service.slug } }" class="service-item-eight mb-30 d-block">
					<div class="service-img" v-lazy:background-image="`/uploads/${service.image}`" ></div>
					<div class="services-overlay">
						<div class="icon"><i :class="service.icon" ></i></div>
						<h4 class="title">{{ service.title }}</h4>
						<p>{{ service.content && service.content.length > 140 ? service.content.substring(0, 140)+"..." : service.content }}</p>
					</div>
				</router-link> <!-- single services -->
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



