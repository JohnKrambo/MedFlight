/*    Validate.js checks the Logindata and handles the Customerdata loaded with verify.php
			*	 
			* Authors: Can Kattwinkel & Andreas Krappitz
		*/
			
			function validate(){
			var username = document.getElementById('username').value;	
			var password = document.getElementById('password').value;
			
			//createArrays() gets a JSON objekt from the Database and splits them into two Arrays keys[] &values[]
				$.getJSON( "http://gg-dev.de/verify.php?username="+username+"&password="+password, function( data ) {
				
				var items = [];
			  	$.each( data, function( key, val ) {
				// legt jeweils nur den Wert in die Variable
					items.push( val );
			  	});
				
				// Werte werden nun im localstorage gespeichert wenn items[0] (LOGIN) = true
				if (items[0] == "true" ) {
					localStorage.setItem("login", true);
					localStorage.setItem("id", items[1]);
					localStorage.setItem("forename", items[2]);
					localStorage.setItem("surname", items[3]);
					localStorage.setItem("street", items[4]);
					localStorage.setItem("zip", items[5]);
					localStorage.setItem("loginDate",  new Date());
					localStorage.setItem("disease0", items[6]);
					localStorage.setItem("disease1", items[7]);
					localStorage.setItem("disease2", items[8]);
					localStorage.setItem("disease3", items[9]);
					localStorage.setItem("disease4", items[10]);
					alert("Daten erfolgreich im LocalStorage abgelegt")
					window.location = "main.html";

				}
				else {
					alert("fail")
					}
				});

			}