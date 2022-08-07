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
                                            :label="`${$t('Video Activation')}`"
                                        >

                                            <el-switch
                                            v-model="form.is_video_hero"
                                            active-value="1"
                                            inactive-value="0"
                                            :active-text="`${$t('Active')}`"
                                            :inactive-text="`${$t('Deactivate')}`"
                                            >
                                            </el-switch>

                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Video Link')}`"
                                        >
                                            <input
                                                    type="file"
                                                    @change="onFileSelected"
                                                />
                                            <span
                                                class="text-danger"
                                                v-if="errors.hero_section_video_link"
                                            >
                                                {{ errors.hero_section_video_link[0] }}
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
    name: "Video",
    data() {
        return {
            loading: false,
            errors: {},
            form: {
                is_video_hero: "",
                hero_section_video_link: ""
            }
        };
    },
    methods: {
         onFileSelected(event) {
            this.form.hero_section_video_link = event.target.files[0];
        },
        Update() {
            // this.loading = true;
            let formData = new FormData();

            formData.append("hero_section_video_link", this.form.hero_section_video_link);

            axios
                .post(`/api/admin/settings/update/`,formData)
                .then(result => {
                    this.$notify({
                        title: "Success",
                        message: "Data Updated Successfully",
                        type: "success"
                    });
                    this.errors = {};
                    this.loading = false;
                })
                .catch(err => {
                    this.loading = false;
                    this.errors = err.response.data.errors;
                });
        },
        edit() {
            this.$store.dispatch("setting/settingList");
            this.$store.dispatch("visibility/visibilityList");
        }
    },
    created() {
        this.edit();
    },
    computed: {
        setting() {
            return this.$store.getters["setting/settingList"];
        },
        visibility() {
            return this.$store.getters["visibility/visibilityList"];
        }
    },
    watch: {
        setting() {
            this.form.hero_section_video_link = this.setting.hero_section_video_link;
        },
        visibility() {
            this.form.is_video_hero = this.visibility.is_video_hero.toString();
        }
    }
};
</script>
