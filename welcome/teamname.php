<?php
	$db = mysqli_connect("localhost", "root", "root", "boardgame");

//DEFINA IF VARIABLE IS SET
if  (isset($_POST['name']))

{
  // SQL INJECTIONS
  $name = mysqli_real_escape_string($db, $_POST['name']);

  // INSERT INTO DATABASE
  $query =  "INSERT into teamname (id, name)
             VALUES (NULL, '$name')
            ";

  // SENDS A MYSQL QUERY
  mysqli_query($db, $query);

  header("Location: http://localhost:3000");
}

?>
