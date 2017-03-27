<?php
#
# Den här klassen startar upp vårt API och hämtar allt det vi behöver från själva HTTP-anropet
#

class API{

	private	$method, // GET, POSt, PUT, DELETE ...
			$input, // Data sent with request
			$resource, // REST Resource to call
			$resource_id, // Id of the resource
			$request; // The rest of the URL

	# En "magisk" get funktion som gör att det går att hämta alla våra variabler inom objektet fast att de är privata, men vi kan inte lägga in värden i dem utanför objektet
	function __get($k){
		return $this->$k;
	}

	# Här är konstruktorn som körs när objektet skapas
	function __construct(){
		# Get the HTTP request method
		$this->method = $_SERVER['REQUEST_METHOD'];

		# Get the input data fot POST, PUT and DELETE request
		$input = [];
		parse_str(file_get_contents("php://input"), $input); 
		$this->input = $input;

		# Get and split the URL of the request into parts
		$path = array_keys($_GET)[0];
		$request = explode('/',$path);
		$request = array_filter($request, function($v){ return $v !== '';});
		$request = array_values($request);

		# Get the first resource of the request if exists
		if(count($request) > 0)
			$this->resource = array_shift($request);

		# Get the forst resources id if exists
		if(count($request) > 0)
			$this->resource_id = array_shift($request);

		# Save the rest of the path
		$this->request = $request;
	}	


}