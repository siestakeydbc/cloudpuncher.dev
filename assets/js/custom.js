/*-----------------------------------------------------------
* Template Name    : Kerri | Responsive Bootstrap 4 Personal Template
* Author           : SRBThemes
* Created          : March 2018
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function ($) {
    "use strict";

    var KerriApp = function () { };

    //PreLoader
    KerriApp.prototype.initPreLoader = function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

        //scroll
        KerriApp.prototype.initStickyMenu = function () {
            var navbar = document.querySelector('nav')
            window.onscroll = function () {
                // pageYOffset or scrollY
                if (window.pageYOffset > 200) {
                    navbar.classList.add('stickyadd')
                } else {
                    navbar.classList.remove('stickyadd')
                }
            }
            var navLinks = navbar.querySelectorAll("ul li a");
            [].forEach.call(navLinks, function (div) {
                div.addEventListener('click', () => {
                    document.querySelector(".navbar-toggler") ? document.querySelector(".navbar-toggler").click() : '';
                });
            });
        },

        //Scrollspy
        KerriApp.prototype.initScrollspy = function () {
            var scrollSpy = new bootstrap.ScrollSpy(document.body, {
                target: '#main_nav',
                offset: 70
            })
        },

        //Work
        KerriApp.prototype.initWork = function () {
            $(window).on('load', function () {
                var $container = $('.work-filter');
                var $filter = $('#menu-filter');
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                $('.pattern a').on('click', function (event) {
                    event.preventDefault(); // Prevent the default behavior of the anchor tag

                    // Remove the active class from all other <a> tags
                    $('.pattern a').removeClass('active');

                    // Add the active class to the clicked <a> tag
                    $(this).addClass('active');

                    // Get the data-color attribute value
                    var color = $(this).attr('data-color');

                    // Update the data-color attribute value in the HTML tag
                    $('.data_color').attr('data-color', color);
                });

                $filter.find('a').on("click", function () {
                    var selector = $(this).attr('data-filter');
                    $filter.find('a').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            });
        },

        //Magnificpop
        KerriApp.prototype.initMagnificPopup = function () {
            $('.img-zoom').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });
        },

        // BACK TO TOP
        KerriApp.prototype.initBackToTop = function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('.back_top').fadeIn();
                } else {
                    $('.back_top').fadeOut();
                }
            });
            $('.back_top').click(function () {
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            });
        },

        //Client
        KerriApp.prototype.initTestimonial = function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                nav: false,
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                autoHeight: false,
                autoHeightClass: 'owl-height'
            })
        }

    KerriApp.prototype.init = function () {
        this.initPreLoader();
        this.initStickyMenu();
        this.initScrollspy();
        this.initWork();
        this.initMagnificPopup();
        this.initBackToTop();
        this.initTestimonial();
    },
        //init
        $.KerriApp = new KerriApp, $.KerriApp.Constructor = KerriApp
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.KerriApp.init();
    }(window.jQuery);


//Dark layout themes mode
var dataTheme = document.getElementById('dataTheme');

dataTheme.addEventListener('click', function () {
    var body = document.body;
    var attributeValue = body.getAttribute('data-bs-theme');

    if (attributeValue) {
        body.removeAttribute('data-bs-theme');
    } else {
        body.setAttribute('data-bs-theme', 'dark');
    }
});

// Rtl layout
var dataRTL = document.getElementById('theme_Rtl_Ltr');
var html = document.documentElement;
dataRTL.addEventListener('click', () => {
    // toggleDirection()
    var rtlStatus = html.getAttribute('dir');
    if (rtlStatus === 'ltr') {
        document.getElementById('bootstrap').setAttribute('href', "assets/css/bootstrap.rtl.min.css");
        html.setAttribute('dir', 'rtl');
        localStorage.setItem('dir', 'rtl');

    } else {
        document.getElementById('bootstrap').setAttribute('href', "assets/css/bootstrap.min.css")
        html.setAttribute('dir', 'ltr');
        localStorage.setItem('dir', 'ltr');

    }
})
html.setAttribute('dir', localStorage.getItem('dir'))
if (html.getAttribute('dir') === 'rtl') {
    document.getElementById('bootstrap').setAttribute('href', "assets/css/bootstrap.rtl.min.css");

}