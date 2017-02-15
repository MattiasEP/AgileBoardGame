<?php
	//$db = mysqli_connect('release2-219291.mysql.binero.se', '219291_hl93208', 'Sommar17', '219291-release2');
	$db = mysqli_connect("localhost", "root", "", "boardgame");
	//mysqli_query($db, "SET NAMES utf8");

	session_start();
	$user_check=$_SESSION['login_user'];
	$query = "select username from login where username='$user_check'";
	$ses_sql=mysqli_query($db, $query);
	$row = mysqli_fetch_assoc($ses_sql);
	$login_session =$row['username'];
	if(!isset($login_session)){
		mysqli_close($db);
		header('Location: index.php');
	}
?>