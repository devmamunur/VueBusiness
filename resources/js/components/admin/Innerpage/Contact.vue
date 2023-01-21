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
                                            :label="`${$t('Phone Number')}`"
                                        >
                                            <el-tag
                                                :key="number"
                                                v-for="number in form.number"
                                                closable
                                                :disable-transitions="false"
                                                @close="handleClose(number)"
                                            >
                                                {{ number }}
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
                                                    $t("New Number")
                                                }}</el-button
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.number"
                                            >
                                                {{ errors.number[0] }}
                                            </span>
                                        </el-form-item>

                                     <el-form-item
                                            :label="`${$t('Email Address')}`"
                                        >
                                            <el-tag
                                                :key="email"
                                                v-for="email in form.email"
                                                closable
                                                :disable-transitions="false"
                                                @close="handleClose2(email)"
                                            >
                                                {{ email }}
                                            </el-tag>
                                            <el-input
                                                class="input-new-tag"
                                                v-if="inputVisible2"
                                                v-model="inputValue2"
                                                ref="saveTagInput2"
                                                size="mini"
                                                @keyup.enter.native="
                                                    handleInputConfirm2
                                                "
                                                @blur="handleInputConfirm2"
                                            >
                                            </el-input>
                                            <el-button
                                                v-else
                                                class="button-new-tag ml-2"
                                                size="small"
                                                @click="showInput2"
                                                >+
                                                {{
                                                    $t("New Email")
                                                }}</el-button
                                            >
                                            <span
                                                class="text-danger"
                                                v-if="errors.email"
                                            >
                                                {{ errors.email[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Office Location')}`"
                                        >
                                            <el-input
                                                v-model="form.address"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.address"
                                            >
                                                {{ errors.address[0] }}
                                            </span>
                                        </el-form-item>
                                        <el-form-item
                                            :label="`${$t('Opening Hours')}`"
                                        >
                                            <el-input
                                                v-model="form.opening_hours"
                                            ></el-input>
                                            <span
                                                class="text-danger"
                                                v-if="errors.opening_hours"
                                            >
                                                {{ errors.opening_hours[0] }}
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
    name: "Contact",
    data() {
        return {
            loading: false,
            errors: {},
            inputVisible: false,
            inputValue: "",
            inputVisible2: false,
            inputValue2: "",
            form: {
                number: [],
                email: [],
                address: "",
                opening_hours: ""
            }
        };
    },
    methods: {
          handleClose(tag) {
            this.form.number.splice(this.form.number.indexOf(tag), 1);
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
                this.form.number.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = "";
        },
        handleClose2(tag2) {
            this.form.email.splice(this.form.email.indexOf(tag2), 1);
        },
        showInput2() {
            this.inputVisible2 = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput2.$refs.input.focus();
            });
        },
        handleInputConfirm2() {
            let inputValue2 = this.inputValue2;
            if (inputValue2) {
                this.form.email.push(inputValue2);
            }
            this.inputVisible2 = false;
            this.inputValue2 = "";
        },
        handelDataChange() {
            this.$store
                .dispatch("setting/settingList")
                .then(result => {
                    this.loading = false;
                });
        },
        Update() {
            this.loading = true;
            axios
                .post(`/api/admin/settings/update/`, this.form)
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
            this.form.number = JSON.parse(this.setting.number);
            this.form.email = JSON.parse(this.setting.email);
            this.form.address = this.setting.address;
            this.form.opening_hours = this.setting.opening_hours;
        }
    }
};
</script>
