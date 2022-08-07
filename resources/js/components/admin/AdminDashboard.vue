<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Services") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.service }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Portfolio") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.portfolio }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Team") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.team }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Testimonials") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.testimonial }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Blog") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.blog }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Client") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.client }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Package") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.package }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Gallery") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.gallery }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Job") }}</span>
              <h4 class="info-box-number font-weight-normal">{{ data.job }}</h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Job Application") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.application }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Quote") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.quote }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <div class="info-box bg-info">
            <span class="info-box-icon"
              ><i class="far fa-check-circle"></i
            ></span>

            <div class="info-box-content">
              <span class="info-box-text">{{ $t("Subsctiber") }}</span>
              <h4 class="info-box-number font-weight-normal">
                {{ data.subscriber }}
              </h4>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title mt-1">
                {{ $t("Latest Blog Post") }}
              </h3>
            </div>
            <div class="card-body">
              <template>
                <el-table
                  :data="data.blogPosts"
                  style="width: 100%"
                  border
                  fit
                  highlight-current-row
                >
                  <el-table-column property="image" :label="`${$t('Image')}`">
                    <template slot-scope="scope">
                      <img
                        :src="`/uploads/${scope.row.image}`"
                        alt=""
                        class="tImg"
                      />
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="bcategory_id"
                    :label="`${$t('Category')}`"
                  >
                    <template slot-scope="scope">{{
                      scope.row.bcategory.name
                    }}</template>
                  </el-table-column>
                  <el-table-column prop="title" label="title">
                  </el-table-column>
                </el-table>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    ...mapActions({
      getData: "dashboard/getData",
      getIsAdmin: "dashboard/getIsAdmin",
    }),
  },
  computed: {
    ...mapGetters({
      data: "dashboard/getData",
      getIsAdmindata: "dashboard/getIsAdmin",
    }),
  },
  created() {
    this.getIsAdmin();
    this.getData();
  },
  watch: {
    getIsAdmindata() {
      this.isAdmin = this.getIsAdmindata;
      if (this.getIsAdmindata == "no") {
        this.$router.push({ name: "AdminLogin" });
      }
    },
  },
  mounted() {
    // if (localStorage.getItem("reloaded")) {
    // The page was just reloaded. Clear the value from local storage
    // so that it will reload the next time this page is visited.
    //   localStorage.removeItem("reloaded");
    // } else {
    // Set a flag so that we know not to reload the page twice.
    //   localStorage.setItem("reloaded", "1");
    //   location.reload();
    // }
  },
};
</script>

<style></style>
