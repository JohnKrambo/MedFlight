 
 
 // GEO LOCATION GET LAT + LON 
 
 		 geolocation = function(){
		   	var options = {enableHighAccuracy: true};
			watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
			//function on Success gibt die Position zurück in einem PositionObjekt	
			function onSuccess(position) {
				var lat = position.coords.latitude;
				var lng = position.coords.longitude;	
				//localStorage.setItem("latitude",lat);
				//localStorage.setItem("longitude",lng);
				alert("lat: " + lat + "long: " + lng );
				 return [lat, lon]
			}	   			
			//when geolocation doesn´t get a location
			function onError(error){
				 localStorage.setItem("noService",true); 
			}		   		   		
		}

 
 
	var temPos = geolocation();
 	var map;
   	var lat = localStorage.getItem(temPos[0]) 
   	var lng = localStorage.getItem(temPos[1]) 
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
          title: 'Aktuelle Position',
		  animation: google.maps.Animation.DROP,

        });
		
		
		  // On idle, change marker animation to bounce
    google.maps.event.addListener(map, 'idle', function () {
        marker1.setAnimation(google.maps.Animation.BOUNCE);
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
 function countdown(){
var end = new Date('12/24/2014 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + 'days ';
        document.getElementById('countdown').innerHTML += hours + 'hrs ';
        document.getElementById('countdown').innerHTML += minutes + 'mins ';
        document.getElementById('countdown').innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
}