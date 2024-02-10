$(document).ready(function(){
    
});

    
// hero slider
$('.hero_slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    appendDots: $('.hero_slider_dots'),
    dots:true,
});
// pro slider
 $('.pro_slider').slick({
    
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow:4,
    nextArrow:'<i class="fa-solid fa-chevron-left slider_arrow"></i>',
    prevArrow:'<i class="fa-solid fa-chevron-right slider_arrow"></i>',
    responsive:[
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 575.98,
         settings: {
            slidesToShow: 1
         }
      }
    ]
    
 });
 //preloder start
 $(window).on("load", function () {
    $(".preload").fadeOut();
  });
//preloder start

// Feedback_slider
$('.Feedback_slider').slick({
   arrows: false,
   slidesToShow:1,
   autoplaySpeed: 4000,
   fade: true,
   dots:true,
   appendDots: $('.Feedback_slider_dots'),

});
