<?php

header("Content-Type: text/html;charset=utf-8");

//Parámetros que vienen del POST

		$nick=$_POST["u"];
		$email=$_POST["e"];
		$Password=$_POST["p"];
		$Username=$_POST["n"];
		$apellido=$_POST["a"];
		$centro=$_POST["c"];

//Parámetros de conexión
$servidor="localhost";
$usuario="root";
$contraseña="";
$bd="gamifik";

//realizamos la conexión
$con=mysqli_connect($servidor,$usuario,$contraseña,$bd);
if(!$con)
{
	die("Con se ha podido realizar la conexión: ". mysqli_connect_error() . "<br>");
}
else
{
	mysqli_set_charset($con,"utf8");
	header("Location: exito.html");
	$_SESSION["con"]=$con;
}

$consulta=mysqli_query($con,"insert into alumnos values (null,'$nick','$email','$Password','$Username','$apellido','$centro')");

if(!$consulta)
{
	die("error");
}
else
{
		echo "Datos insertados!";
}

?>