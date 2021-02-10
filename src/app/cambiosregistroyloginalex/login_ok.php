<?php
	
session_start();

$logueado=0;
	
header("Content-Type: text/html;charset=utf-8");

		$nick=$_POST["n"];
		$Password=$_POST["p"];
		
		$servidor="localhost";
		$usuario="root";
		$contraseña="";
		$bd="gamifik";

	$con = mysqli_connect($servidor, $usuario, $contraseña, $bd) or die(mysql_error());
	
	if (!$con)
	{
		die("No se ha podido realizar la corrección ERROR:" . mysqli_connect_error() . "<br>");
	}
	else
	{
		mysqli_set_charset ($con, "utf8");
		echo "Se ha conectado a la base de datos" . "<br>";
	}
	
	$instruccion = "select count(*) as cuantos from paginaphp where nick = '$nick'";
	$resultado = mysqli_query($con, $instruccion);
		while ($fila = $resultado->fetch_assoc()) {
		$numero=$fila["cuantos"];
	}
	if($numero==0){
		echo "El usuario no existe";
	}
	else{
	$instruccion = "select password as cuantos from paginaphp where nick = '$nick'";
	$resultado = mysqli_query($con, $instruccion);

	while ($fila = $resultado->fetch_assoc()) {
		$password2=$fila["cuantos"];
	}


	if (!strcmp($password2 , $Password) == 0){
			echo "Contraseña incorrecta";
	}
	
	else{
		echo "Login OK";
		$_SESSION["nick_logueado"]=$nick;
		header("Location: exito.html");
		
		$logueado=1;
	}
	}
?>