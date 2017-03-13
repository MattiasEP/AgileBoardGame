<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset='utf-8' />
    <link rel='stylesheet' type='text/css' href='../style/style.css'>
</head>
<body>
	<nav>
		<a href='loggedin.php?page=userstory'>User Story</a>
        <a href='loggedin.php?page=maintenance'>Maintenance</a>
        <a href='loggedin.php?page=defect'>Defect</a>
        <a href='logout.php' style='float: right'>Logga ut</a>
	</nav>

<?php
    $currentPage = '';
    if (isset($_GET['page'])){
		$currentPage = $_GET['page'];
    }
            
    switch($currentPage) {
        case 'userstory';
          	include ('admin_userstory.php');
        break;
        case 'maintenance';
          	include ('admin_maintenance.php');
        break;
        case 'defect';
          	include ('admin_defect.php');
        break;
        // default:
        //   	include ('file.php');
        // break;
    }
?>
</body>
</html>