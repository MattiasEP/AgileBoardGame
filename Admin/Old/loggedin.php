<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="../style/style.css">
</head>
<body>
	<nav>
		<a href="loggedin.php?page=userstory">User Story</a>
        <a href="logout.php">Logga ut</a>
	</nav>

<?php
    $currentPage = '';
    if (isset($_GET['page'])){
		$currentPage = $_GET["page"];
    }
            
    switch($currentPage) {
        case "userstory";
          	include ("userstory_admin.php");
        break;
        default:
          	include ("userstory_admin.php");
        break;
    }
?>

</body>
</html>