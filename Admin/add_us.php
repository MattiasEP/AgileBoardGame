<?php
include('session.php');

//$db = mysqli_connect('release2-219291.mysql.binero.se', '219291_hl93208', 'Sommar17', '219291-release2');
$db = mysqli_connect("localhost", "root", "", "boardgame");
mysqli_query($db, "SET NAMES utf8");

if (mysqli_connect_errno($db)) {
	echo "<h1>Anslutning till MySQL misslyckades: " . mysqli_connect_error() ."</h1>";
	}


$new_type = "userstory";
$new_name = $_POST['name'];
$new_name = mysqli_real_escape_string($db, $_POST['name']);
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
			header("Location: index.php");
			}
	mysqli_close($db);


?>