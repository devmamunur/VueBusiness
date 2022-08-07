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
                                <router-link :to="{ name: 'JobList' }">
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

                                        <el-form-item :label="`${$t('Select Category')} *`">
                                            <el-select
                                                v-model="form.job_category_id"
                                                :placeholder="$t('Select Category')"
                                            >
                                                <el-option
                                                    v-for="category in jobCategories"
                                                    :key="category.id"
                                                    :label="category.name"
                                                    :value="category.id"
                                                ></el-option>
                                            </el-select>
                                            <span
                                                class="text-danger"
                                                v-if="errors.job_category_id"
                                            >
                                                {{ errors.job_category_id[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Job Position')} *`">
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
                                        <el-form-item :label="`${$t('Company Name')} *`">
                                            <el-input
                                                v-model="form.company_name"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.company_name"
                                            >
                                                {{ errors.company_name[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Vacancy')} *`">
                                            <el-input
                                                type="number"
                                                v-model="form.vacancy"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.vacancy"
                                            >
                                                {{ errors.vacancy[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Job Responsibility')} *`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.job_responsibility"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.job_responsibility"
                                            >
                                                {{ errors.job_responsibility[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Job Context')}`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.job_context"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.job_context"
                                            >
                                                {{ errors.job_context[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Education Requirement')}`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.education_requirement"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.education_requirement"
                                            >
                                                {{ errors.education_requirement[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Experience Requirement')}`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.experience_requirement"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.experience_requirement"
                                            >
                                                {{ errors.experience_requirement[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Additional Requirement')}`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.additional_requirement"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.additional_requirement"
                                            >
                                                {{ errors.additional_requirement[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Employment Status')} *`">
                                            <el-select
                                                v-model="form.employment_status"
                                                :placeholder="$t('Select Status')"
                                            >
                                                <el-option
                                                    key="Full-Time"
                                                    label="Full-Time"
                                                    value="Full-Time"
                                                >
                                                </el-option>
                                                <el-option
                                                    key="Part-Time"
                                                    label="Part-Time"
                                                    value="Part-Time"
                                                >
                                                </el-option>
                                                <el-option
                                                    key="Project Based"
                                                    label="Project Based"
                                                    value="Project Based"
                                                >
                                                </el-option>
                                            </el-select>
                                            <span
                                                class="text-danger d-block mb-2"
                                                v-if="errors.employment_status"
                                            >
                                                {{ errors.employment_status[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Job Location')} *`">
                                            <el-input
                                                v-model="form.job_location"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.job_location"
                                            >
                                                {{ errors.job_location[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Compensation & Other Benefits')}`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.other_benefits"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.other_benefits"
                                            >
                                                {{ errors.other_benefits[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Job Salary')} *`">
                                            <el-input
                                                v-model="form.salary"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.salary"
                                            >
                                                {{ errors.salary[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Email')}`">
                                            <el-input
                                                v-model="form.email"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.email"
                                            >
                                                {{ errors.email[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item :label="`${$t('Deadline')} *`">
                                            <el-date-picker
                                                v-model="form.deadline"
                                                style="width : 100%"
                                                type="date"
                                                :placeholder="$t('Pick a date')"
                                                >
                                            </el-date-picker>
                                            <span
                                                class="text-danger"
                                                v-if="errors.deadline"
                                            >
                                                {{ errors.deadline[0] }}
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
export default {
    name: "AddOrUpdate",
    data() {
        return {
            loading: false,
            errors: {},
            form: {}
        };
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
        jobCategoryListAll() {
            this.$store.dispatch("jobCategory/jobCategoryListAll");
        },
        save() {
            this.loading = true;
            axios
                .post("/api/admin/jobs", this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "JobList" });
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
        update() {
            this.loading = true;
            axios
                .post(
                    `/api/admin/jobs/update/`+ this.form.id,
                    this.form
                )
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "JobList" });
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
            if (this.form.id) {
                this.update();
            } else {
                this.save();
            }
        },
        edit() {
            this.$store.dispatch("job/editJob", this.$route.params.id);
        }
    },
    created() {
        this.jobCategoryListAll();
        if (this.$route.params.id) {
            this.edit();
        }
    },
    computed: {
        jobCategories() {
            return this.$store.getters["jobCategory/jobCategoryList"];
        },
        job() {
            return this.$store.getters["job/singleJob"];
        }
    },
    watch: {
        job() {
            this.form = this.job;
        }
    }
};
</script>

<style></style>
