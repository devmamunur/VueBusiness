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
                                                v-if="form.about_image && viewImage == null"
                                                :src="`/uploads/${form.about_image}`"
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
                                                v-if="errors.about_image"
                                            >
                                                {{ errors.about_image[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Title')}`"
                                        >
                                            <input type="text" class="form-control" v-model="form.about_title">
                                            <span
                                                class="text-danger"
                                                v-if="errors.about_title"
                                            >
                                                {{ errors.about_title[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Subtitle')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.about_sub_title"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.about_sub_title"
                                            >
                                                {{ errors.about_sub_title[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Text')}`"
                                        >
                                            <textarea class="form-control" rows="5" v-model="form.about_text"
                                            ></textarea>
                                            <span
                                                class="text-danger"
                                                v-if="errors.about_text"
                                            >
                                                {{ errors.about_text[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Experince Years')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.about_experince_yers"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.about_experince_yers"
                                            >
                                                {{ errors.about_experince_yers[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Video Link')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.about_intro_video"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.about_intro_video"
                                            >
                                                {{ errors.about_intro_video[0] }}
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
            form: {
                about_image: "",
                about_title: "",
                about_sub_title: "",
                about_text: "",
                about_experince_yers: "",
                about_intro_video : ""
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
                this.form.about_image = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                    this.viewImage = event.target.result;
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
            formData.append("about_image", this.form.about_image);
            formData.append("about_title", this.form.about_title);
            formData.append("about_sub_title", this.form.about_sub_title);
            formData.append("about_text", this.form.about_text);
            formData.append("about_experince_yers", this.form.about_experince_yers);
            formData.append("about_intro_video", this.form.about_intro_video);

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
            this.form.about_image = this.sectiontitle.about_image;
            this.form.about_title = this.sectiontitle.about_title;
            this.form.about_sub_title = this.sectiontitle.about_sub_title;
            this.form.about_text = this.sectiontitle.about_text;
            this.form.about_experince_yers = this.sectiontitle.about_experince_yers;
            this.form.about_intro_video = this.sectiontitle.about_intro_video;
        }
    }
};
</script>
