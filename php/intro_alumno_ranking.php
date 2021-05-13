<?php 

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  

  $id_Alumno = mysqli_real_escape_string($conexion, trim($params ->id_user));
  $id_Ranking = mysqli_real_escape_string($conexion, trim($params ->id_ranking ->Id_Ranking));

   $comprobar = mysqli_query($conexion, "SELECT * FROM ranking_alumnos WHERE Id_Alumno='$id_Alumno' AND Id_Ranking='$id_Ranking'");

   class Result {}
    
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result(); 

  // REALIZA LA QUERY A LA DB

   if($comprobar->num_rows == 0){

    $resultado = "INSERT INTO ranking_alumnos (Id_Alumno, Id_Ranking) VALUES ('$id_Alumno', '$id_Ranking')";

    if(mysqli_query($conexion, $resultado)) {

        $response->resultado = 'ALUMNOENRANKING';
        $response->mensaje = 'Ranking creado';
   } else {
       $response->resultado = 'RANKINGERR';
       $response->mensaje = 'Ranking no creado';
    }
      }else{
        $response->resultado = 'ALUMNOYAEXISTE';
        $response->mensaje = 'Cambiar Nombre de Ranking';
   }

    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>


