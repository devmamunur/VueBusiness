
<!DOCTYPE html>
<html lang="zxx">

<head>
    <!--====== Required meta tags ======-->
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="{{ $setting->meta_description }}"/>
    <meta name="keywords" content="{{ $setting->meta_keywords }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!--====== Title ======-->
    <title> {{ $setting->website_title }} </title>
    <!--====== Favicon Icon ======-->
    <link rel="shortcut icon" href="{{  asset('uploads/'.$setting->fav_icon) }}" type="img/png" />
    <!--====== Bootstrap css ======-->
    <link rel="stylesheet" href="{{ asset('assets/app') }}/css/bootstrap.min.css" />
    <!--====== Font Awesome ======-->
    <link rel="stylesheet" href="{{ asset('assets/app') }}/css/font-awesome.min.css" />
    <!--====== Slick Slider ======-->
    <link rel="stylesheet" href="{{ asset('assets/app') }}/css/slick.css" />
    <!--====== Animate CSS ======-->
    <link rel="stylesheet" href="{{ asset('assets/app') }}/css/animate.min.css" />
     <!--====== Main Css ======-->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/app') }}/css/new.css">

    <link rel="stylesheet" href="{{ asset('css/dynamic.php')}}?color={{ str_replace('#','', App\Models\Setting::first()->base_color) }}">
</head>

<body>


    <div id="app">
        <app-master/>
    </div>

    <!--====== Back to top start ======-->
    <div class="back-to-top">
        <a href="#"> <i class="fas fa-arrow-up"></i> </a>
    </div>
    <!--====== Back to top start ======-->

    <!--====== Js ======-->
    <script src="{{ asset('js/app.js') }}"></script>
    <!--====== Wow ======-->
    <script src="{{ asset('assets/app') }}/js/wow.min.js"></script>
    <!--====== Main JS ======-->
    <script src="{{ asset('assets/app') }}/js/main.js"></script>
</body>

</html>