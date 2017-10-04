(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
        })

         $(".logo-carousel").owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            margin: 120,
        })

        
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	