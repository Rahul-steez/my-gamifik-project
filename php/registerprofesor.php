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
  $Centro = mysqli_real_escape_string($conexion, trim($params ->Centro));

  // REALIZA LA QUERY A LA DB
  $resultado = "INSERT INTO profesores(Nick,Email,Pass,Nombre,Apellidos,Centro) VALUES ('{$Nick}','{$Email}','{$Pass}','{$Nombre}','{$Apellidos}','{$Centro}')";

    if(mysqli_query($conexion, $resultado)) {
       http_response_code(201);
    } else {
        http_response_code(422);
    }
    header('Content-Type: application/json');
?>