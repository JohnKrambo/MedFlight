 
 
 // GEO LOCATION GET LAT + LON
 
 
 		 geolocation =    	function(){
		   		var options = {enableHighAccuracy: true};
		   		watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
//function on Success gibt die Position zurück in einem PositionObjekt	
	function onSuccess(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		
		localStorage.setItem("latitude",lat);
		localStorage.setItem("longitude",lng);
		
		//alert("lat: " + lat + "long: " + lng );
	}	   		
		function onError(error){
			alert("you dont have service"+ error.message); 
		}		   		
		   		
		   	}
		   geolocation();

 
 
 
 	var map;
   	var lat = localStorage.getItem("latitude") 
   	var lng = localStorage.getItem("longitude") 
	  var aktuellePosition =new google.maps.LatLng(lat,lng);
	// aktivieren wenn wir irgendwann mit 2 Markern Arbeiten wollen ( 0: Standort, 1: Ankunft Drohen)
	//  var ankunft =new google.maps.LatLng(48.17055,11.550579);
      
	  
	  function initialize() {
        var mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(lat,lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);			
		
		
	
		var marker =new google.maps.MarkerImage('img/marker.png');
	
		
		
		var marker1 = new google.maps.Marker({
          position:aktuellePosition,
          map: map,		
		  icon:marker,
          title: 'Aktuelle Position'
        });
		
		
		/*
		
		aktivieren wenn 2 Marker, s.o.
		
		var marker2 = new google.maps.Marker({
          position:ankunft,
		 
          map: map,
          title: 'Olympia Park'
        });
			*/	
		
	
		
	
	  
	  
      }
