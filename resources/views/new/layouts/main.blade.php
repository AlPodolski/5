<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/intim-box/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/intim-box/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/intim-box/icons/favicon-16x16.png">
    <link rel="icon" href="/intim-box/icons/favicon.svg" type="image/svg+xml">
    <link rel="manifest" href="/intim-box/icons/site.webmanifest">
    <link rel="mask-icon" href="/intim-box/icons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#4926e8">

    <meta name="theme-color" content="#4926e8">
    <meta name="googlebot" content="max-snippet:-1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="@yield('des')">

    @if(View::hasSection('can'))
        <link rel="canonical" href="@yield('can')">
        <meta name="robots" content="index, follow">
    @endif

    @if(View::hasSection('webmaster'))
        <meta name="yandex-verification" content="@yield('webmaster')">
    @endif

    @if(View::hasSection('open-graph'))
        @yield('open-graph')
    @endif

    <link rel="stylesheet" href="/css/nouislider.min.css">
    @if(View::hasSection('lightbox_css'))
        <link rel="stylesheet" href="@yield('lightbox_css')">
    @endif
    <link rel="stylesheet" href="/css/style.css?v=21">
</head>

<body>
<body>
<div class="wrapper">
    <div class="content">
        <header class="header">
            <div class="container">
                <div class="row header__row">
                    <div class="header__mob-menu header__col">
                        <div class="burger-menu" data-menu-btn>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <div class="header__logo header__col">
                        <a href="/">
                            <img class="header__logo-img" src="/images/logo.webp" alt="">
                        </a>
                    </div>
                    @if(View::hasSection('location'))
                        @yield('location')
                    @endif
                    <div class="header__ui header__col">

                        <a class="header__ui-cabinet-link" @auth
                            href="/cabinet"
                           @endauth
                           @guest
                               href="/login"
                            @endguest
                        >
                            Кабинет
                        </a>
                    </div>
                    <div class="header__col header__user">
                        <button class="header__user-btn btn">
                            <svg class="header__user-icon">
                                <use xlink:href='svg/dest/stack/sprite.svg#user'></use>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    @yield('content')
                </div>
            </div>
        </main>
    </div>
    <footer class="footer">
    </footer>
</div>

<div class="mobile-menu mobile-menu_main" data-menu>
    <div class="mobile-menu__header">

    </div>
</div>
<script defer src="/js/wNumb.min.js"></script>
<script defer src="/js/nouislider.min.js"></script>
<script defer src="/files/js/script.js?v=12"></script>
</body>

</html>