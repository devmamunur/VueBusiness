<template>
    <footer class="main-footer d-flex justify-content-between p-2">
        <div class="d-none d-sm-inline-block">
            <b>Made By:</b> <a href="https://mamunverse.com/">Mamunur Rashid</a>
        </div>
        <div class="d-none d-sm-inline-block">
            <b>{{ $t('Version :') }}</b> {{ $t('1.0.0') }}
        </div>
    </footer>
</template>

<script>

export default {
    name : "AdminFooter"
}
</script>
