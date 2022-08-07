<template>
  <div>
        <img
            class="mw-300 mb-3 img-demo"
            v-if="
                routeParamsId &&
                    viewImage
            "
            :src="viewImage"
            alt=""
        />
        <img
            class="mw-300 mb-3 img-demo"
            v-else-if="$route.params.id"
            :src="
                `/uploads/${image}`
            "
            alt=""
        />
        <img
            class="mw-300 mb-3 img-demo"
            v-else-if="viewImage"
            :src="viewImage"
            alt=""
        />
        <img
            class="mw-300 mb-3 img-demo"
            v-else
            :src="
                `/assets/admin/img/img-demo.jpg`
            "
            alt=""
        />
  </div>
</template>

<script>
export default {
    props : ['routeParamsId', 'viewImage', 'image']
}
</script>

<style>

</style>