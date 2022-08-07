<template>
  <!--====== Footer PART START ======-->
  <footer
    class="footer-area footer-area-two"
    v-lazy:background-image="`/uploads/${setting.footer_bg_image}`"
  >
    <div class="footer-overlay">
      <div class="container position-relative">
        <div class="row footer-widgets">
          <div class="col-lg-3 col-md-6">
            <div class="widget-item-1 mt-30">
              <img v-lazy="`/uploads/${setting.footer_logo}`" alt="" />
              <p>{{ setting.footer_text }}</p>
            </div>
            <!-- widget item 1 -->
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="widget-item-2 mt-30">
              <h4 class="title">{{ $t("Contact Us") }}</h4>
              <ul>
                <li>
                  <i class="far fa-clock"></i>
                  {{ setting.opening_hours }}
                </li>
                <li v-for="number in number" :key="number">
                  <a :href="`tel:${number}`" class="d-block"
                    ><i class="fas fa-headset"></i> {{ number }}</a
                  >
                </li>

                <li v-for="email in email2" :key="email">
                  <a :href="`mailto:${email}`" class="d-block"
                    ><i class="far fa-envelope"></i> {{ email }}</a
                  >
                </li>
              </ul>
            </div>
            <!-- widget item 3 -->
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="widget-item-2 mt-30">
              <h4 class="title">{{ $t("Links") }}</h4>
              <div class="footer-list">
                <ul>
                  <li v-for="(item, i) in footerLink" :key="i">
                    <a href="#" v-if="item.status == 'Public'"
                      ><i class="fal fa-angle-right"></i>{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- widget item 2 -->
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="widget-item-3 mt-30">
              <h4 class="title">{{ $t("Newletter") }}</h4>
              <div class="features-sub">
                <p>
                  {{
                    $t(
                      "Many aspects of computing and technology and the term is more recognizable than before."
                    )
                  }}
                </p>
                  <div class="input-box">
                    <input
                      type="email"
                      v-model="form.email"
                      :placeholder="$t('Enter your email')"
                    />

                    <button
                      class="main-btn"
                      @click="subscribeButton"
                    >
                      {{ $t("Subscribe Now") }}
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!-- row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-copyright">
              <div class="py-3">
                <p>{{ setting.copyright_text }}</p>
              </div>
            </div>
            <!-- footer copyright -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
  </footer>

  <!--====== Footer PART ENDS ======-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppFooter",
  data() {
    return {
      email2: [],
      number: [],
      form: {
        email: "",
      },
    };
  },

  methods: {
    ...mapActions({
      getFooterLink: "index/getFooterLink",
    }),
    subscribeButton() {
      axios
        .post("api/newsletters/submit/", this.form)
        .then((result) => {
          this.form = {};
          this.$notify({
            title: "Success",
            message: "Subscribe Successfully",
            type: "success",
          });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
  computed: {
    ...mapGetters({
      setting: "index/getSetting",
      footerLink: "index/getFooterLink",
    }),
  },
  watch: {
    setting() {
      this.email2 = JSON.parse(this.setting.email);
      this.number = JSON.parse(this.setting.number);
    },
  },
  created() {
    this.getFooterLink();
  },
};
</script>
