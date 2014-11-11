// JavaScript Document




window.onload = function() {
	document.addEventListener("deviceready", function() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			document.getElementById('karte').innerHTML = "Geolokation ist nicht möglich";
		}
	}, false);
}
function success(position) {
	document.getElementById('karte').innerHTML = 
	  "Das Objekt navigator.geolocation liefert:<hr />" + 
	  "Breitengrad: " + position.coords.latitude + 
	  "<br />L&auml;ngengrad: " + position.coords.longitude + 
	  '<br />&Uuml;bergangsh&ouml;he: ' + position.coords.altitude + 
	  '<br />' + 'Genauigkeit: ' + position.coords.accuracy + 
	  '<br />' + 'Genauigkeit &Uuml;bergangsh&ouml;he: ' + position.coords.altitudeAccuracy + 
	  '<br />' + 'Steuerkurs: ' + position.coords.heading + '<br />' + 
	  'Geschwindigkeit: ' + position.coords.speed + '<br />' + 
	  'Zeitstempel: ' + position.timestamp;
}
function error(msg) {
	document.getElementById('karte').innerHTML = 
	  "Fehler bei der Lokalisierung:<br /> " + msg;
}