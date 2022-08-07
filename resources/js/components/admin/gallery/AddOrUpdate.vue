<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title mt-1">
                                {{ $t($route.name.replace(/([A-Z])/g, ' $1').trim()) }}
                            </h3>
                            <div class="card-tools">
                                <router-link :to="{ name: 'GalleryList' }">
                                    <el-button type="primary" size="small">
                                        <i class="fas fa-angle-double-left"></i>
                                        {{ $t('Back') }}
                                    </el-button>
                                </router-link>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">

                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <el-form label-position="top" @submit.prevent="saveOrUpdate">

                                        <el-form-item :label="`${$t('Image')} *`">

                                            <image-show
                                                :routeParamsId="
                                                    $route.params.id
                                                "
                                                :viewImage="viewImage"
                                                :image="gallery.image"
                                            ></image-show>
                                            <div class="custom-file">
                                                <label
                                                    class="custom-file-label"
                                                    for="image"
                                                    >{{ $t('Choose Image') }}</label
                                                >
                                                <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    @change="onFileSelected"
                                                    id="image"
                                                />
                                            </div>
                                            <span
                                                class="text-danger"
                                                v-if="errors.image"
                                            >
                                                {{ errors.image[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Title')} *`">
                                            <el-input
                                                v-model="form.title"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.title"
                                            >
                                                {{ errors.title[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item :label="`${$t('Video Link')}`">
                                            <el-input
                                                v-model="form.video_link	"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.video_link	"
                                            >
                                                {{ errors.video_link	[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Select Category')} *`">
                                            <el-select
                                                v-model="form.gcategory_id"
                                                :placeholder="$t('Select Category')"
                                            >
                                                <el-option
                                                    v-for="gcategory in gcategories"
                                                    :key="gcategory.id"
                                                    :label="gcategory.name"
                                                    :value="gcategory.id"
                                                ></el-option>
                                            </el-select>
                                            <span
                                                class="text-danger"
                                                v-if="errors.gcategory_id"
                                            >
                                                {{ errors.gcategory_id[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Status')} *`">
                                            <el-select
                                                v-model="form.status"
                                                :placeholder="$t('Select Status')"
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
                                            >{{ $t('Update') }}</el-button
                                        >
                                        <el-button
                                            v-else
                                            @click.prevent="saveOrUpdate"
                                            type="primary"
                                            :loading="loading"
                                            >{{ $t('Save') }}</el-button
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
import ImageShow from "../helper/ImageShow.vue";
export default {
    name: "AddOrUpdate",
    data() {
        return {
            loading: false,
            errors: {},
            viewImage: null,
            viewImageAll: [],
            imageId: [],
            form: {
                image : "",
                title: "",
                gcategory_id: "",
                video_link: "",
                status: ""
            }
        };
    },
    components: {
        ImageShow
    },
    methods: {
        onFileSelected(event) {
            let file = event.target.files[0];

            this.form.image = event.target.files[0];

            let reader = new FileReader();
            reader.onload = event => {
                this.viewImage = event.target.result;
            };
            reader.readAsDataURL(file);
        },
        gcategoryListAll() {
            this.$store.dispatch("galleryCategory/galleryCategoryListAll");
        },
        save(formData) {
            this.loading = true;

            axios
                .post("/api/admin/galleries", formData )
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "GalleryList" });
                    this.$notify({
                        title: 'Success',
                        message: 'Data Added Successfully',
                        type: 'success'
                    });
                })
                .catch(err => {
                    this.loading = false;
                    this.errors = err.response.data.errors;
                });
        },
        update(formData) {
            this.loading = true;
            axios
                .post(
                    `/api/admin/galleries/update/${this.$route.params.id}`,
                    formData
                )
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "GalleryList" });
                    this.$notify({
                        title: 'Success',
                        message: 'Data Updated Successfully',
                        type: 'success'
                    });
                })
                .catch(err => {
                    this.loading = false;
                    this.errors = err.response.data.errors;
                });
        },
        saveOrUpdate() {
            let formData = new FormData();

            formData.append("image", this.form.image);
            formData.append("title", this.form.title);
            formData.append("gcategory_id", this.form.gcategory_id);
            formData.append("video_link", this.form.video_link);
            formData.append("status", this.form.status);

            if (this.form.id) {
                this.update(formData);
            } else {
                this.save(formData);
            }
        },
        edit() {
            this.$store.dispatch("gallery/editGallery", this.$route.params.id);
        }
    },
    created() {
        this.gcategoryListAll();
        if (this.$route.params.id) {
            this.edit();
        }
    },
    computed: {
        gcategories() {
            return this.$store.getters["galleryCategory/galleryCategoryList"];
        },
        gallery() {
            return this.$store.getters["gallery/singleGallery"];
        }
    },
    watch: {
        gallery() {
            this.form = this.gallery;
        }

    }
};
</script>

<style></style>
