<?php
include('session.php');
?>

<br><br><br><br>

	<form action="add_us.php" method="post" name="us">
		<div class="">
			<div class="title-userstory">Name of card: <input type="text" name="name" /> Value: <input type="number" name="value" /><br></div>
			<div>
				Analysis: <input type="number" name="analysis" /><br>
				Developing: <input type="number" name="develop" /><br>
				Testing: <input type="number" name="testing" /><br>
			</div>
		</div>
 		<input type="submit" value="Lägg till kort" />
 	</form>
	
</div>
