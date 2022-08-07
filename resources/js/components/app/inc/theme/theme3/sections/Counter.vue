<template>
    <section class="counter-section secondary-bg pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div v-for="(counter, i) in counters" :key="i" class="col-lg-3 col-sm-6 wow fadeInLeft" data-wow-delay="0.3s">
                    <div :class="`counter-box color-${++i}`">
                        <div class="icon"><i :class="counter.icon"></i></div>
                        <span class="counter">{{ counter.number }}</span>
                        <h6 class="title">{{ counter.title }}</h6>
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
            getCounters: "index/getCounters"
        })
    },
    computed: {
        ...mapGetters({
            sectionInfo : "index/getSectionInfo",
            counters : "index/getCounters"
        })
    },
    created(){
        this.getCounters();
    }
};
</script>



