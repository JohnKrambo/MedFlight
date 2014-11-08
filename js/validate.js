		/*    Validate.js checks the Logindata and handles the Customerdata loaded with verify.php
			*	 
			* Authors: Can Kattwinkel & Andreas Krappitz
		*/
			
			function validate(){
			var username = document.getElementById('username').value;	
			var password = document.getElementById('password').value;
			
			//createArrays() gets a JSON objekt from the Database and splits them into two Arrays keys[] &values[]
			$.getJSON( "http://gg-dev.de/verify.php?username="+username+"&Password="+password, function createArrays( data ) {
			  var keys = [];
			  var values = [];
			for (var property in data) {
   				if ( ! data.hasOwnProperty(property)) {
      				continue;
   					}
  				 keys.push(property);
   				 values.push(data[property]);
					}
					
					if (values[0] == "true" ) {
					$('#main').html("");
					$('#main').html("Hallo" + " " + values[2] + " " + values[3] + 
					"</br>" + "Bitte nennen Sie die Art des medizinischen Notfalls:" + "</br>" + "<input type='button'name='button'value='" + values[6]+"'>");
					}
					else {
					$('#main').html("Login Failed");
					}
					console.log(values);
				});

			}
		
