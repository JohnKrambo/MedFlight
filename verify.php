<?php

header('Access-Control-Allow-Origin: *');

$db = new PDO('mysql:host=localhost;dbname=d01c411f;charset=utf8','d01c411f', '2rbvsNob8ALZ3aU9');

$username = $_GET["username"]; 
$password = md5($_GET["password"]);
$i = 0;
    
foreach  ($db->query("
	SELECT * FROM patients_have_diseases 
	JOIN diseases 
		ON patients_have_diseases.krankheiten_id = diseases.id
	JOIN  patients 
		ON patients_have_diseases.patienten_id = patients.id 
	WHERE patients.username ='".$username."'") as $row) {

	if($row['password'] == $password) { 
		if ($i == 0) {
			$ausgabe = array(
				'login' => "true",
				'id' =>  $row["id"],
				'forename' =>$row["forename"],
				'surname' =>$row["surname"],
				'street' =>$row["street"],
				'zip' =>$row["zip"]
				);		
			$ausgabe["disease0"] = $row["disease"];

		} 
			 
		//array_push($ausgabe, $row["disease"]);
		$ausgabe["disease".$i] = $row["disease"];
		$i++;

	} else 
			{ 
				$ausgabe["login"] = "false";
			 		}
	}
echo stripslashes(json_encode($ausgabe)); 
?>