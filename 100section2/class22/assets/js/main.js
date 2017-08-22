(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$(".portfolio-items").owlCarousel({
			items: 5,
			nav: true,
			dots: true,
			loop: true,
			navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
		});

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	