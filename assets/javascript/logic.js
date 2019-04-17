$(function() {
  var header = $(".navbar");
  var aboutme = $("#aboutmesection")
  var navItem = $(".nav-link");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      console.log(scroll)
      if (scroll >= 602.4000244140625) {
          header.addClass("fixed-top");
          header.removeClass("bg-transparent");
          navItem.removeClass("black");
      } else {
          header.removeClass("fixed-top");
          header.addClass("bg-transparent");
      }

      // if (scroll >= 1204.800048828125){
      //   header.font
      // }
  });

});