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
                                <router-link :to="{ name: 'FooterLinkList' }">
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
                                            :label="`${$t('Name')} *`"
                                            >
                                            <el-input
                                                v-model="form.name"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.name"
                                            >
                                                {{ errors.name[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('URL')} *`"
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
                                        <el-form-item
                                            :label="`${$t('Status')} *`"
                                        >
                                            <el-select
                                                v-model="form.status"
                                                :placeholder="
                                                    $t('Select Status')
                                                "
                                            >
                                                <el-option
                                                    key="Public"
                                                    label="Public"
                                                    value="Public"
                                                >
                                                </el-option>
                                                <el-option
                                                    key="Private"
                                                    label="Private"
                                                    value="Private"
                                                >
                                                </el-option>
                                            </el-select>
                                            <span
                                                class="text-danger d-block mb-2"
                                                v-if="errors.status"
                                            >
                                                {{ errors.status[0] }}
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
                name: "",
                url: "",
                status: ""
            }
        };
    },
    methods: {
        save() {
            this.loading = true;
            axios
                .post("/api/admin/footerlinks", this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "FooterLinkList" });
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
                .put(`/api/admin/footerlinks/${this.$route.params.id}`, this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "FooterLinkList" });
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
                "footerlink/editFooterlink",
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
        footerlink() {
            return this.$store.getters["footerlink/singleFooterlink"];
        }
    },
    watch: {
        footerlink() {
            this.form = this.footerlink;
        }
    }
};
</script>

