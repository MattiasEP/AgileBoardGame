<?php
session_start();
$error='';
if (isset($_POST['submit'])) {
	if (empty($_POST['username']) || empty($_POST['password'])) {
	$error = "Användarnamnet eller lösenordet är felaktigt";
	} else {
	//$db = mysqli_connect('release2-219291.mysql.binero.se', '219291_hl93208', 'Sommar17', '219291-release2');
	$db = mysqli_connect("localhost", "root", "root", "boardgame");
	mysqli_query($db, "SET NAMES utf8");

	$username=$_POST['username'];
	$username= mysqli_real_escape_string($db, $_POST['username']);
	$password=$_POST['password'];
	$password= mysqli_real_escape_string($db, $_POST['password']);

	$query = "SELECT * FROM login WHERE password='$password' AND username='$username'";
	$rows = mysqli_query($db, $query);
	if ($rows == 1) {
		$_SESSION['login_user']=$username;
		header("location: loggedin.php");
		} else {
			$error = "Användarnamnet eller lösenordet är felaktigt";
		}
		mysqli_close($db);
		}
	}
?>
