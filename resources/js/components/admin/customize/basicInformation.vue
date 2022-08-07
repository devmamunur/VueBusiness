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
                                            :label="`${$t('Theme Color')}`"
                                        >
                                            <el-color-picker v-model="form.base_color"></el-color-picker>
                                            <span
                                                class="text-danger"
                                                v-if="errors.base_color"
                                            >
                                                {{ errors.base_color[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Favicon')}`"
                                        >
                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-if="form.fav_icon && viewImage == null"
                                                :src="`/uploads/${form.fav_icon}`"
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
                                                v-if="errors.fav_icon"
                                            >
                                                {{ errors.fav_icon[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Site Header Logo')}`"
                                        >
                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-if="form.header_logo_dark && viewImage2 == null"
                                                :src="`/uploads/${form.header_logo_dark}`"
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
                                                v-if="errors.header_logo_dark"
                                            >
                                                {{ errors.header_logo_dark[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Breadcrumb Image')}`"
                                        >
                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-if="form.breadcrumb_image && viewImage3 == null"
                                                :src="`/uploads/${form.breadcrumb_image}`"
                                                alt=""
                                            />

                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-else
                                                :src="viewImage3"
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
                                                    @change="onFileSelected3"
                                                    id="about_image"
                                                />
                                            </div>
                                            <span
                                                class="text-danger"
                                                v-if="errors.breadcrumb_image"
                                            >
                                                {{ errors.breadcrumb_image[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Site Title')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.website_title"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.website_title"
                                            >
                                                {{ errors.website_title[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Meta Description')}`"
                                        >
                                            <textarea  class="form-control" rows="4"
                                                v-model="form.meta_description"
                                            ></textarea>
                                            <span
                                                class="text-danger"
                                                v-if="errors.meta_description"
                                            >
                                                {{ errors.meta_description[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Meta Keywords')}`"
                                        >
                                            <el-tag
                                                :key="keyword"
                                                v-for="keyword in form.meta_keywords"
                                                closable
                                                :disable-transitions="false"
                                                @close="handleClose(tag)"
                                            >
                                                {{ keyword }}
                                            </el-tag>
                                            <el-input
                                                class="input-new-tag"
                                                v-if="inputVisible"
                                                v-model="inputValue"
                                                ref="saveTagInput"
                                                size="mini"
                                                @keyup.enter.native="
                                                    handleInputConfirm
                                                "
                                                @blur="handleInputConfirm"
                                            >
                                            </el-input>
                                            <el-button
                                                v-else
                                                class="button-new-tag ml-2"
                                                size="small"
                                                @click="showInput"
                                                >+
                                                {{
                                                    $t("New Keyword")
                                                }}</el-button
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.meta_keywords"
                                            >
                                                {{ errors.meta_keywords[0] }}
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
            inputVisible: false,
            inputValue: "",
            viewImage: null,
            viewImage2: null,
            viewImage3: null,
            form: {
                meta_keywords: [],
                website_title: "",
                base_color: "",
                fav_icon: "",
                header_logo_dark: "",
                breadcrumb_image: "",
                meta_description: "",
            }
        };
    },
    methods: {
        handleClose(tag) {
            this.form.meta_keywords.splice(this.form.meta_keywords.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.form.meta_keywords.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = "";
        },
        onFileSelected(event) {
            let file = event.target.files[0];
            if (file.size > 1048770) {
                this.$notify({
                    title: "Success",
                    message: "Max Image Size 2 MB",
                    type: "warning"
                });
            } else {
                this.form.fav_icon = event.target.files[0];
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
                this.form.header_logo_dark = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                    this.viewImage2 = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        onFileSelected3(event) {
            let file = event.target.files[0];
            if (file.size > 1048770) {
                this.$notify({
                    title: "Success",
                    message: "Max Image Size 2 MB",
                    type: "warning"
                });
            } else {
                this.form.breadcrumb_image = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                    this.viewImage3 = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        Update() {
            let formData = new FormData();
            formData.append("fav_icon", this.form.fav_icon);
            formData.append("header_logo_dark", this.form.header_logo_dark);
            formData.append("breadcrumb_image", this.form.breadcrumb_image);
            formData.append("website_title", this.form.website_title);
            formData.append("base_color", this.form.base_color);
            formData.append("meta_keywords", this.form.meta_keywords);
            formData.append("meta_description", this.form.meta_description);

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
                    this.loading = false;
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
            this.form.fav_icon = this.setting.fav_icon;
            this.form.header_logo_dark = this.setting.header_logo_dark;
            this.form.breadcrumb_image = this.setting.breadcrumb_image;
            this.form.website_title = this.setting.website_title;
            this.form.base_color = this.setting.base_color;
            this.form.meta_keywords = JSON.parse(this.setting.meta_keywords);
            this.form.meta_description = this.setting.meta_description;
        }
    }
};
</script>
