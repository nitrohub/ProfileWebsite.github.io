carousal();

        function carousal() {
            $("#banner-slider-demo-17").owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: false,
                dots: true,
                navRewind: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                loop: true
            });
        }