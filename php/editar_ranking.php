<?php 

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  
  $comprobar = "SELECT ranking.Puntos, alumno.Nombre, alumno.Apellidos, alumno.Nick
                FROM alumnos alumno
                INNER JOIN ranking_alumnos ranking ON alumno.Id = ranking.Id_Alumno WHERE ranking.Id_Ranking = '$params'";


  $consulta=$conexion->query($comprobar);

  class Result {}
    
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();

  if($comprobar){

    while($row = mysqli_fetch_array ($consulta)){

      $obj[] = $row; 
    } 

       $response->resultado = 'RANKINGED';
       $response->mensaje = 'Ranking creado';
       $response->alumnos = json_encode($obj);

  }else{
    $response->resultado = 'FAILRANKING';
    $response->mensaje = 'Cambiar Nombre de Ranking';
  }

    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>


