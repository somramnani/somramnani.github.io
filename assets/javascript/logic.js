
//__________________________________________________________
//GLOBAL VARIABlES
//__________________________________________________________
	var header = $(".topnavbar");
	var aboutme = $(".about");
	var startButton = $("#getstartedbutton");



//__________________________________________________________
	

//__________________________________________________________
//ANIMATION FUNCTIONS
//__________________________________________________________

  $(function() {  
    
		
			$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
				console.log(scroll);
        if (scroll >= 602.4000244140625) {
					$(".about").removeClass("displaynone")
          header.addClass("fixed-top fadeInDown");
          header.removeClass("bg-transparent");
					aboutme.addClass("aboutmeanimation slideInLeft")
				} 
		
				else {
					header.removeClass("fixed-top  fadeInDown ");
          header.addClass("bg-transparent");
				
				}
      });
    });

//__________________________________________________________