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
                                <router-link :to="{ name: 'TestimonialList' }">
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
                                        <el-form-item :label="`${$t('Image')} *`">
                                            <image-show
                                                :routeParamsId="
                                                    $route.params.id
                                                "
                                                :viewImage="viewImage"
                                                :image="testimonial.image"
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
                                            :label="`${$t('Position')} *`"
                                        >
                                            <el-input
                                                v-model="form.position"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.position"
                                            >
                                                {{ errors.position[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Rating')} *`"
                                        >

                                            <el-radio-group v-model="form.rating">
                                                <el-radio :label="1">{{ $t('1 Star') }}</el-radio>
                                                <el-radio :label="2">{{ $t('2 Star') }}</el-radio>
                                                <el-radio :label="3">{{ $t('3 Star') }}</el-radio>
                                                <el-radio :label="4">{{ $t('4 Star') }}</el-radio>
                                                <el-radio :label="5">{{ $t('5 Star') }}</el-radio>
                                            </el-radio-group>

                                            <span
                                                class="text-danger"
                                                v-if="errors.rating"
                                            >
                                                {{ errors.rating[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item :label="`${$t('Message')} *`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.message"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.message"
                                            >
                                                {{ errors.message[0] }}
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
import ImageShow from "../../helper/ImageShow.vue";
export default {
    name: "AddOrUpdate",
    data() {
        return {
            loading: false,
            errors: {},
            viewImage: null,
            form: {
                image: "",
                name: "",
                position : "",
                rating: null,
                message : "",
                status : ""
            }
        };
    },
    components: {
        ImageShow
    },
    methods: {
        onFileSelected(event) {
            let file = event.target.files[0];
            if (file.size > 1048770) {
                this.$notify({
                    title: 'Success',
                    message: 'Max Image Size 2 MB',
                    type: 'warning'
                });
            } else {
                this.form.image = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                    this.viewImage = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        save(formData) {
            this.loading = true;
            axios
                .post("/api/admin/testimonials", formData)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "TestimonialList" });
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
        update(formData) {
            this.loading = true;
            axios
                .post(`/api/admin/testimonials/update/${this.$route.params.id}`, formData)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "TestimonialList" });
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
            let formData = new FormData();
            formData.append("image", this.form.image);
            formData.append("name", this.form.name);
            formData.append("position", this.form.position);
            formData.append("rating", this.form.rating);
            formData.append("message", this.form.message);
            formData.append("status", this.form.status);

            if (this.form.id) {
                this.update(formData);
            } else {
                this.save(formData);
            }
        },
        edit() {
            this.$store.dispatch(
                "testimonial/editTestimonial",
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
        testimonial() {
            return this.$store.getters["testimonial/singleTestimonial"];
        }
    },
    watch: {
        testimonial() {
            this.form = this.testimonial;
        }
    }
};
</script>

