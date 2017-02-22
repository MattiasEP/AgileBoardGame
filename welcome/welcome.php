<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Merriweather+Sans|Raleway" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  </head>
<body>

<center>
  <div id="wrapper2">
    <h1>AGILE <span id="B">B</span><span id="O">O</span><span id="A">A</span><span id="R">R</span><span id="D">D</span> GAME </h1>
    <img src="../img/dudes/1.png" alt=""><img src="../img/dudes/2.png" alt=""><img src="../img/dudes/3.png" alt="">
    <img src="../img/dudes/4.png" alt=""><img src="../img/dudes/5.png" alt=""><img src="../img/dudes/6.png" alt="">

    <form action="teamname.php" method="POST">
      <input name="name" id="name" type="text" class="input" placeholder="Choose teamname" required/>
      <input class="button" type="submit" value="PLAY"/>
    </form>
  </div>
</center>

<center>
  <div class="wrapper">
    <img src="blend2.png" id="slide" width="1000px" height="600" /><br>
    <button class="link" onclick="myFunction()">GO!</button>
  </div>
</center>

<script>
  $(".link").off().on("click", function(){
    $(".wrapper").slideToggle();
  });

  $(document).ready(function(){
    $(".help").click(function(){
      $(".wrapper").toggle("slow");
    });
  });
</script>
</body>
</html>
