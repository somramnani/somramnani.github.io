$(function() {
  var header = $(".navbar");
  var aboutme = $("#aboutmesection");
  var navItem = $(".nav-link");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 602.4000244140625) {
          header.addClass("fixed-top");
          header.removeClass("bg-transparent");
          header.addClass("fadeInDown")
          
      } else {
          header.removeClass("fixed-top  fadeInDown");
          header.addClass("bg-transparent");
      }
  });

});