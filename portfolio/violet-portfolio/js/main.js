(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


		$(".testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			autoplay: true,
			autoplayTimeout:5000,
		});
		
		$(".partner-logo").owlCarousel({
			margin: 30,
			loop: true,
			autoplay: true,
			autoplayTimeout:5000,
			responsive : {
				0 : {
					items: 2
				},
				768 : {
					items: 3
				},
				992 : {
					items: 5
				}				
			}
		});
		
		// slicknav
		$('#traffic-menu').slicknav({
			prependTo: '#mobile-menu-wrap',
			allowParentLinks: true 
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
		
        
		$.scrollUp({
			scrollSpeed: 300,
			animationSpeed: 200,
			scrollImg: true,
		});

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	