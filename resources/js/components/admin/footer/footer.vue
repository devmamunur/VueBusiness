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
                                            :label="`${$t('Footer Logo')}`"
                                        >
                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-if="form.footer_logo && viewImage == null"
                                                :src="`/uploads/${form.footer_logo}`"
                                                alt=""
                                            />

                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-else
                                                :src="viewImage"
                                                alt=""
                                            />

                                            <!--  -->
                                            <div class="custom-file">
                                                <label
                                                    class="custom-file-label"
                                                    for="about_image"
                                                    >{{
                                                        $t("Choose Image")
                                                    }}</label
                                                >
                                                <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    @change="onFileSelected"
                                                    id="about_image"
                                                />
                                            </div>
                                            <span
                                                class="text-danger"
                                                v-if="errors.footer_logo"
                                            >
                                                {{ errors.footer_logo[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Footer BG Image')}`"
                                        >
                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-if="form.footer_bg_image && viewImage2 == null"
                                                :src="`/uploads/${form.footer_bg_image}`"
                                                alt=""
                                            />

                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-else
                                                :src="viewImage2"
                                                alt=""
                                            />

                                            <!--  -->
                                            <div class="custom-file">
                                                <label
                                                    class="custom-file-label"
                                                    for="about_image"
                                                    >{{
                                                        $t("Choose Image")
                                                    }}</label
                                                >
                                                <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    @change="onFileSelected2"
                                                    id="about_image"
                                                />
                                            </div>
                                            <span
                                                class="text-danger"
                                                v-if="errors.footer_bg_image"
                                            >
                                                {{ errors.footer_bg_image[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Footer Text')}`"
                                        >
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.footer_text"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.footer_text"
                                            >
                                                {{ errors.footer_text[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Copyright Text')}`"
                                        >
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.copyright_text"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.copyright_text"
                                            >
                                                {{ errors.copyright_text[0] }}
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
    name: "Footer",
    data() {
        return {
            loading: false,
            errors: {},
            viewImage: null,
            viewImage2: null,
            form: {
                footer_logo: "",
                footer_bg_image: "",
                footer_text: "",
                copyright_text: ""
            }
        };
    },
    methods: {
        onFileSelected(event) {
            let file = event.target.files[0];
            if (file.size > 1048770) {
                this.$notify({
                    title: "Success",
                    message: "Max Image Size 2 MB",
                    type: "warning"
                });
            } else {
                this.form.footer_logo = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                    this.viewImage = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        onFileSelected2(event) {
            let file = event.target.files[0];
            if (file.size > 1048770) {
                this.$notify({
                    title: "Success",
                    message: "Max Image Size 2 MB",
                    type: "warning"
                });
            } else {
                this.form.footer_bg_image = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                    this.viewImage2 = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        handelDataChange() {
            this.$store
                .dispatch("setting/settingList")
                .then(result => {
                    this.loading = false;
                });
        },
        Update() {
            let formData = new FormData();
            formData.append("footer_logo", this.form.footer_logo);
            formData.append("footer_bg_image", this.form.footer_bg_image);
            formData.append("footer_text", this.form.footer_text);
            formData.append("copyright_text", this.form.copyright_text);

            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, formData)
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
            this.$store.dispatch("setting/settingList");
        }
    },
    created() {
        this.edit();
    },
    computed: {
        setting() {
            return this.$store.getters["setting/settingList"];
        }
    },
    watch: {
        setting() {
            this.form.footer_logo = this.setting.footer_logo;
            this.form.footer_bg_image = this.setting.footer_bg_image;
            this.form.footer_text = this.setting.footer_text;
            this.form.copyright_text = this.setting.copyright_text;
        }
    }
};
</script>
