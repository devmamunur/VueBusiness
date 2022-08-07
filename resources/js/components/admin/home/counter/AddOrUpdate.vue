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
                                <router-link :to="{ name: 'CounterList' }">
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
                                        <el-form-item
                                            :label="`${$t('Title')} *`"
                                        >
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
                                        <el-form-item
                                            :label="`${$t('Number')} *`"
                                        >
                                            <el-input
                                            type="number"
                                                v-model="form.number"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.number"
                                            >
                                                {{ errors.number[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Icon - Font Awesome Icon Class')} *`"
                                            >
                                            <el-input
                                                v-model="form.icon"
                                            ></el-input>

                                            <span
                                                class="text-danger"
                                                v-if="errors.icon"
                                            >
                                                {{ errors.icon[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item :label="`${$t('Content')} *`">
                                            <el-input
                                                type="textarea"
                                                rows="4"
                                                v-model="form.text"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.text"
                                            >
                                                {{ errors.text[0] }}
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

export default {
    name: "AddOrUpdate",
    data() {
        return {
            loading: false,
            errors: {},
            form: {
                title: "",
                number: "",
                icon: "",
                text: "",
                status: ""
            }
        };
    },
    methods: {
        save() {
            this.loading = true;
            axios
                .post("/api/admin/counters", this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "CounterList" });
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
        update() {
            this.loading = true;
            axios
                .put(`/api/admin/counters/${this.$route.params.id}`, this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "CounterList" });
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
            if (this.form.id) {
                this.update();
            } else {
                this.save();
            }
        },
        edit() {
            this.$store.dispatch(
                "counter/editCounter",
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
        counter() {
            return this.$store.getters["counter/singleCounter"];
        }
    },
    watch: {
        counter() {
            this.form = this.counter;
        }
    }
};
</script>

