(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$(".product-list").masonry()
        
        $(".homepage-slides").owlCarousel({
            items:1,
            loop: true,
            autoPlay: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
        });

        $(".product-promotions").owlCarousel({
            items:1,
            loop: true,
            autoPlay: true,
            dots: true,
            nav: false,
        });
        
        $(".menu-trigger").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close, .off-canvas-overlay").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
            return false;
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	