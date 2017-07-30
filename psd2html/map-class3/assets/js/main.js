(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		var uluru = {lat: 24.3683508, lng: 88.6354386};
		$('.map')
		  .gmap3({
			zoom: 16,
			center: uluru,		
			scrollwheel: false,		
			styles: [
				{elementType: 'geometry', stylers: [{color: '#EBE8DE'}]},
				{elementType: 'labels.text.fill', stylers: [{color: '#2c3e50'}]},
				{
				  featureType: 'administrative.locality',
				  elementType: 'labels.text.fill',
				  stylers: [{color: '#2c3e50'}]
				},
	
				{
				  featureType: 'road',
				  elementType: 'geometry',
				  stylers: [{color: '#ffffff'}]
				},
				{
				  featureType: 'road',
				  elementType: 'labels.text.fill',
				  stylers: [{color: '#e74c3c'}]
				},
				{
				  featureType: 'road.highway',
				  elementType: 'geometry',
				  stylers: [{color: '#ffffff'}]
				},
				{
				  featureType: 'road.highway',
				  elementType: 'labels.text.fill',
				  stylers: [{color: '#c0392b'}]
				},
				{
				  featureType: 'transit',
				  elementType: 'geometry',
				  stylers: [{color: '#2980b9'}]
				},
				{
				  featureType: 'transit.station',
				  elementType: 'labels.text.fill',
				  stylers: [{color: '#c0392b'}]
				},
				{
				  featureType: 'water',
				  elementType: 'geometry',
				  stylers: [{color: '#ecf0f1'}]
				},
				{
				  featureType: 'water',
				  elementType: 'labels.text.fill',
				  stylers: [{color: '#34495e'}]
				},
			]
		  })
	
		  .infowindow({
			position: uluru,
			content: "<div class='map-area-text'> <h5>Address</h5> <p>470 Lucy Forks, Patriciafurt, YC7B 3UT</p> <div style='height:20px'></div> <h5>Phone Number</h5> <p>(0161) 347 8854 <span>(0117) 900 9463 </span> </p> </div>"
		  
		  })
		  
		  .then(function (infowindow) {
			infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
		  });
		  
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	