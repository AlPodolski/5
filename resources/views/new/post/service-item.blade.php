<div class="service-list-block-item @if($key == 'other') other-block @endif">

    <div class="service-list-item-heading position-relative">{{ $value }}</div>

    <ul class="services-ul ">

        @foreach($data['service'] as $item)

            @if($item->type == $key)

                <li class="service-list-item">

                    @php
                        $pay = false;
                        $sympathy = false;
                        $stop = false;
                    @endphp

                    @foreach($post->service as $serviceItem)

                        @if($serviceItem->service_id == $item->id)

                            @if($serviceItem->sympathy)
                                @php
                                    $sympathy = true;
                                @endphp
                            @endif

                            @if($serviceItem->pay)
                                @php
                                    $pay = true;
                                @endphp
                            @endif

                            @if($serviceItem->not_available)
                                @php
                                    $stop = true;
                                @endphp
                            @endif

                        @endif

                    @endforeach

                    @if($pay or $sympathy or $stop)

                        @if($pay)
                            <svg xmlns="http://www.w3.org/2000/svg" width="28"
                                 height="28" viewBox="0 0 28 28" fill="none">
                                <path
                                    d="M25.375 6.125H2.625C2.16087 6.125 1.71575 6.30937 1.38756 6.63756C1.05937 6.96575 0.875 7.41087 0.875 7.875V20.125C0.875 20.5891 1.05937 21.0342 1.38756 21.3624C1.71575 21.6906 2.16087 21.875 2.625 21.875H25.375C25.8391 21.875 26.2842 21.6906 26.6124 21.3624C26.9406 21.0342 27.125 20.5891 27.125 20.125V7.875C27.125 7.41087 26.9406 6.96575 26.6124 6.63756C26.2842 6.30937 25.8391 6.125 25.375 6.125ZM9.07812 20.125L2.625 14.4812V13.5187L9.07812 7.875H18.9219L25.375 13.5187V14.4812L18.9219 20.125H9.07812ZM25.375 11.2L21.5797 7.875H25.375V11.2ZM6.42031 7.875L2.625 11.2V7.875H6.42031ZM2.625 16.8L6.42031 20.125H2.625V16.8ZM25.375 20.125H21.5797L25.375 16.8V20.125ZM14 9.625C13.1347 9.625 12.2888 9.88159 11.5694 10.3623C10.8499 10.8431 10.2892 11.5263 9.95803 12.3258C9.62689 13.1252 9.54025 14.0049 9.70906 14.8535C9.87787 15.7022 10.2946 16.4817 10.9064 17.0936C11.5183 17.7054 12.2978 18.1221 13.1465 18.2909C13.9951 18.4597 14.8748 18.3731 15.6742 18.042C16.4737 17.7108 17.1569 17.1501 17.6377 16.4306C18.1184 15.7112 18.375 14.8653 18.375 14C18.375 12.8397 17.9141 11.7269 17.0936 10.9064C16.2731 10.0859 15.1603 9.625 14 9.625ZM14 16.625C13.4808 16.625 12.9733 16.471 12.5416 16.1826C12.1099 15.8942 11.7735 15.4842 11.5748 15.0045C11.3761 14.5249 11.3242 13.9971 11.4254 13.4879C11.5267 12.9787 11.7767 12.511 12.1438 12.1438C12.511 11.7767 12.9787 11.5267 13.4879 11.4254C13.9971 11.3242 14.5249 11.3761 15.0045 11.5748C15.4842 11.7735 15.8942 12.1099 16.1826 12.5416C16.471 12.9733 16.625 13.4808 16.625 14C16.6221 14.6953 16.3446 15.3613 15.853 15.853C15.3613 16.3446 14.6953 16.6221 14 16.625Z"
                                    fill="#FFB636"/>
                            </svg>
                        @endif

                        @if($sympathy)
                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                                    fill="#C811D6"/>
                            </svg>
                        @endif

                        @if($stop)
                            <svg xmlns="http://www.w3.org/2000/svg" width="22"
                                 height="22" viewBox="0 0 22 22" fill="none">
                                <path
                                    d="M10.9999 1.83333C16.0416 1.83333 20.1666 5.95833 20.1666 11C20.1666 16.0417 16.0416 20.1667 10.9999 20.1667C5.95825 20.1667 1.83325 16.0417 1.83325 11C1.83325 5.95833 5.95825 1.83333 10.9999 1.83333ZM10.9999 3.66666C9.25825 3.66666 7.69992 4.21666 6.50825 5.22499L16.7749 15.4917C17.6916 14.2083 18.3333 12.65 18.3333 11C18.3333 6.96666 15.0333 3.66666 10.9999 3.66666ZM15.4916 16.775L5.22492 6.50833C4.21659 7.7 3.66659 9.25833 3.66659 11C3.66659 15.0333 6.96659 18.3333 10.9999 18.3333C12.7416 18.3333 14.2999 17.7833 15.4916 16.775Z"
                                    fill="#E10755"/>
                            </svg>
                        @endif

                    @else

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none">
                            <path
                                d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM5 19H19V5H5V19ZM5 5V19V5Z"
                                fill="#46E356"/>
                        </svg>

                    @endif

                    <a href="/{{ $item->filter_url }}">{{ $item->value }}</a>

                </li>

            @endif

        @endforeach

    </ul>

</div>