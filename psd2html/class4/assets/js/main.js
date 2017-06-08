(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
		
		//owl carousel 		
		$(".case-studies-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
		});

		$(".testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
		});  



         $(".hello").owlCarousel(); 


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	