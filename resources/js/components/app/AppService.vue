<template>
  <section class="service-section-two section-gap-top pb-90">
    <div class="container">
      <div class="row service-items justify-content-center">
        <template v-if="services[0]">
          <div
            v-for="(service, i) in services"
            :key="i"
            class="col-lg-4 col-md-6 col-sm-8"
          >
            <router-link
              :to="{ name: 'ServiceDetails', params: { slug: service.slug } }"
              class="service-item-eight mb-30 d-block"
            >
              <div
                class="service-img"
                v-lazy:background-image="`/uploads/${service.image}`"
              ></div>
              <div class="services-overlay">
                <div class="icon"><i :class="service.icon"></i></div>
                <h4 class="title">{{ service.title }}</h4>
                <p>
                  {{
                    service.content && service.content.length > 100
                      ? service.content.substring(0, 100) + "..."
                      : service.content
                  }}
                </p>
              </div>
            </router-link>
            <!-- single services -->
          </div>
        </template>
        <template v-else>
          <div
            v-for="(l, i) in 6"
            :key="i"
            class="col-lg-4 col-md-6 col-sm-8 mb-30"
          >
            <el-skeleton style="width: 100%">
              <template slot="template">
                <el-skeleton-item
                  variant="image"
                  style="width: 100%; height: 240px"
                />
                <div style="padding: 14px">
                  <el-skeleton-item variant="p" style="width: 50%" />
                  <div
                    style="display: flex; align-items: center; justify-items: space-between;"
                  >
                    <el-skeleton-item
                      variant="text"
                      style="margin-right: 16px"
                    />
                    <el-skeleton-item variant="text" style="width: 30%" />
                  </div>
                </div>
              </template>
            </el-skeleton>
          </div>
        </template>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      getServices: "index/getServices",
    }),
  },
  computed: {
    ...mapGetters({
      services: "index/getServices",
    }),
  },
  created() {
    this.getServices();
  },
};
</script>



