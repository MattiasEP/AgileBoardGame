<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Merriweather+Sans|Raleway" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://csshake.surge.sh/csshake.min.css">
  </head>
  <body>


<div id="wrapper">
  <h1>AGILE <span id="B">B</span><span id="O">O</span><span id="A">A</span><span id="R">R</span><span id="D">D</span> GAME </h1>
  <div id="highscore">

  <?php

      $db = mysqli_connect("localhost", "root", "root", "boardgame");

      mysqli_query($db,"SET NAMES utf8");

      $query = "SELECT * FROM teamname ORDER BY CONVERT(highscore,INTEGER) DESC";
      $result = mysqli_query($db,$query);
       // or die("failed to query database ".mysqli_error());


      while($item = mysqli_fetch_assoc($result)) {
       print_r($item['name'] . $item['highscore']. '<br><br>'  );
      }
      //echo json_encode($return);
  ?>


  </div>
  <form action="teamname.php" method="POST">
    <input name="name" id="name" type="text" class="input" placeholder="Choose teamname" required/>
    <input class="button" type="submit" value="PLAY"/>
  </form>



</div>
</div>


  </body>
</html>
