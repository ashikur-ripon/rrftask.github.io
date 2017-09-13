(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".project-slides").owlCarousel({
            items: 3,
            loop: true,
            dots: true,
            margin: 30,
            autoplay: true,
        });
        
        $(".logo-carousel").owlCarousel({
            items: 6,
            loop: true,
            dots: true,
            margin: 30,
            autoplay: true,
        });
        
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	