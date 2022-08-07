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
                                <router-link :to="{ name: 'TeamList' }">
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
                                                :image="team.image"
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
                                            :label="`${$t('Dagenation')} *`"
                                        >
                                            <el-input
                                                v-model="form.dagenation"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.dagenation"
                                            >
                                                {{ errors.dagenation[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Description')} *`"
                                        >
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.description"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.description"
                                            >
                                                {{ errors.description[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item
                                            :label="`1. ${$t('Icon - Font Awesome Icon Class')}`"
                                            >
                                            <el-input
                                                v-model="form.icon1"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.icon1"
                                            >
                                                {{ errors.icon1[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`1. ${$t('Social Url')}`"
                                            >
                                            <el-input
                                                v-model="form.url1"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.url1"
                                            >
                                                {{ errors.url1[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item
                                            :label="`2. ${$t('Icon - Font Awesome Icon Class')}`"
                                            >
                                            <el-input
                                                v-model="form.icon2"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.icon2"
                                            >
                                                {{ errors.icon2[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`2. ${$t('Social Url')}`"
                                            >
                                            <el-input
                                                v-model="form.url2"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.url2"
                                            >
                                                {{ errors.url2[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item
                                            :label="`3. ${$t('Icon - Font Awesome Icon Class')}`"
                                            >
                                            <el-input
                                                v-model="form.icon3"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.icon3"
                                            >
                                                {{ errors.icon3[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`3. ${$t('Social Url')}`"
                                            >
                                            <el-input
                                                v-model="form.url3"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.url3"
                                            >
                                                {{ errors.url3[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item
                                            :label="`4. ${$t('Icon - Font Awesome Icon Class')}`"
                                            >
                                            <el-input
                                                v-model="form.icon4"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.icon4"
                                            >
                                                {{ errors.icon4[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`4. ${$t('Social Url')}`"
                                            >
                                            <el-input
                                                v-model="form.url4"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.url4"
                                            >
                                                {{ errors.url4[0] }}
                                            </span>
                                        </el-form-item>


                                        <el-form-item
                                            :label="`5. ${$t('Icon - Font Awesome Icon Class')}`"
                                            >
                                            <el-input
                                                v-model="form.icon5"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.icon5"
                                            >
                                                {{ errors.icon5[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`5. ${$t('Social Url')}`"
                                            >
                                            <el-input
                                                v-model="form.url5"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.url5"
                                            >
                                                {{ errors.url5[0] }}
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
                dagenation: "",
                description: "",
                status: "",
                icon1: "",
                icon2: "",
                icon3: "",
                icon4: "",
                icon5: "",
                url1: "",
                url2: "",
                url3: "",
                url4: "",
                url5: ""
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
                .post("/api/admin/teams", formData)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "TeamList" });
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
                .post(`/api/admin/teams/update/${this.$route.params.id}`, formData)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "TeamList" });
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
            formData.append("dagenation", this.form.dagenation);
            formData.append("description", this.form.description);
            formData.append("status", this.form.status);
            formData.append("icon1", this.form.icon1);
            formData.append("icon2", this.form.icon2);
            formData.append("icon3", this.form.icon3);
            formData.append("icon4", this.form.icon4);
            formData.append("icon5", this.form.icon5);
            formData.append("url1", this.form.url1);
            formData.append("url2", this.form.url2);
            formData.append("url3", this.form.url3);
            formData.append("url4", this.form.url4);
            formData.append("url5", this.form.url5);

            if (this.form.id) {
                this.update(formData);
            } else {
                this.save(formData);
            }
        },
        edit() {
            this.$store.dispatch(
                "team/editTeam",
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
        team() {
            return this.$store.getters["team/singleTeam"];
        }
    },
    watch: {
        team() {
            this.form = this.team;
        }
    }
};
</script>

