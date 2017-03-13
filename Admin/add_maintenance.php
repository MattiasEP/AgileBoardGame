<?php
include('session.php');
include ('dbconf.php');

if (mysqli_connect_errno($db)) {
	echo '<h1>Anslutning till MySQL misslyckades: ' . mysqli_connect_error() .'</h1>';
	}


$new_type = 'maintenance';
$new_name = 'M';
$new_value = $_POST['value'];
$new_value = mysqli_real_escape_string($db, $_POST['value']);
$new_analysis = $_POST['analysis'];
$new_analysis = mysqli_real_escape_string($db, $_POST['analysis']);
$new_develop = $_POST['develop'];
$new_develop = mysqli_real_escape_string($db, $_POST['develop']);
$new_testing = $_POST['testing'];
$new_testing = mysqli_real_escape_string($db, $_POST['testing']);


$sql="INSERT INTO 
	cards(type,name,value,analysis,develop,test) 
	VALUES
	('$new_type','$new_name','$new_value','$new_analysis','$new_develop','$new_testing')";
		if (!mysqli_query($db,$sql)) {
			die('Error: ' . mysqli_error($db));
		} else {
			header('Location: index.php');
			}
	mysqli_close($db);
?>