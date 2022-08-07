<template>
  <div>
    <section class="contact-info-section section-gap section-gap-bottom-90">
      <div class="container">
        <div class="row align-items-center contact-info-items">
          <div class="col-lg-3 col-md-6">
            <div class="contact-info-item text-center">
              <div>
                <i class="fal fa-phone"></i>
                <h5 class="title">{{ $t("Phone Number") }}</h5>
                <span v-if="setting.number">
                    <p v-for="number in JSON.parse(setting.number)" :key="number">
                        {{ number }}
                    </p>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="contact-info-item text-center">
              <div>
                <i class="fal fa-envelope"></i>
                <h5 class="title">{{ $t("Email Address") }}</h5>
                <span v-if="setting.email">
                     <p v-for="email in JSON.parse(setting.email)" :key="email">
                         {{ email }}
                    </p>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="contact-info-item text-center">
              <div>
                <i class="fal fa-map"></i>
                <h5 class="title">{{ $t("Office Location") }}</h5>
                <p>{{ setting.address }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="contact-info-item text-center">
              <div>
                <i class="fal fa-globe"></i>
                <h5 class="title">{{ $t("Social Network") }}</h5>
                <div
                  class="s-links"
                  v-for="(socialLink, i) in socialLinks"
                  :key="i"
                >
                  <a :href="socialLink.url"><i :class="socialLink.icon"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-map-section section-gap soft-blue-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div
              class="
                section-title
                text-center
                mb-45
                about-history-areawow
                fadeInUp
              "
              data-wow-delay="0.3s"
            >
              <span class="title-tag">{{ sectionInfo.contact_sub_title }}</span>
              <h2 class="title">{{ sectionInfo.contact_title }}</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="form-area">
              <div class="row">
                <div class="col-md-6 mb-30">
                  <div class="input-group">
                    <input
                      type="text"
                      v-model="form.name"
                      :placeholder="`${$t('Name')} *`"
                    />
                    <span class="text-danger" v-if="errors.name">
                      {{ errors.name[0] }}
                    </span>
                  </div>
                </div>
                <div class="col-md-6 mb-30">
                  <div class="input-group">
                    <input
                      type="email"
                      v-model="form.email"
                      :placeholder="`${$t('Email')} *`"
                    />
                    <span class="text-danger" v-if="errors.email">
                      {{ errors.email[0] }}
                    </span>
                  </div>
                </div>
                <div class="col-md-6 mb-30">
                  <div class="input-group">
                    <input
                      type="text"
                      v-model="form.phone"
                      :placeholder="`${$t('Phone')} *`"
                    />
                    <span class="text-danger" v-if="errors.phone">
                      {{ errors.phone[0] }}
                    </span>
                  </div>
                </div>
                <div class="col-md-6 mb-30">
                  <div class="input-group">
                    <input
                      type="text"
                      v-model="form.subject"
                      :placeholder="`${$t('Subject')} *`"
                    />
                    <span class="text-danger" v-if="errors.subject">
                      {{ errors.subject[0] }}
                    </span>
                  </div>
                </div>
                <div class="col-md-12 mb-30">
                  <div class="input-group textarea-group">
                    <textarea
                      v-model="form.message"
                      cols="30"
                      rows="10"
                      :placeholder="`${$t('Message')} *`"
                    ></textarea>
                    <span class="text-danger" v-if="errors.message">
                      {{ errors.message[0] }}
                    </span>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group d-block text-center">
                    <button class="main-btn" @click.prevent="contactSubmit">
                      <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span>
                      {{ $t("Send Message") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      errors: {},
      loading: false,
      form: {},
    };
  },
  methods: {
    contactSubmit() {
      this.loading = true;
      axios
        .post("/api/contact/submit", this.form)
        .then((result) => {
          this.loading = false;
          this.form = null;
          this.$router.push({ name: "Home" });
          this.$notify({
            title: "Success",
            message: "Form Submitted Successfully",
            type: "success",
          });
        })
        .catch((err) => {
          this.loading = false;
          this.errors = err.response.data.errors;
        });
    },
  },
  computed: {
    ...mapGetters({
      setting : "index/getSetting",
      sectionInfo: "index/getSectionInfo",
      socialLinks: "index/getSocialLinks",
    }),
  }
};
</script>

<style>
</style>