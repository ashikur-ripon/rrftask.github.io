(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
		
		//owl carousel 		
		$(".case-studies-carousel").owlCarousel({
		
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				992 : {
					items: 3
				}				
			}
		});
		

		
		
		$(".testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
		});  
		//end owl carousel

		//company carousel 
		$(".logo-carousel").owlCarousel({
		
			loop: true,
			dots: false,
			nav: false,
			responsive : {
				0 : {
					items: 2
				},
				768 : {
					items: 4
				},
				992 : {
					items: 6
				}				
			}
		});  
		// end company carousel

		
		
		// home2 js

		$(".theme2-case-studies-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				992 : {
					items: 3
				}			
		});
		
		$(".theme2-single-testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
		});  
		
		$(".theme2-blog-box-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				992 : {
					items: 3
				}
		});
		
		
		// home3 js
		$(".homepage-slides").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: true,
			navText: ["<i class='fa fa-arrow-left'>",
					  "<i class='fa fa-arrow-right'>"]
		});
		
		
		// home4 js
		
		// off canvas menu
		$(".menu-trigger").on('click',function(){
			$(".off-canvas-menu").addClass("show-off-canvas-menu");
			$(".off-canvas-menu-shade").addClass("active");
		});
		$(".menu-close,.off-canvas-menu-shade").on('click',function(){
			$(".off-canvas-menu").removeClass("show-off-canvas-menu");
			$(".off-canvas-menu-shade").removeClass("active");
		});
		
		$(".single-testimonial-box").hover(function() {
			$(".single-testimonial-box").removeClass('active');
			$(this).addClass('active');
		});
		
		$(".video-play-btn").magnificPopup ({
			type: 'video'
		});
		
		
		// disable map scrolling
		$('.map-area-wrapper')
			.click(function(){
					$(this).find('iframe').addClass('clicked')})
			.mouseleave(function(){
					$(this).find('iframe').removeClass('clicked')});
					
					
		// slicknav
		$('#traffic-menu').slicknav({
			prependTo: '#mobile-menu-wrap',
			allowParentLinks: true 
		});

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	