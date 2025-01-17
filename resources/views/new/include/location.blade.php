<div class="header__location header__col">
    <ul class="header__location-list">
        <li class="header__location-list__item city-location">

            <div class="header__location-list__item-title">
                <svg class="header__location-icon" onclick="close_city_list()">
                    <use xlink:href='/svg/dest/stack/sprite.svg#map'></use>
                </svg>
                <div class="header__location-text" onclick="close_city_list()">
                    {{ $data['current_city']->city }}
                </div>
                <svg class="header__location-arrow">
                    <use xlink:href='/svg/dest/stack/sprite.svg#arrow-down'></use>
                </svg>
            </div>
            <ul class="header__location-list__sub_city header__location-list__sub_city">

                <li class="header__location-list__sub">

                    <ul>
                        @foreach($data['city_list'] as $item)
                            <li class="header__location-list__sub-item">
                                <a href="https://{{ $item->url }}.{{ SITE }}"
                                   class="header__location-list__sub-link link-reset">
                                    {{ $item->city }}
                                </a>
                            </li>
                        @endforeach
                    </ul>

                </li>


            </ul>
        </li>

        @if($data['metro']->first())

            <li class="header__location-list__item metro-list">
                <div class="header__location-list__item-title">
                    <svg class="header__location-icon">
                        <use xlink:href='/svg/dest/stack/sprite.svg#metro'></use>
                    </svg>
                    <div class="header__location-text">
                        Метро
                    </div>
                    <svg class="header__location-arrow">
                        <use xlink:href='/svg/dest/stack/sprite.svg#arrow-down'></use>
                    </svg>
                </div>

                <ul class="header__location-list__sub">

                    @foreach($data['metro'] as $item)

                        <li class="header__location-list__sub-item">
                            <a href="/{{ $item->filter_url }}" class="header__location-list__sub-link link-reset">
                                {{ $item->value }}
                            </a>
                        </li>

                    @endforeach

                </ul>
            </li>

        @endif
    </ul>
    <div class="header__location-city">
    </div>
</div>
