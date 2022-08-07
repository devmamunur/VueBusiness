<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $setting->website_title }}</title>
    <link rel="shortcut icon" href="{{ asset('uploads/' . $setting->fav_icon) }}" type="img/png" />
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div id="admin">
        <admin-master />
    </div>
    <script src="{{ asset('assets/admin/js/jquery.min.js') }}"></script>
    <script src="{{ asset('assets/admin/js/adminlte.js') }}"></script>
    <script src="{{ asset('js/admin.js') }}"></script>
</body>

</html>
