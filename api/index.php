<?php
	
	//REQUEST METHOD
	$method = $_SERVER['REQUEST_METHOD'];


	$data = [];
	parse_str(file_get_contents("php://input"), $data);

	$request = getRequestPathAsArray();

	$resource = $request[0];

	if(isset($request[1])){
		$resource_id = $request[1];
	}else{
		$resource_id = null;
	}

	$db = mysqli_connect('localhost','root','','api');
	mysqli_query($db, 'SET NAMES utf8');


	$api_function = 'api_'.$resource;
	if(function_exists($api_function))
		$api_function($db, $method, $resource_id, $data);
	else
		echo "Invalid Function";

	function api_user($db, $method, $id = null, $data = null){
		$clean_id = mysqli_real_escape_string($db, $id);
		switch($method){
			case 'GET':
				$query = "SELECT * FROM users WHERE id = $clean_id";
			break;
			case 'POST':
				$query = "UPDATE ...";
			break;
			case 'PUT':
				$clean['username'] = mysqli_real_escape_string($db, $data['username']);
				$clean['name'] = mysqli_real_escape_string($db, $data ['name']);
				$query = "INSERT INTO users (username, name) VALUES ( '{$clean['username']}' , '{$clean['name']}' )";
			break;
			case 'DELETE';
				$query = "DELETE FROM users WHERE ID=$clean_id";
			break;
		}
		$result = mysqli_query($db, $query);
		if($result){
			if($method =='GET'){
				$user = mysqli_fetch_assoc($result);
				echo json_encode($user);
			}
		}else{
			echo "Smth went wrong!";
		}
	}	


	function api_users($db, $method, $id =null, $data = null){
		$clean_id = mysqli_real_escape_string($db, $id);
		switch($method){
			case 'GET':
				$query = "SELECT * FROM users";
				$result = mysqli_query($db, $query);
				while($user = mysqli_fetch_assoc($result)){
					$users[] = $user;
				}echo json_encode ($users);

				/*$query = "SELECT * FROM users WHERE id = $clean_id";*/
			break;
			case 'POST':
			break;
			case 'PUT':
			break;
			case 'DELETE';
				echo "not allowed function";
			break;
		}
		
	}
	function api_card($db, $method, $id = null, $data = null){
		$clean_id = mysqli_real_escape_string($db, $id);
		switch($method){
			case 'GET':
				$query = "SELECT * FROM cards WHERE id = $clean_id";
			break;
			case 'POST':
				$query = "UPDATE ...";
			break;
			case 'PUT':
				
			break;
			case 'DELETE';
				$query = "DELETE FROM cards WHERE ID=$clean_id";
			break;
		}
		$result = mysqli_query($db, $query);
		if($result){
			if($method =='GET'){
				$card = mysqli_fetch_assoc($result);
				echo json_encode($card);
			}
		}else{
			echo "Smth went wrong!";
		}
	}	
	function api_cards($db, $method, $id = null, $data = null){
		$clean_id = mysqli_real_escape_string($db, $id);
		switch($method){
			case 'GET':
				$query = " SELECT * FROM cards";
				$result = mysqli_query($db, $query);
				while($card = mysqli_fetch_assoc($result)){
					$cards[] = $card;

				}echo json_encode($cards);
				break;
			case 'POST':
			break;
			case 'PUT':
			break;
			case 'DELETE';
				echo "not allowed function";
			break;
			}
		}
	
	
	


	function api_book(){
		echo"this is a book!";
	}


	function getRequestPathAsArray(){
		$path = array_keys($_GET)[0];

		$path_array = explode('/',$path);
		
		$path_array = array_filter($path_array, function($v){
			return $v !== '';
		});	
		
		$path_array = array_values($path_array);

		return $path_array;
	}
?>