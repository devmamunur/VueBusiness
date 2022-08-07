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
                            <div class="row">
                                <div class="col-md-4 mb-4">
                                    <el-card class="box-card">
                                        <div slot="header" class="clearfix">
                                            <span>{{ $t("Theme One") }}</span>
                                            <el-button
                                                v-if="form.theme_version == '1'"
                                                style="float: right"
                                                size="small"
                                                @click.prevent="Update1"
                                                type="primary"
                                                :loading="loading"
                                                ><i class="el-icon-circle-check"></i> {{ $t("Active") }}</el-button
                                            >
                                            <el-button
                                                v-else
                                                style="float: right"
                                                size="small"
                                                @click.prevent="Update1"
                                                type="info"
                                                :loading="loading"
                                                >{{ $t("Activate") }}</el-button
                                            >
                                        </div>
                                        <div class="text item">
                                            <img
                                            :src="`/uploads/theme1.png`"
                                            alt=""
                                            class="w-100"
                                        />
                                        </div>
                                    </el-card>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <el-card class="box-card">
                                        <div slot="header" class="clearfix">
                                            <span>{{ $t("Theme Two") }}</span>
                                            <el-button
                                                v-if="form.theme_version == '2'"
                                                style="float: right"
                                                size="small"
                                                @click.prevent="Update2"
                                                type="primary"
                                                :loading="loading"
                                                ><i class="el-icon-circle-check"></i> {{ $t("Active") }}</el-button
                                            >
                                            <el-button
                                                v-else
                                                style="float: right"
                                                size="small"
                                                @click.prevent="Update2"
                                                type="info"
                                                :loading="loading"
                                                >{{ $t("Activate") }}</el-button
                                            >
                                        </div>
                                        <div class="text item">
                                            <img
                                            :src="`/uploads/theme2.png`"
                                            alt=""
                                            class="w-100"
                                        />
                                        </div>
                                    </el-card>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <el-card class="box-card">
                                        <div slot="header" class="clearfix">
                                            <span>{{ $t("Theme Three") }}</span>
                                            <el-button
                                                v-if="form.theme_version == '3'"
                                                style="float: right"
                                                size="small"
                                                @click.prevent="Update3"
                                                type="primary"
                                                :loading="loading"
                                                ><i class="el-icon-circle-check"></i> {{ $t("Active") }}</el-button
                                            >
                                            <el-button
                                                v-else
                                                style="float: right"
                                                size="small"
                                                @click.prevent="Update3"
                                                type="info"
                                                :loading="loading"
                                                >{{ $t("Activate") }}</el-button
                                            >
                                        </div>
                                        <div class="text item">
                                            <img
                                            :src="`/uploads/theme3.png`"
                                            alt=""
                                            class="w-100"
                                        />
                                        </div>
                                    </el-card>
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
    name: "Contact",
    data() {
        return {
            loading: false,
            errors: {},
            form: {
                theme_version: ""
            }
        };
    },
    methods: {
        handelDataChange() {
            this.$store.dispatch("setting/settingList").then(result => {
                this.loading = false;
            });
        },
        Update1() {
            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, { theme_version: "1" })
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
        Update2() {
            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, { theme_version: "2" })
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
        Update3() {
            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, { theme_version: "3" })
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
        Update4() {
            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, { theme_version: "4" })
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
        Update5() {
            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, { theme_version: "5" })
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
        Update6() {
            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, { theme_version: "6" })
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
            this.$store.dispatch("setting/settingList");
        }
    },
    created() {
        this.edit();
    },
    computed: {
        setting() {
            return this.$store.getters["setting/settingList"];
        }
    },
    watch: {
        setting() {
            this.form.theme_version = this.setting.theme_version;
        }
    }
};
</script>
