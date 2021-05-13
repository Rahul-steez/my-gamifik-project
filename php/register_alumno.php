<?php 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $Nick = mysqli_real_escape_string($conexion, trim($params ->Nick));
  $Email = mysqli_real_escape_string($conexion, trim($params ->Email));
  $Pass = mysqli_real_escape_string($conexion, trim($params ->Pass));
  $Nombre = mysqli_real_escape_string($conexion, trim($params ->Nombre));
  $Apellidos = mysqli_real_escape_string($conexion, trim($params ->Apellidos));


  $Pass_cifrado=password_hash($Pass, PASSWORD_DEFAULT);


  $comprobar = mysqli_query($conexion, "SELECT * FROM alumnos WHERE Nick='$Nick'");
  
  
  if($comprobar->num_rows == 0) {
    class Result {}
    
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();


  // REALIZA LA QUERY A LA DB
  $resultado = "INSERT INTO alumnos (Nick,Email,Pass,Nombre,Apellidos) VALUES ('{$Nick}','{$Email}','{$Pass_cifrado}','{$Nombre}','{$Apellidos}')";

    if(mysqli_query($conexion, $resultado)) {

       $response->resultado = 'OKREG';
       $response->mensaje = 'Fail';
    } else {

        $response->resultado = 'FAIL';
        $response->mensaje = 'Fail';
    }
  }else{
    $response->resultado = 'FAILNICK';
    $response->mensaje = 'Fail';

  }

    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>

