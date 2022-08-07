<template>

</template>

<script>
export default {
  name: "AdminLogout",
  created(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.$notify({
        title: 'Success',
        message: 'Logout Successfully !',
        type: 'success'
    });
    this.$router.push({name : "AdminLogin"})
  }
};
</script>