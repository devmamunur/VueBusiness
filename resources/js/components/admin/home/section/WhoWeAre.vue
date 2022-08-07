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
                                    >

                                        <el-form-item
                                            :label="`${$t('Title')}`"
                                        >


                                            <input type="text" v-model="form.w_we_are_title" >

                                            <el-input
                                                v-model="form.w_we_are_title"
                                            ></el-input>



                                            <span
                                                class="text-danger"
                                                v-if="errors.w_we_are_title"
                                            >
                                                {{ errors.w_we_are_title[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item
                                            :label="`${$t('Subtitle')}`"
                                        >
                                            <el-input
                                                v-model="form.w_we_are_sub_title"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.w_we_are_sub_title"
                                            >
                                                {{ errors.w_we_are_sub_title[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Text')}`"
                                        >
                                            <el-input
                                            type="textarea"
                                                v-model="form.w_we_are_text"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.w_we_are_text"
                                            >
                                                {{ errors.w_we_are_text[0] }}
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
                w_we_are_title: "",
                w_we_are_sub_title: "",
                w_we_are_text: ""
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
            this.form.w_we_are_title = this.sectiontitle.w_we_are_title;
            this.form.w_we_are_sub_title = this.sectiontitle.w_we_are_sub_title;
            this.form.w_we_are_text = this.sectiontitle.w_we_are_text;
        }

    }
};
</script>
