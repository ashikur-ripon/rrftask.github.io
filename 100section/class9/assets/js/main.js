(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".client-testimonial-carousel").owlCarousel({
            items: 3,
            loop: true,
            dots: true,
            margin: 30,
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	