<template>
     <section class="latest-news section-gap">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title text-center mb-30 wow fadeInUp" data-wow-delay="0.3s">
                        <span class="title-tag">{{ sectionInfo.blog_sub_title }}</span>
                        <h2 class="title">{{ sectionInfo.blog_title }}</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">

                <div v-for="(blog, i) in blogs" :key="i" class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="latest-news-box mt-30">
                        <div class="post-thumb">
                            <img v-lazy="`/uploads/${blog.image}`">
                        </div>
                        <div class="post-content">
                            <ul class="post-meta">
                                <li><span>{{ $t('By Admin') }},</span></li>
                                <li><span>{{ blog.created_at | timeFormat }}</span></li>
                            </ul>
                            <h4 class="title">
                                <router-link :to="{name: 'BlogDetails', params: { slug: blog.slug } }">
                                    {{ blog.title && blog.title.length > 40 ? blog.title.substring(0, 40)+"..." : blog.title }}
                                </router-link>
                            </h4>
                            <router-link :to="{name: 'BlogDetails', params: { slug: blog.slug } }" class="read-more-btn">{{ $t('Read More') }} <i class="fal fa-long-arrow-right"></i></router-link>
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
            getBlogSection: "index/getBlogSection"
        })
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            blogs : "index/getBlogSection"
        })
    },
    created(){
        this.getBlogSection();
    }
};
</script>



