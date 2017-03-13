<?php
include('session.php');
?>

<br><br><br><br>

	<form action="add_maintenance.php" method="post" name="us">
		<div class="blueprint">
			<div class="title-maintenance">Maintenance</div>
			<div class="values">
				Analysis: <input class="admin_value" type="number" name="analysis" /><br>
				Developing: <input class="admin_value" type="number" name="develop" /><br>
				Testing: <input class="admin_value" type="number" name="testing" /><br><br>
			 	<input type="submit" value="Lägg till kort" />
			</div>
		</div>
 	</form>