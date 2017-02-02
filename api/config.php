<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$db = mysqli_connect("localhost", "root", "root", "boardgame");
mysqli_query($db, "SET NAMES utf8");
