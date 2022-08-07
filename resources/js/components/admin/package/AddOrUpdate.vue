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
                                <router-link :to="{ name: 'PackageList' }">
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

                                        <el-form-item :label="`${$t('Time')}`">
                                            <el-input
                                                v-model="form.time"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.time"
                                            >
                                                {{ errors.time[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Price')} *`"
                                        >
                                            <el-input
                                                type="number"
                                                v-model="form.price"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.price"
                                            >
                                                {{ errors.price[0] }}
                                            </span>
                                        </el-form-item>

                                        <el-form-item
                                            :label="`${$t('Feature')} *`"
                                        >
                                            <el-tag
                                                :key="feature"
                                                v-for="feature in form.feature"
                                                closable
                                                :disable-transitions="false"
                                                @close="handleClose(feature)"
                                            >
                                                {{ feature }}
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
                                                    $t("New feature")
                                                }}</el-button
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.feature"
                                            >
                                                {{ errors.feature[0] }}
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
            inputVisible: false,
            inputValue: "",
            form: {
                title: "",
                time: "",
                price: "",
                feature: [],
                status: ""
            }
        };
    },
    methods: {
        handleClose(tag) {
            this.form.feature.splice(this.form.feature.indexOf(tag), 1);
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
                this.form.feature.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = "";
        },
        save() {
            this.loading = true;
            axios
                .post("/api/admin/packages", this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "PackageList" });
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
                .put(`/api/admin/packages/${this.$route.params.id}`, this.form)
                .then(result => {
                    this.loading = false;
                    this.form = null;
                    this.$router.push({ name: "PackageList" });
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
                "pricingPlan/editPackage",
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
        package() {
            return this.$store.getters["pricingPlan/singlePackage"];
        }
    },
    watch: {
        package() {
            this.form.id = this.package.id;
            this.form.title = this.package.title;
            this.form.time = this.package.time;
            this.form.price = this.package.price;
            this.form.status = this.package.status;
            this.form.feature = JSON.parse(this.package.feature);
        }
    }
};
</script>

<style>
.el-tag + .el-tag {
    margin-left: 10px;
}
.button-new-tag {
    margin-left: 20px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
</style>
