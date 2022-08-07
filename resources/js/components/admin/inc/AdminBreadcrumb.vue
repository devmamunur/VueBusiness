<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">{{ $t($route.name.replace(/([A-Z])/g, ' $1').trim()) }}</h1>
                </div>
                <!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link :to="{ name: 'AdminDashboard' }">
                                <i class="fas fa-home"></i>
                                {{ $t('Home') }}
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">{{ $t($route.name.replace(/([A-Z])/g, ' $1').trim()) }}</li>
                    </ol>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
</template>

<script>
export default {
    name : "AdminBreadcrumb"
}
</script>

<style>

</style>