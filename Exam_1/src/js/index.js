
//dark theme

$ ('.header__change-theme').click(function() {
   $('body').toggleClass('dark');
});


// fixed header after scroll

let header = $(".header");
let scrollChange = 30;

$(window).scroll(function() {
   let scroll = $(window).scrollTop();
   if (scroll >= scrollChange) {
      header.addClass('fixed');
   } else {
      header.removeClass("fixed");
   }
});

//burger

$ ('.header__burger').click(function() {
   $('.header__burger').toggleClass('active');
   $('.header__nav').toggleClass('active');
});




