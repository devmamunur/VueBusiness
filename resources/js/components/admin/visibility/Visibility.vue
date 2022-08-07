<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <router-link :to="{ name: 'ThemeOneVisibility' }" class="card card-primary card-outline">
                        <div class="card-body text-center">
                            <h5 class="py-5">
                                <b class="text-dark">{{ $t("Change Theme 1 Visibility") }}</b>
                            </h5>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-6 col-md-6">
                    <router-link :to="{ name: 'ThemeTwoVisibility' }" class="card card-primary card-outline">
                        <div class="card-body text-center">
                            <h5 class="py-5">
                                <b class="text-dark">{{ $t("Change Theme 2 Visibility") }}</b>
                            </h5>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-6 col-md-6">
                    <router-link :to="{ name: 'ThemeThreeVisibility' }" class="card card-primary card-outline">
                        <div class="card-body text-center">
                            <h5 class="py-5">
                                <b class="text-dark">{{ $t("Change Theme 3 Visibility") }}</b>
                            </h5>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-6 col-md-6">
                    <router-link :to="{ name: 'InnerPageVisibility' }" class="card card-primary card-outline">
                        <div class="card-body text-center">
                            <h5 class="py-5">
                                <b class="text-dark">{{ $t("Inner Page Visibility") }}</b>
                            </h5>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </section>
</template>

<script>
export default {
    name: "Visibility",
};
</script>
