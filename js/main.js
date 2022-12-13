(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1,
                loop: false
            },
            576:{
                items:1,
                loop: false
            },
            768:{
                items:2,
                loop: false
            },
            992:{
                items:3,
                loop: false
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    // Flavor limiter
    $('.flavors :checkbox').change(function () {
        var $cs = $(this).closest('.flavors').find(':checkbox:checked');
        if ($cs.length > 5) {
            this.checked = false;
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

    // Customer 1 Popup
document.querySelector("#show-scoop1").addEventListener("click", function(){
    document.querySelector(".popup1").classList.add("active");
});

document.querySelector(".popup1 .close-popup").addEventListener("click", function(){
    document.querySelector(".popup1").classList.remove("active");
});

    // Customer 2 Popup
document.querySelector("#show-scoop2").addEventListener("click", function(){
    document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .close-popup").addEventListener("click", function(){
    document.querySelector(".popup2").classList.remove("active");
});

    // Customer 3 Popup
document.querySelector("#show-scoop3").addEventListener("click", function(){
    document.querySelector(".popup3").classList.add("active");
});

document.querySelector(".popup3 .close-popup").addEventListener("click", function(){
    document.querySelector(".popup3").classList.remove("active");
});

    // Customer 4 Popup
document.querySelector("#show-scoop4").addEventListener("click", function(){
    document.querySelector(".popup4").classList.add("active");
});

document.querySelector(".popup4 .close-popup").addEventListener("click", function(){
    document.querySelector(".popup4").classList.remove("active");
});

    // Customer 5 Popup
document.querySelector("#show-scoop5").addEventListener("click", function(){
    document.querySelector(".popup5").classList.add("active");
});

document.querySelector(".popup5 .close-popup").addEventListener("click", function(){
    document.querySelector(".popup5").classList.remove("active");
});






