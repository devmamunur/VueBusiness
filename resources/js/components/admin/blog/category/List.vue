<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title mt-1">
                                {{ $t($route.name.replace(/([A-Z])/g, ' $1').trim()) }}
                            </h3>
                            <div class="card-tools">
                                <el-button
                                    @click="multipleDelete"
                                    v-if="multipleSelection.length > 0"
                                    type="danger"
                                    size="small"
                                    ><i class="far fa-trash-alt"></i>
                                    {{ $t('Multiple Delete') }}</el-button
                                >
                                <el-button
                                    type="primary"
                                    size="small"
                                    @click="blogCategoryCreate"
                                    ><i class="fas fa-plus"></i>
                                    {{ $t('Add New') }}
                                    </el-button
                                >
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <el-table
                                ref="multipleTable"
                                :data="blogCategories.data"
                                style="width: 100%"
                                @selection-change="handleSelectionChange"
                                border
                                fit
                                highlight-current-row
                                v-loading="loading"
                            >
                                <el-table-column
                                    type="selection"
                                    width="55"
                                >
                                </el-table-column>
                                <el-table-column
                                    property="name"
                                    :label="`${$t('Name')}`"
                                >
                                </el-table-column>
                                <el-table-column :label="`${$t('Status')}`">
                                    <template slot-scope="scope">
                                        <el-button
                                            type="success"
                                            size="mini"
                                            v-if="
                                                scope.row.status == 'Public'
                                            "
                                            plain
                                            >{{ $t('Public') }}</el-button
                                        >
                                        <el-button
                                            type="info"
                                            size="mini"
                                            v-else
                                            plain
                                            >{{ $t('Private') }}</el-button
                                        >
                                    </template>
                                </el-table-column>
                                <el-table-column :label="`${$t('Action')}`">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            @click="
                                                editBlogCategory(scope.row)
                                            "
                                            >{{ $t('Edit') }}</el-button
                                        >
                                        <el-button
                                            size="mini"
                                            type="danger"
                                            @click="
                                                deleteDialogFunction(
                                                    scope.row.id
                                                )
                                            "
                                            >{{ $t('Delete') }}</el-button
                                        >
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div v-if="blogCategories.meta">
                                <el-pagination
                                    class="text-center mt-4"
                                    background
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="currentPage"
                                    :page-size="blogCategories.meta.per_page"
                                    layout="prev, pager, next"
                                    :total="blogCategories.meta.total"
                                >
                                </el-pagination>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <el-dialog
                        :visible.sync="deleteDialog"
                        :title="$t('Warning!!')"
                        width="30%"
                        center
                    >
                        <div class="text-center">
                            <h4>{{ $t('Are you sure?') }}</h4>
                            <span>{{ $t('You won\'t be able to revert this!') }}</span>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="deleteDialog = false"
                                >{{ $t('Cancel') }}</el-button
                            >
                            <el-button
                                type="primary"
                                :loading="loading"
                                @click="deleteFunc(dataDeleteId)"
                                >{{ $t('Confirm') }}</el-button
                            >
                        </span>
                    </el-dialog>
                    <el-dialog
                        :title="
                            form.id ? $t('Edit') : $t('Add New')
                        "
                        :visible.sync="blogCategoryDialog"
                        width="30%"
                        :before-close="newDialogClose"
                    >
                        <el-form label-position="top">
                            <el-form-item :label="`${$t('Category name')} *`">
                                <el-input v-model="form.name"></el-input>
                                <span
                                    class="text-danger d-block mb-2"
                                    v-if="errors.name"
                                >
                                    {{ errors.name[0] }}
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
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="blogCategoryDialog = false">{{ $t('Cancel') }}</el-button
                            >
                            <el-button
                                type="primary"
                                v-if="!form.id"
                                :loading="loading"
                                @click.prevent="addNewBlogCategory"
                                >{{ $t('Save') }}</el-button
                            >
                            <el-button
                                type="primary"
                                v-else
                                :loading="loading"
                                @click.prevent="updateBlogCategory"
                                >{{ $t('Update') }}</el-button
                            >
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            deleteDialog: false,
            currentPage: 1,
            multipleSelection: [],
            blogCategoryDialog: false,
            form: {},
            errors: {},
            dataDeleteId: "",
            loading: false
        };
    },
    created() {
        this.blogCategoryList();
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleCurrentChange() {
            this.loading = true;
            this.$store
                .dispatch("blogCategory/blogCategoryList", this.currentPage)
                .then(result => {
                    this.loading = false;
                });
        },
        handelDataChange() {
            this.$store
                .dispatch("blogCategory/blogCategoryList", this.currentPage)
                .then(result => {
                    this.loading = false;
                });
        },
        newDialogClose(){
            this.blogCategoryDialog = false;
        },
        blogCategoryList() {
            this.blogCategoryDialog = false;
            this.loading = true;
            this.$store
                .dispatch("blogCategory/blogCategoryList", this.currentPage)
                .then(result => {
                    this.loading = false;
                });
        },
        blogCategoryCreate() {
            this.blogCategoryDialog = true;
            this.errors = {};
            this.form = {};
        },
        multipleDelete() {
            this.loading = true;
            axios
                .post(
                    "/api/admin/bcategories/multiple-delete",
                    this.multipleSelection
                )
                .then(result => {
                    if(result.data.warning){
                         this.$notify({
                            title: 'Warning',
                            message: result.data.warning,
                            type: 'warning'
                        });
                    }else{
                        this.$notify({
                            title: 'Success',
                            message: 'Data Deleted Successfully',
                            type: 'success'
                        });
                    }
                    this.handelDataChange();
                })
                .catch(err => {

                });
        },
        deleteFunc(id) {
            this.loading = true;
            axios
                .delete("/api/admin/bcategories/" + id)
                .then(result => {
                    if(result.data.warning){
                         this.$notify({
                            title: 'Warning',
                            message: result.data.warning,
                            type: 'warning'
                        });
                    }else{
                          this.$notify({
                            title: 'Success',
                            message: 'Data Deleted Successfully',
                            type: 'success'
                        });
                    }
                    this.deleteDialog = false;
                    this.handelDataChange();
                })
                .catch(err => {
                });
        },
        deleteDialogFunction(id) {
            this.deleteDialog = true;
            this.dataDeleteId = id;
        },
        addNewBlogCategory() {
            this.loading = true;
            axios
                .post("/api/admin/bcategories", this.form)
                .then(result => {
                    this.clearData();
                    this.$notify({
                        title: 'Success',
                        message: 'Data Added Successfully',
                        type: 'success'
                    });
                    this.handelDataChange();
                })
                .catch(err => {
                    this.errors = err.response.data.errors;
                    this.loading = false;
                });
        },
        editBlogCategory(category) {
            this.blogCategoryDialog = true;
            this.form = category;

        },
        updateBlogCategory() {
            this.loading = true;
            axios
                .put("/api/admin/bcategories/" + this.form.id, this.form)
                .then(result => {
                    this.$notify({
                        title: 'Success',
                        message: 'Data Updated Successfully',
                        type: 'success'
                    });
                    this.clearData();
                    this.handelDataChange();
                })
                .catch(err => {
                    this.errors = err.response.data.errors;
                    this.loading = false;
                });
        },
        clearData() {
            this.errors = {};
            this.form = {};
            this.blogCategoryDialog = false;
        }
    },
    computed: {
        blogCategories() {
            return this.$store.getters["blogCategory/blogCategoryList"];
        }
    }
};
</script>

<style></style>
