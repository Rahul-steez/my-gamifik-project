<?php 

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $Codigo = mysqli_real_escape_string($conexion, trim($params ->Codigo));
  $id_Alumno = mysqli_real_escape_string($conexion, trim($params ->id_alumno));

  $comprobar =mysqli_query($conexion, "SELECT Id_Ranking FROM codigo_ranking WHERE Codigo='$Codigo'");

  while($row = mysqli_fetch_assoc ($comprobar)){
    $obj= $row; 
  } 
  class Result {}
    
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();

  // REALIZA LA QUERY A LA DB
   if($comprobar->num_rows == 1){

     $response->resultado = 'ALUMNOENRANKING';
     $response->mensaje = 'Ranking creado';
     $response->Id_ranking = ($obj);
   }else{
    $response->resultado = 'CODIGONOEXISTE';
    $response->mensaje = 'Cambiar Nombre de Ranking';
  }

    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>


