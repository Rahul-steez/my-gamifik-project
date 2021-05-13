<?php 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM alumnos WHERE Nick='$params'");
 
    class Result {}
    
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();

              while($row = mysqli_fetch_assoc ($resultado)){
                $obj[] = $row; 
              } 
                      
        $response->alumno = json_encode($obj);

    header('Content-Type: application/json');

    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>

