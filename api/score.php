<!DOCTYPE HTML>
<html>
<head></head>
<body>
<style>
.div{
	border:1px solid black;
	border-radius:10px;
	box-shadow: 7px 5px 7px;
	padding:10px;
	margin:5px;
	width:300px;
	font-size:2em;
	text-align:center;
}
</style>
<?php

	$db = mysqli_connect("localhost", "root", "", "boardgame");
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
	mysqli_query($db,"SET NAMES utf8");

	$query ="SELECT * FROM highscore ORDER BY CONVERT(score,INTEGER) DESC";
	$result = mysqli_query($db,$query);
    // or die("failed to query database ".mysqli_error());


	while($item = mysqli_fetch_assoc($result)) {
	echo  "<div class='div'>" .$item['teamname'] ." ". $item['score']. "<br/></div>";
    //print_r($item['teamname'] . $item['score']. '<br><br>'  );
	}


	//echo json_encode($return);
?>
</body>
</html>