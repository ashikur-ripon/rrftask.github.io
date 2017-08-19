(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



		$(".testimonial-slides").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
			autoplay: true,
		}); 
		
		//company carousel 
		$(".logo-carousel").owlCarousel({
			items: 5,
			loop: true,
			dots: false,
			nav: false,
			autoplay: false,
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
		// end company carousel
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
		
		$('#bar1').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar2').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar3').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar4').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar5').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar6').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar7').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar8').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar9').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar10').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar11').barfiller({ barColor: '#7f56fd', duration: 0 });	
		$('#bar12').barfiller({ barColor: '#7f56fd', duration: 0 });	

		
		
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

		
		//scroll spying
	    $('body').scrollspy({ 
			target: '.mainmenu',
			offset : 95 
		});	   
      //scroll spying		

		$.scrollUp({
			scrollSpeed: 300,
			animationSpeed: 200,
		});
	
		
	// isotope
		$(".portfolio-filter li").on('click', function() {
			
			var filterData = $(this).attr("data-filter");
			
			$(".services-isotope").isotope({
				filter: filterData
			});
			
			$(".portfolio-filter li").removeClass('active');
			$(this).addClass('active');
		});
		

		$(".services-isotope").isotope({
			itemSelector: '.single-service-isotope',
			percentPosition: true,
			masonry: {
				columnWidth: '.single-service-isotope',
				horizontalOrder: true 
			}
		});

	
	
		
    });
	
	


    jQuery(window).load(function(){

        
    });


}(jQuery));	