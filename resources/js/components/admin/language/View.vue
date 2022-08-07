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
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="gd-responsive-table">
                <table
                  class="table table-bordered table-striped"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>{{ $t("Language") }}</th>
                      <th>{{ $t("Actions") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ $t("Frontend") }}</td>
                      <td>
                        <router-link :to="{ name: 'FrontendLanguage' }">
                        <el-button type="primary">{{ $t("Translate") }}</el-button>
                        </router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>{{ $t("Backend") }}</td>
                      <td>
                        <router-link :to="{ name: 'BackendLanguage' }">
                        <el-button type="primary">{{ $t("Translate") }}</el-button>
                        </router-link>
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
  name: "Language",
};
</script>

<style></style>
