<?php
$db = mysqli_connect("localhost", "root", "root", "boardgame");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

mysqli_query($db,"SET NAMES utf8");

// $query = "SELECT * FROM cards";
// $result = mysqli_query($db, $query);
//     // or die("failed to query database ".mysqli_error());


// while($item = mysqli_fetch_assoc($result)) {
//     $return[] = $item;
// }

// echo json_encode($return);


if(isset($_POST['teamName']) && isset($_POST['score'])) {
    $teamName = mysqli_real_escape_string($db, $_POST['teamName']); 
    $score = mysqli_real_escape_string($db, $_POST['score']);

    $query = "INSERT INTO highscore (teamName, score) VALUES ('$teamName', $score)";
    if(!mysqli_query($db, $query)) {
        echo mysqli_error($db);
    }
}