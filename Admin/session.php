<?php
	include ('dbconf.php');

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