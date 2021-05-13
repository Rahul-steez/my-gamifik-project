<?php 

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $comprobar = mysqli_query($conexion, "SELECT * FROM codigo_ranking WHERE Id_profesor='$params'");
  class Result {}
    
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();

  if($comprobar->num_rows > 0) {

      while($row = mysqli_fetch_assoc ($comprobar)){
        $obj[] = $row; 
      } 

       $response->resultado = 'RANKINGOK';
       $response->mensaje = 'Ranking creado';
       $response->ranking = json_encode($obj);
  
  }else{
    $response->resultado = 'FAILRANKING';
    $response->mensaje = 'Cambiar Nombre de Ranking';
  }

    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO

  ?>


