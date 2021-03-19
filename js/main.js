$(document).ready(function () {

    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // animated circle progress bar js

    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });

    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({
                    'stroke-dashoffset': strokeDashOffset
                }, 1250);
            }
        });
    }).trigger('scroll');

    // sticky top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".navbar").addClass("sticky_top");
        } else {
            $(".navbar").removeClass("sticky_top");
        }
    });

    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_to_top").fadeIn();
        } else {
            $(".scroll_to_top").fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // wow js

    new WOW().init();

    // preloader js

    $(window).on("load", function () {
        $(".preloader").delay(2000).fadeOut(600);
    });
    
    // responsive menu js
    
    $(".openNav").click(function(){
        $(".overlay").show("slow");
    });
    
    $(".closeNav").click(function(){
        $(".overlay").hide("slow");
    }); 
    
    $(".overlay_top a img").click(function(){
        $(".overlay").hide("slow");
    });
    
    $(".overlay_content ul li a").click(function(){
        $(".overlay").hide("slow");
    });
    
    

});


//Mixit up js

var mixer = mixitup('.cont');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
