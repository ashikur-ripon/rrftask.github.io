(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        
        //home-page slider
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
        })

        
        //partner-area logo slider
         $(".logo-carousel").owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            margin: 120,
        })

        
        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        
        
        $(".header-area").sticky({topSpacing:0});
        
        
        //start smooth scrolling
        $('li.smooth-menu a').bind('click',function(event){
			var $anchor = $(this);
			var headerH = "60";
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top- headerH + "px"
			}, 1200, 'easeInOutExpo');
			
			event.preventDefault();
		});
		//end smooth scrolling


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	