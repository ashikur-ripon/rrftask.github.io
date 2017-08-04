(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		"use strict";
		$(".js-modal-btn").modalVideo();
		


		var homepageSlides = $(".homepage-slides");
		homepageSlides.owlCarousel({
			items:1,
			loop:true,
			dots: true,
			autoplay: false,
			nav:true,
			navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
		});
        
		homepageSlides.on('translate.owl.carousel', function(event) {
			$(".slide-item-text h4").removeClass("animated bounceIn");
			$(".slide-item-text h1").removeClass("animated jackInTheBox");
			$(".slide-item-text p").removeClass("animated fadeIn");
		})
		
		homepageSlides.on('translated.owl.carousel', function(event) {
			$(".slide-item-text h4").addClass("animated bounceIn");
			$(".slide-item-text h1").addClass("animated jackInTheBox");
			$(".slide-item-text p").addClass("animated fadeIn");
		})
		
		


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	