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
                                <router-link :to="{ name: 'PackageAdd' }">
                                    <el-button type="primary" size="small">
                                        <i class="fas fa-plus"></i> {{ $t('Add New') }}
                                    </el-button>
                                </router-link>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <el-table
                                ref="multipleTable"
                                :data="packages.data"
                                style="width: 100%"
                                @selection-change="handleSelectionChange"
                                border
                                fit
                                highlight-current-row
                                v-loading="loading"
                            >
                                <el-table-column type="selection" width="55">
                                </el-table-column>

                                <el-table-column property="title" :label="`${$t('Title')}`">
                                </el-table-column>

                                <el-table-column property="price" :label="`${$t('Price')}`">
                                </el-table-column>

                                <el-table-column :label="`${$t('Status')}`">
                                    <template slot-scope="scope">
                                        <el-button
                                            type="success"
                                            size="mini"
                                            v-if="scope.row.status == 'Public'"
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
                                        <router-link
                                            :to="{
                                                name: 'PackageEdit',
                                                params: { id: scope.row.id }
                                            }"
                                        >
                                            <el-button size="mini"
                                                >{{ $t('Edit') }}</el-button
                                            >
                                        </router-link>
                                        <el-button
                                            size="mini"
                                            type="danger"
                                            @click="
                                                deleteDialogFunc(scope.row.id)
                                            "
                                            >{{ $t('Delete') }}</el-button
                                        >
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div v-if="packages.meta">
                                <el-pagination
                                    class="text-center mt-4"
                                    background
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="currentPage"
                                    :page-size="packages.meta.per_page"
                                    layout="prev, pager, next"
                                    :total="packages.meta.total"
                                >
                                </el-pagination>
                            </div>
                            <el-dialog
                                :visible.sync="deleteDialog"
                                :title="$t('Warning!!')"
                                width="30%"
                                center
                            >
                                <div class="text-center">
                                    <h4>{{ $t('Are you sure?') }}</h4>
                                    <span
                                        >{{ $t('You won\'t be able to revert this!') }}</span
                                    >
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
                        </div>
                        <!-- /.card-body -->
                    </div>
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
            form: {},
            dataDeleteId: "",
            loading: false
        };
    },
    created() {
        this.List();
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
                .dispatch("pricingPlan/packageList", this.currentPage)
                .then(result => {
                    this.loading = false;
                });
        },
        handelDataChange() {
            this.$store
                .dispatch("pricingPlan/packageList", this.currentPage)
                .then(result => {
                    this.loading = false;
                });
        },
        List() {
            this.loading = true;
            this.$store
                .dispatch("pricingPlan/packageList", this.currentPage)
                .then(result => {
                    this.loading = false;
                });
        },
        multipleDelete() {
            this.loading = true;
            axios
                .post(
                    "/api/admin/packages/multiple-delete",
                    this.multipleSelection
                )
                .then(result => {
                    this.$notify({
                        title: 'Success',
                        message: 'Data Deleted Successfully',
                        type: 'success'
                    });
                    this.handelDataChange();
                })
                .catch(err => {});
        },
        deleteFunc(id) {
            this.loading = true;
            axios
                .delete("/api/admin/packages/" + id)
                .then(result => {
                    this.$notify({
                        title: 'Success',
                        message: 'Data Deleted Successfully',
                        type: 'success'
                    });
                    this.deleteDialog = false;
                    this.handelDataChange();
                })
                .catch(err => {
                });
        },
        deleteDialogFunc(id) {
            this.deleteDialog = true;
            this.dataDeleteId = id;
        }
    },
    computed: {
        packages() {
            return this.$store.getters["pricingPlan/packageList"];
        }
    }
};
</script>

<style></style>
