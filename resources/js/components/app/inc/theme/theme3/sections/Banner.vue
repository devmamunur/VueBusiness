<template>
    <section class="call-to-action" v-lazy:background-image="`/uploads/${sectionInfo.meeet_us_bg_image}`" >
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-7 col-md-8">
                    <div class="section-title white-color">
                        <h2 class="title">
                            {{ sectionInfo.meeet_us_text }}
                        </h2>
                    </div>
                </div>
                <div class="col-auto">
                    <a href="#" class="main-btn main-btn-3 rounded-btn mt-md-gap-30"> <i class="fal fa-comments"></i>
                    {{ sectionInfo.meeet_us_button_text }}</a>
                </div>
            </div>
        </div>
    </section>
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



