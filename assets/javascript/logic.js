
//__________________________________________________________
//GLOBAL VARIABlES
//__________________________________________________________
	var header = $(".topnavbar");
	var aboutme = $(".about");
	var startButton = $("#getstartedbutton");
	var projectsSection = $(".portfolioimages")



//__________________________________________________________
	

//__________________________________________________________
//ANIMATION FUNCTIONS
//__________________________________________________________

  $(function() {  
    
			$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
				console.log(scroll);

				function displayAboutMe(){
					if (scroll >= 569.5999755859375) {
						$(".about").removeClass("displaynone")
						header.addClass("fixed-top fadeInDown");
						header.removeClass("bg-transparent");
						aboutme.addClass("aboutmeanimation slideInLeft")
						$(".arrowbutton").removeClass("displaynone");
			
					} 
				
					else {
						header.removeClass("fixed-top  fadeInDown ");
						header.addClass("bg-transparent");			
					}
				}

			function displayProjects(){
				if(scroll >= 2244.800048828125){
					$(".projectssection").removeClass("projectcontainer")
					projectsSection.removeClass("displaynone");
					projectsSection.addClass("aboutmeanimation zoomIn")
				}
			}
			// displayProjects();

			displayAboutMe();
		
				
      });
    });

//__________________________________________________________