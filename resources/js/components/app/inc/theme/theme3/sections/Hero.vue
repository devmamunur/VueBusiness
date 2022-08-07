<template>
    <div class="banner-section home2" :style="{ 'background-image': `url(/images/banner-gradient-bg.png` }">
        <div class="container position-relative">
            <div class="row">
                <div class="col-lg-7">
                    <div class="banner-content pt-100">
                        <span class="title-tag wow fadeInDown" data-wow-delay="0.3s">{{ sectionInfo.hero_sub_title }}</span>
                        <h1 class="title wow fadeInLeft" data-wow-delay="0.5s">{{ sectionInfo.hero_title }}</h1>
                        <ul class="banner-btns">

                            <li v-if="sectionInfo.hero_f_icon1 && sectionInfo.hero_f_text1" class="wow fadeInUp" data-wow-delay="0.7s">
                                <a class="btn-1" href="#">
                                    <span class="icon"><i :class="sectionInfo.hero_f_icon1"></i></span>
                                    <span>{{ sectionInfo.hero_f_text1 }}</span>
                                </a>
                            </li>

                            <li v-if="sectionInfo.hero_f_icon2 && sectionInfo.hero_f_text2" class="wow fadeInUp">
                                <a class="btn-2" href="#">
                                    <span class="icon"><i :class="sectionInfo.hero_f_icon2"></i></span>
                                    <span>{{ sectionInfo.hero_f_text2 }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="banner-img">
                <img :src="`/uploads/${sectionInfo.hero_image}`" alt="">
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo"
        })
    }
};
</script>

<style></style>
