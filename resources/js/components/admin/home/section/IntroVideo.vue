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
                                            :label="`${$t('Image')}`"
                                        >
                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-if="form.video_image && viewImage == null"
                                                :src="`/uploads/${form.video_image}`"
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
                                                v-if="errors.video_image"
                                            >
                                                {{ errors.video_image[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Section BG Image')}`"
                                        >
                                            <img
                                                class="mw-300 mb-3 img-demo"
                                                v-if="form.video_bg_image && viewImage2 == null"
                                                :src="`/uploads/${form.video_bg_image}`"
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
                                                v-if="errors.video_bg_image"
                                            >
                                                {{ errors.video_bg_image[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Title')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.video_title"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.video_title"
                                            >
                                                {{ errors.video_title[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Subtitle')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.video_sub_title"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.video_sub_title"
                                            >
                                                {{ errors.video_sub_title[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Text')}`"
                                        >
                                            <textarea class="form-control" rows="5"
                                                v-model="form.video_text"
                                            ></textarea>
                                            <span
                                                class="text-danger"
                                                v-if="errors.video_text"
                                            >
                                                {{ errors.video_text[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Content')}`"
                                        >
                                            <textarea class="form-control" rows="5"
                                                v-model="form.video_content"
                                            ></textarea>
                                            <span
                                                class="text-danger"
                                                v-if="errors.video_content"
                                            >
                                                {{ errors.video_content[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Video Link')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.video_link"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.video_link"
                                            >
                                                {{ errors.video_link[0] }}
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
            viewImage: null,
            viewImage2: null,
            form: {
                video_image: "",
                video_bg_image: "",
                video_title: "",
                video_sub_title : "",
                video_text : "",
                video_content : "",
                video_link : ""
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
                this.form.video_image = event.target.files[0];
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
                this.form.video_bg_image = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                    this.viewImage2 = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        handelDataChange() {
            this.$store
                .dispatch("sectiontitle/sectionTitle")
                .then(result => {
                    this.loading = false;
                });
        },
        Update() {
            let formData = new FormData();
            formData.append("video_image", this.form.video_image);
            formData.append("video_bg_image", this.form.video_bg_image);
            formData.append("video_title", this.form.video_title);
            formData.append("video_sub_title", this.form.video_sub_title);
            formData.append("video_text", this.form.video_text);
            formData.append("video_content", this.form.video_content);
            formData.append("video_link", this.form.video_link);

            this.loading = true;
            axios
                .post(`/api/admin/sectiontitles/update/`, formData)
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
            this.form.video_image = this.sectiontitle.video_image;
            this.form.video_bg_image = this.sectiontitle.video_bg_image;
            this.form.video_title = this.sectiontitle.video_title;
            this.form.video_sub_title = this.sectiontitle.video_sub_title;
            this.form.video_text = this.sectiontitle.video_text;
            this.form.video_content = this.sectiontitle.video_content;
            this.form.video_link = this.sectiontitle.video_link;
        }
    }
};
</script>
