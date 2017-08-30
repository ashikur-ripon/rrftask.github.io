(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".portfolio-list").masonry();
        
        
        $(".single-portfolio-item").hover(function(){
            $(".single-portfolio-item .portfolio-hover h2").removeClass("animated slideInDown");
            
            $(this).find(".portfolio-hover h2").addClass("animated slideInDown");
        });
        
        
        $(".menu-trigger").on('click', function(){
            $(".offcanvas-menu").addClass("active");
            $(".offcanvas-menu-overlay").addClass("active");
        });
        
        $(".menu-close i.fa, .offcanvas-menu-overlay").on('click', function(){
            $(".offcanvas-menu").removeClass("active");
            $(".offcanvas-menu-overlay").removeClass("active");
        });
        
        
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	