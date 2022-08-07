<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title mt-1">
                {{ $t($route.name.replace(/([A-Z])/g, " $1").trim()) }}
              </h3>
              <div class="card-tools">
                <el-button
                  @click="multipleDelete"
                  v-if="multipleSelection.length > 0"
                  type="danger"
                  size="small"
                  ><i class="far fa-trash-alt"></i>
                  {{ $t("Multiple Delete") }}</el-button
                >
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="filter-area mb-4">
                <h6 class="h6">{{ $t("Filter") }}</h6>
                <el-select
                  v-model="listStatus"
                  :placeholder="$t('Select Status')"
                  @change="updatelistStatus($event)"
                >
                  <el-option
                    key="99"
                    :label="`${$t('All Applications')}`"
                    value="99"
                    selected
                  >
                  </el-option>
                  <el-option
                    key="0"
                    :label="`${$t('Pending Applications')}`"
                    value="0"
                  >
                  </el-option>
                  <el-option
                    key="1"
                    :label="`${$t('Interviewing Applications')}`"
                    value="1"
                  >
                  </el-option>
                  <el-option
                    key="2"
                    :label="`${$t('Selected Applications')}`"
                    value="2"
                  >
                  </el-option>
                  <el-option
                    key="3"
                    :label="`${$t('Rejected Applications')}`"
                    value="3"
                  >
                  </el-option>
                </el-select>
              </div>
              <el-table
                ref="multipleTable"
                :data="applications.data"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                border
                fit
                highlight-current-row
                v-loading="loading"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column
                  property="job_title"
                  :label="`${$t('Job Title')}`"
                ></el-table-column>

                <el-table-column
                  property="type"
                  :label="`${$t('Job Position')}`"
                >
                </el-table-column>

                <el-table-column :label="`${$t('Apply Date')}`">
                  <template slot-scope="scope">{{
                    scope.row.created_at | timeFormat
                  }}</template>
                </el-table-column>

                <el-table-column :label="`${$t('Status')}`">
                  <template slot-scope="scope">
                    <el-select
                      v-model="scope.row.status"
                      :placeholder="$t('Select Status')"
                      @change="updateStatus(scope.row.id, $event)"
                    >
                      <el-option key="0" :label="`${$t('Pending')}`" value="0">
                      </el-option>
                      <el-option
                        key="1"
                        :label="`${$t('Interviewing')}`"
                        value="1"
                      >
                      </el-option>
                      <el-option key="2" :label="`${$t('Selected')}`" value="2">
                      </el-option>
                      <el-option key="3" :label="`${$t('Rejected')}`" value="3">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column :label="`${$t('Action')}`">
                  <template slot-scope="scope">
                    <router-link
                      :to="{
                        name: 'ApplicationView',
                        params: { id: scope.row.id },
                      }"
                    >
                      <el-button size="mini">{{ $t("View") }}</el-button>
                    </router-link>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="deleteDialogFunc(scope.row.id)"
                      >{{ $t("Delete") }}</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
              <div v-if="applications.meta">
                <el-pagination
                  class="text-center mt-4"
                  background
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="applications.meta.per_page"
                  layout="prev, pager, next"
                  :total="applications.meta.total"
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
                  <h4>{{ $t("Are you sure?") }}</h4>
                  <span>{{ $t("You won't be able to revert this!") }}</span>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="deleteDialog = false">{{
                    $t("Cancel")
                  }}</el-button>
                  <el-button
                    type="primary"
                    :loading="loading"
                    @click="deleteFunc(dataDeleteId)"
                    >{{ $t("Confirm") }}</el-button
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
  data() {
    return {
      applicationStatus: "",
      listStatus: "",
      deleteDialog: false,
      currentPage: 1,
      multipleSelection: [],
      form: {},
      dataDeleteId: "",
      loading: false,
    };
  },
  created() {
    this.List();
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
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
        .dispatch("application/applicationList", [this.currentPage, this.applicationStatus])
        .then((result) => {
          this.loading = false;
        });
    },
    handelDataChange() {
      this.loading = true;
      this.$store
        .dispatch("application/applicationList", [this.currentPage, this.applicationStatus])
        .then((result) => {
          this.loading = false;
        });
    },
    updateStatus(id, event) {
      this.loading = true;
      this.$store
        .dispatch("application/ApplicationStatus", [id, event])
        .then((result) => {
          this.loading = false;
          this.$notify({
            title: "Success",
            message: "Data Updated Successfully",
            type: "success",
          });
        });
    },
    updatelistStatus(event) {
     this.applicationStatus = event;
      this.loading = true;
      this.$store
        .dispatch("application/applicationList", [this.currentPage, this.applicationStatus])
        .then((result) => {
            this.handelDataChange();
        });
    },
    List() {
      this.loading = true;
      this.$store
        .dispatch("application/applicationList", [this.currentPage, this.applicationStatus])
        .then((result) => {
          this.loading = false;
        });
    },
    multipleDelete() {
      this.loading = true;
      axios
        .post("/api/admin/applications/multiple-delete", this.multipleSelection)
        .then((result) => {
          this.$notify({
            title: "Success",
            message: "Data Deleted Successfully",
            type: "success",
          });
          this.handelDataChange();
        })
        .catch((err) => {});
    },
    deleteFunc(id) {
      this.loading = true;
      axios
        .delete("/api/admin/applications/" + id)
        .then((result) => {
          this.$notify({
            title: "Success",
            message: "Data Deleted Successfully",
            type: "success",
          });
          this.deleteDialog = false;
          this.handelDataChange();
        })
        .catch((err) => {});
    },
    deleteDialogFunc(id) {
      this.deleteDialog = true;
      this.dataDeleteId = id;
    },
  },
  computed: {
    applications() {
      return this.$store.getters["application/applicationList"];
    },
  },
};
</script>

<style></style>
