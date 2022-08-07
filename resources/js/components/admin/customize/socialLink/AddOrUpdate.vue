<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title mt-1">
                                {{
                                    $t(
                                        $route.name
                                            .replace(/([A-Z])/g, " $1")
                                            .trim()
                                    )
                                }}
                            </h3>
                            <div class="card-tools">
                                <router-link :to="{ name: 'SocialLinkList' }">
                                    <el-button type="primary" size="small">
                                        <i class="fas fa-angle-double-left"></i>
                                        {{ $t("Back") }}
                                    </el-button>
                                </router-link>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <el-form
                                        label-position="top"
                                        @submit.prevent="saveOrUpdate"
                                    >
                                        <el-form-item
                                            :label="`${$t('Icon - Font Awesome Icon Class')} *`"
                                            >
                                            <el-input
                                                v-model="form.icon"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.icon"
                                            >
                                                {{ errors.icon[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Link')} *`"
                                        >
                                            <el-input
                                                v-model="form.url"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.url"
                                            >
                                                {{ errors.url[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-button
                                            v-if="$route.params.id"
                                            @click.prevent="saveOrUpdate"
                                            type="primary"
                                            :loading="loading"
                                            >{{ $t("Update") }}</el-button
                                        >
                                        <el-button
                                            v-else
                                            @click.prevent="saveOrUpdate"
                                            type="primary"
                                            :loading="loading"
                                            >{{ $t("Save") }}</el-button
                                        >
                                    </el-form>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </section>
</template>

<script>

export default {
    name: "AddOrUpdate",
    data() {
        return {
            loading: false,
            errors: {},
            form: {
                icon: "",
                url: ""
            }
        };
    },
    methods: {
        save() {
            this.loading = true;
            axios
                .post("/api/admin/social-links", this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "SocialLinkList" });
                    this.$notify({
                        title: "Success",
                        message: "Data Added Successfully",
                        type: "success"
                    });
                })
                .catch(err => {
                    this.loading = false;
                    this.errors = err.response.data.errors;
                });
        },
        update() {
            this.loading = true;
            axios
                .put(`/api/admin/social-links/${this.$route.params.id}`, this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "SocialLinkList" });
                    this.$notify({
                        title: "Success",
                        message: "Data Updated Successfully",
                        type: "success"
                    });
                })
                .catch(err => {
                    this.loading = false;
                    this.errors = err.response.data.errors;
                });
        },
        saveOrUpdate() {
            if (this.form.id) {
                this.update();
            } else {
                this.save();
            }
        },
        edit() {
            this.$store.dispatch(
                "socialLink/editSocialLink",
                this.$route.params.id
            );
        }
    },
    created() {
        if (this.$route.params.id) {
            this.edit();
        }
    },
    computed: {
        socialLink() {
            return this.$store.getters["socialLink/singleSocialLink"];
        }
    },
    watch: {
        socialLink() {
            this.form = this.socialLink;
        }
    }
};
</script>

