<?php
$db = mysqli_connect("localhost", "root", "root", "boardgame");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

mysqli_query($db,"SET NAMES utf8");

//$query = "SELECT * FROM highscore";
$query ="SELECT * FROM highscore ORDER BY CONVERT(score,INTEGER) DESC";
$result = mysqli_query($db, $query);
    // or die("failed to query database ".mysqli_error());


while($item = mysqli_fetch_assoc($result)) {
    $return[] = $item;
}

echo json_encode($return);