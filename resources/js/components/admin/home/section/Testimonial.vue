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
                                            :label="`${$t('Title')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.testimonial_title"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.testimonial_title"
                                            >
                                                {{ errors.testimonial_title[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Subtitle')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.testimonial_subtitle"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.testimonial_subtitle"
                                            >
                                                {{ errors.testimonial_subtitle[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-button
                                            @click.prevent="Update"
                                            type="primary"
                                            :loading="loading"
                                            >{{ $t("Update") }}</el-button
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
    name: "About",
    data() {
        return {
            loading: false,
            errors: {},
            form: {
                testimonial_title: "",
                testimonial_subtitle: ""
            }
        };
    },
    methods: {
        handelDataChange() {
            this.$store
                .dispatch("sectiontitle/sectionTitle")
                .then(result => {
                    this.loading = false;
                });
        },
        Update() {
            this.loading = true;
            axios
                .post(`/api/admin/sectiontitles/update/`, this.form)
                .then(result => {
                    this.$notify({
                        title: "Success",
                        message: "Data Updated Successfully",
                        type: "success"
                    });
                    this.errors = {};
                    this.form = {};
                    this.handelDataChange();
                })
                .catch(err => {
                    this.loading = false;
                    this.errors = err.response.data.errors;
                });
        },
        edit() {
            this.$store.dispatch("sectiontitle/sectionTitle");
        }
    },
    created() {
        this.edit();
    },
    computed: {
        sectiontitle() {
            return this.$store.getters["sectiontitle/sectionTitle"];
        }
    },
    watch: {
        sectiontitle() {
            this.form.testimonial_title = this.sectiontitle.testimonial_title;
            this.form.testimonial_subtitle = this.sectiontitle.testimonial_subtitle;
        }
    }
};
</script>
