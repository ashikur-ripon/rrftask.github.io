(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		"use strict";
		$(".js-modal-btn").modalVideo();

		$('.welcome-area').YTPlayer({
			fitToBackground: true,
			videoId: 'LSmgKRx5pBo'
		});
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	