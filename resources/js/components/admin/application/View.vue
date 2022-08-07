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
                <router-link :to="{ name: 'AllApplications' }">
                  <el-button type="primary" size="small">
                    <i class="fas fa-angle-double-left"></i>
                    {{ $t("Back") }}
                  </el-button>
                </router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <td width="35%">{{ $t("Applicant Name") }}</td>
                      <td>{{ application.name }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Applicant Email") }}</td>
                      <td>{{ application.email }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Job Position") }}</td>
                      <td>{{ application.type }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Applicant Expected Salary") }}</td>
                      <td>{{ application.expected_salary }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Applicant Message") }}</td>
                      <td>{{ application.message }}</td>
                    </tr>
                    <tr class="attachment_list">
                      <td width="35%">{{ $t("Applicant CV") }}</td>
                      <td>
                        <a
                          :href="`/uploads/${application.zipFile}`"
                          class="btn btn-sm btn-info"
                          download=""
                          >{{ $t("Download Cv") }}</a
                        >
                      </td>
                    </tr>
                    <tr class="attachment_list">
                      <td width="35%">{{ $t("Applicant Mail") }}</td>
                      <td>
                        <a
                          :href="`mailto:${ application.email }`"
                          class="btn btn-primary">{{ $t("Send Mail") }}</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  methods: {
    edit() {
      this.$store.dispatch(
        "application/ApplicationView",
        this.$route.params.id
      );
    },
  },
  created() {
    this.edit();
  },
  computed: {
    application() {
      return this.$store.getters["application/ApplicationView"];
    },
  },
};
</script>

<style>
</style>