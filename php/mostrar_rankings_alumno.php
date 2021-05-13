<?php 

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $comprobar ="SELECT codigo.Id_Ranking, codigo.Nombre, codigo.Codigo 
               FROM codigo_ranking codigo
               INNER JOIN ranking_alumnos ranking ON codigo.Id_Ranking = ranking.Id_Ranking WHERE Id_Alumno='$params'";

  $consulta=$conexion->query($comprobar);

  class Result {}
    
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();

  if($consulta->num_rows > 0) {

      while($row = mysqli_fetch_assoc ($consulta)){
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


