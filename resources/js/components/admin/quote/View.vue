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
                <router-link :to="{ name: 'AllQuote' }">
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
                      <td width="35%">{{ $t("Name") }}</td>
                      <td>{{ quote.name }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Email") }}</td>
                      <td>{{ quote.email }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Phone") }}</td>
                      <td>
                          <a :href="`tel:${ quote.phone }`" class="btn btn-primary btn-sm">
                              {{ $t("Call to") }} {{ quote.phone }}
                              </a>
                          </td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Country") }}</td>
                      <td>{{ quote.country }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Budget") }}</td>
                      <td>{{ quote.budget }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Skype ID") }}</td>
                      <td>{{ quote.skypeid }}</td>
                    </tr>
                    <tr class="attachment_list">
                      <td width="35%">{{ $t("Applicant CV") }}</td>
                      <td>
                        <a
                          :href="`/uploads/${quote.file}`"
                          class="btn btn-sm btn-info"
                          download=""
                          >{{ $t("Download File") }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Subject") }}</td>
                      <td>{{ quote.subject }}</td>
                    </tr>
                    <tr>
                      <td width="35%">{{ $t("Description") }}</td>
                      <td>{{ quote.description }}</td>
                    </tr>
                    <tr class="attachment_list">
                      <td width="35%">{{ $t("Applicant Mail") }}</td>
                      <td>
                          <a :href="`mailto:${ quote.email}`" class="btn btn-primary btn-sm">
                              <i class="fas fa-paper-plane"></i>
                             {{ $t("Send Mail") }}
                            </a>
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
      this.$store.dispatch("quote/QuoteView", this.$route.params.id);
    },
  },
  created() {
    this.edit();
  },
  computed: {
    quote() {
      return this.$store.getters["quote/QuoteView"];
    },
  },
};
</script>

