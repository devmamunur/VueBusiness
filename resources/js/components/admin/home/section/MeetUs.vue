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
                                                v-if="form.meeet_us_bg_image && viewImage == null"
                                                :src="`/uploads/${form.meeet_us_bg_image}`"
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
                                                v-if="errors.meeet_us_bg_image"
                                            >
                                                {{ errors.meeet_us_bg_image[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Title')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.meeet_us_text"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.meeet_us_text"
                                            >
                                                {{ errors.meeet_us_text[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Button Text')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.meeet_us_button_text"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.meeet_us_button_text"
                                            >
                                                {{ errors.meeet_us_button_text[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Button Link')}`"
                                        >
                                            <input type="text" class="form-control"
                                                v-model="form.meeet_us_button_link"
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.meeet_us_button_link"
                                            >
                                                {{ errors.meeet_us_button_link[0] }}
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
                meeet_us_bg_image: "",
                meeet_us_text: "",
                meeet_us_button_text: "",
                meeet_us_button_link: ""
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
                this.form.meeet_us_bg_image = event.target.files[0];
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
            formData.append("meeet_us_bg_image", this.form.meeet_us_bg_image);
            formData.append("meeet_us_text", this.form.meeet_us_text);
            formData.append("meeet_us_button_text", this.form.meeet_us_button_text);
            formData.append("meeet_us_button_link", this.form.meeet_us_button_link);

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
            this.form.meeet_us_bg_image = this.sectiontitle.meeet_us_bg_image;
            this.form.meeet_us_text = this.sectiontitle.meeet_us_text;
            this.form.meeet_us_button_text = this.sectiontitle.meeet_us_button_text;
            this.form.meeet_us_button_link = this.sectiontitle.meeet_us_button_link;
        }
    }
};
</script>
