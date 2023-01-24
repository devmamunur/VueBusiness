<template>
  <div class="leadership-area section-gap">
    <div class="container">
      <div class="row">
        <template v-if="teams.data[0]">
          <div
            v-for="(team, i) in teams.data"
            :key="i"
            class="col-lg-4 col-md-6 col-sm-6"
          >
            <div class="team-member mb-30">
              <div class="member-photo">
                <img v-lazy="`/uploads/${team.image}`" />
                <div class="social-icon">
                  <a v-if="team.url1 && team.icon1" :href="team.url1">
                    <i :class="team.icon1"></i>
                  </a>
                  <a v-if="team.url2 && team.icon2" :href="team.url2">
                    <i :class="team.icon2"></i>
                  </a>
                  <a v-if="team.url3 && team.icon3" :href="team.url3">
                    <i :class="team.icon3"></i>
                  </a>
                  <a v-if="team.url4 && team.icon4" :href="team.url4">
                    <i :class="team.icon4"></i>
                  </a>
                  <a v-if="team.url5 && team.icon5" :href="team.url5">
                    <i :class="team.icon5"></i>
                  </a>
                </div>
              </div>
              <div class="team-content">
                <h5 class="name">
                  <router-link
                    :to="{ name: 'TeamDetails', params: { id: team.id } }"
                    >{{ team.name }}</router-link
                  >
                </h5>
                <span class="position">{{ team.dagenation }}</span>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            v-for="(l, i) in 6"
            :key="i"
            class="col-lg-4 col-md-6 col-sm-6 mb-30"
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
                    style="display: flex;
                      align-items: center;
                      justify-items: space-between;
                    "
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
      <div class="row mt-30" v-if="teams.meta">
        <div class="col-lg-12 text-center">
          <div class="d-inline-block">
            <el-pagination
              class="text-center mt-4"
              background
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="teams.meta.per_page"
              layout="prev, pager, next"
              :total="teams.meta.total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    handleCurrentChange() {
      this.$store.dispatch("index/getTeams", this.currentPage);
    },
    getTeams() {
      this.$store.dispatch("index/getTeams", this.currentPage);
    },
  },
  computed: {
    ...mapGetters({
      teams: "index/getTeams",
    }),
  },
  created() {
    this.getTeams();
  },
};
</script>



