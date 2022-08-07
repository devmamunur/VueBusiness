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
                    :label="`${$t('All Quote')}`"
                    value="99"
                    selected
                  >
                  </el-option>
                  <el-option
                    key="0"
                    :label="`${$t('Pending Quote')}`"
                    value="0"
                  >
                  </el-option>
                  <el-option
                    key="1"
                    :label="`${$t('Processing Quote')}`"
                    value="1"
                  >
                  </el-option>
                  <el-option
                    key="2"
                    :label="`${$t('Completed Quote')}`"
                    value="2"
                  >
                  </el-option>
                  <el-option
                    key="3"
                    :label="`${$t('Rejected Quote')}`"
                    value="3"
                  >
                  </el-option>
                </el-select>
              </div>
              <el-table
                ref="multipleTable"
                :data="quotes.data"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                border
                fit
                highlight-current-row
                v-loading="loading"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column
                  property="name"
                  :label="`${$t('Name')}`"
                ></el-table-column>

                <el-table-column property="subject" :label="`${$t('Subject')}`">
                </el-table-column>

                <el-table-column :label="`${$t('Mail')}`">
                  <template slot-scope="scope">
                    <a :href="`mailto:${scope.row.email}`">
                      <el-button size="mini" type="primary">{{
                        $t("Send Mail")
                      }}</el-button>
                    </a>
                  </template>
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
                        :label="`${$t('Processings')}`"
                        value="1"
                      >
                      </el-option>
                      <el-option key="2" :label="`${$t('Completed')}`" value="2">
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
                        name: 'QuoteView',
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
              <div v-if="quotes.meta">
                <el-pagination
                  class="text-center mt-4"
                  background
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="quotes.meta.per_page"
                  layout="prev, pager, next"
                  :total="quotes.meta.total"
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
      quoteStatus: "",
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
        .dispatch("quote/quoteList", [this.currentPage, this.quoteStatus])
        .then((result) => {
          this.loading = false;
        });
    },
    handelDataChange() {
      this.loading = true;
      this.$store
        .dispatch("quote/quoteList", [this.currentPage, this.quoteStatus])
        .then((result) => {
          this.loading = false;
        });
    },
    updateStatus(id, event) {
      this.loading = true;
      this.$store.dispatch("quote/QuoteStatus", [id, event]).then((result) => {
        this.loading = false;
        this.$notify({
          title: "Success",
          message: "Data Updated Successfully",
          type: "success",
        });
      });
    },
    updatelistStatus(event) {
      this.quoteStatus = event;
      this.loading = true;
      this.$store
        .dispatch("quote/quoteList", [this.currentPage, this.quoteStatus])
        .then((result) => {
          this.handelDataChange();
        });
    },
    List() {
      this.loading = true;
      this.$store
        .dispatch("quote/quoteList", [this.currentPage, this.quoteStatus])
        .then((result) => {
          this.loading = false;
        });
    },
    multipleDelete() {
      this.loading = true;
      axios
        .post("/api/admin/quotes/multiple-delete", this.multipleSelection)
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
        .delete("/api/admin/quotes/" + id)
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
    quotes() {
      return this.$store.getters["quote/quoteList"];
    },
  },
};
</script>

<style></style>
