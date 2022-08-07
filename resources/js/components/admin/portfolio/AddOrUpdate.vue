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
                                <router-link :to="{ name: 'PortfolioList' }">
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

                                        <el-form-item :label="`${$t('Slider Image')}`">

                                            <div v-if="this.$route.params.id">
                                                <div >
                                                    <div class="d-inline-block"  v-for="(j, k) in this.form.image" :key="k">
                                                        <div v-if="j.image">
                                                            <img class="w-200 mb-3 img-demo" :src="`/uploads/${j.image}`"  alt=""/>
                                                            <br>
                                                            <input type="checkbox" :id="j.id" :value="j.id" v-model="imageId">
                                                            <label :for="j.id">{{ $t('Delete') }}</label>
                                                            <br>
                                                            <br>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <img class="w-200 mb-3 img-demo" :src="i" v-for="(i, n) in viewImageAll" :key="n" alt=""/>

                                            <div class="custom-file h80 drop-img">
                                            <label class="custom-file-label h80 " for="multiple_image"><h5 class="text-center">{{ $t('Drop Or Select multiple image') }}</h5></label>
                                            <input type="file" multiple class="custom-file-input h80"  @change="multipleImage" id="multiple_image">
                                            </div>
                                            <span
                                                class="text-danger"
                                                v-if="errors.image"
                                            >
                                                {{ errors.image[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Image')} *`">

                                            <image-show
                                                :routeParamsId="
                                                    $route.params.id
                                                "
                                                :viewImage="viewImage"
                                                :image="portfolio.featured_image"
                                            ></image-show>
                                            <div class="custom-file">
                                                <label
                                                    class="custom-file-label"
                                                    for="featured_image"
                                                    >{{ $t('Choose Image') }}</label
                                                >
                                                <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    @change="onFileSelected"
                                                    id="featured_image"
                                                />
                                            </div>
                                            <span
                                                class="text-danger"
                                                v-if="errors.featured_image"
                                            >
                                                {{ errors.featured_image[0] }}
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

                                        <el-form-item :label="`${$t('Client Name')}`">
                                            <el-input
                                                v-model="form.client_name"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.client_name"
                                            >
                                                {{ errors.client_name[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Live Link')}`">
                                            <el-input
                                                v-model="form.link"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.link"
                                            >
                                                {{ errors.link[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Select Category')} *`">
                                            <el-select
                                                v-model="form.service_id"
                                                :placeholder="$t('Select Category')"
                                            >
                                                <el-option
                                                    v-for="service in services"
                                                    :key="service.id"
                                                    :label="service.title"
                                                    :value="service.id"
                                                ></el-option>
                                            </el-select>
                                            <span
                                                class="text-danger"
                                                v-if="errors.service_id"
                                            >
                                                {{ errors.service_id[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Start Date')} *`">
                                            <el-date-picker
                                                v-model="form.start_date"
                                                style="width : 100%"
                                                type="date"
                                                format="yyyy/MM/dd"
                                                value-format="yyyy-MM-dd"
                                                :placeholder="$t('Pick a date')">
                                            </el-date-picker>
                                            <span
                                                class="text-danger"
                                                v-if="errors.start_date"
                                            >
                                                {{ errors.start_date[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Submission Date')}`">
                                            <el-date-picker
                                                v-model="form.submission_date"
                                                style="width : 100%"
                                                type="date"
                                                format="yyyy/MM/dd"
                                                value-format="yyyy-MM-dd"
                                                :placeholder="$t('Pick a date')">
                                            </el-date-picker>
                                            <span
                                                class="text-danger"
                                                v-if="errors.submission_date"
                                            >
                                                {{ errors.submission_date[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Description')} *`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.content"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.content"
                                            >
                                                {{ errors.content[0] }}
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
                image: [],
                featured_image : "",
                title: "",
                service_id: "",
                content: "",
                status: "",
                client_name : "",
                start_date: "",
                submission_date: "",
                link: ""
            }
        };
    },
    components: {
        ImageShow
    },
    methods: {
        multipleImage(event){

            let selectedFiles = event.target.files;

            if(!selectedFiles.length){
                return false;
            }
            for(let i=0; i < selectedFiles.length; i++){
                this.form.image.push(selectedFiles[i]);
            }


            for(let i=0; i < selectedFiles.length; i++){
                let reader = new FileReader();
                reader.onload = event => {
                        this.viewImageAll.push(event.target.result);
                };
                reader.readAsDataURL(selectedFiles[i]);
            }



        },
        onFileSelected(event) {
            let file = event.target.files[0];

            this.form.featured_image = event.target.files[0];

            let reader = new FileReader();
            reader.onload = event => {
                this.viewImage = event.target.result;
            };
            reader.readAsDataURL(file);
        },
        serviceListAll() {
            this.$store.dispatch("service/serviceListAll");
        },
        save(formData) {
            this.loading = true;

            axios
                .post("/api/admin/portfolios", formData )
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "PortfolioList" });
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
                    `/api/admin/portfolios/update/${this.$route.params.id}`,
                    formData
                )
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "PortfolioList" });
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

            for(let i=0; i<this.form.image.length; i++ ){
                formData.append('image[]',this.form.image[i]);
            }

            for(let i=0; i<this.imageId.length; i++ ){
                formData.append('imageId[]',this.imageId[i]);
            }

            formData.append("featured_image", this.form.featured_image);
            formData.append("title", this.form.title);
            formData.append("service_id", this.form.service_id);
            formData.append("content", this.form.content);
            formData.append("status", this.form.status);
            formData.append("client_name", this.form.client_name);
            formData.append("start_date", this.form.start_date);
            formData.append("submission_date", this.form.submission_date);
            formData.append("link", this.form.link);


            if (this.form.id) {
                this.update(formData);
            } else {
                this.save(formData);
            }
        },
        edit() {
            this.$store.dispatch("portfolio/editPortfolio", this.$route.params.id);
        }
    },
    created() {
        this.serviceListAll();
        if (this.$route.params.id) {
            this.edit();
        }
    },
    computed: {
        services() {
            return this.$store.getters["service/serviceList"];
        },
        portfolio() {
            return this.$store.getters["portfolio/singlePortfolio"];
        }
    },
    watch: {
        portfolio() {
            this.form = this.portfolio;
        }

    }
};
</script>

<style></style>
