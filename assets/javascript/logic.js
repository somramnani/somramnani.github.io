$(function() {
  var header = $(".navbar");
  var aboutme = $("#aboutmesection");
  var projectsSection = $("#projectssection")
  var navItem = $(".nav-link");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 602.4000244140625) {
          header.addClass("fixed-top fadeInDown");
          header.removeClass("bg-transparent");
        
          aboutme.addClass("aboutmeanimation slideInLeft")
         
          
      } else {
          header.removeClass("fixed-top  fadeInDown");
          header.addClass("bg-transparent");

          aboutme.removeClass("aboutmeanimation slideInLeft");
         
      }
  });

});