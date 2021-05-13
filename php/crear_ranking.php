<?php 

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  
  $comprobar = mysqli_query($conexion, "SELECT * FROM codigo_ranking WHERE Nombre='$params->Nombre'");
  class Result {}
    
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();

  if($comprobar){

  if($comprobar->num_rows < 1) {
  // REALIZA LA QUERY A LA DB
  $resultado = "INSERT INTO codigo_ranking (Nombre,Codigo,Id_profesor) VALUES ('$params->Nombre','$params->Codigo','$params->id_profesor')";

    if(mysqli_query($conexion, $resultado)) {

       $response->resultado = 'RANKINGOK';
       $response->mensaje = 'Ranking creado';
    } else {

        $response->resultado = 'RANKINGERR';
        $response->mensaje = 'Ranking no creado';
    }
  }
  }else{
    $response->resultado = 'FAILRANKING';
    $response->mensaje = 'Cambiar Nombre de Ranking';
  }

    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>


