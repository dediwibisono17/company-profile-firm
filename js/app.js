$('.sliderx').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    fade:true
});

$('.positive').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    fade:true
});


$(document).ready(function () {
    $('.list-group li a').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        $('li a').removeClass("active");
        $(this).addClass("active");
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 72
        }, 300);


        // return false;
    });
});

// $(window).scroll(function () {
//     var scrollDistance = $(window).scrollTop();



//     // Assign active class to nav links while scolling
//     $('.wrapping__content').each(function (i) {
//         if ($(this).position().top <= scrollDistance) {
//             $('.list-group-item a.active').removeClass('active');
//             $('.list-group-item a').eq(i).addClass('active');
//         }
//     });
// }).scroll();

// $('.slider-news').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });