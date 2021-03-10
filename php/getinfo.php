<?php 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT Nick, Email, Nombre, Apellidos FROM alumnos WHERE Nick='$params->Nick' AND Pass='$params->Pass'");
 
    class Result {}
    
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
     
    if($resultado->num_rows > 0) {
		
	$info[]=$resultado;

  
    } else {

	$resultado1 = mysqli_query($conexion, "SELECT Nick, Email, Nombre, Apellidos, Centro FROM profesores WHERE Nick='$params->Nick' AND Pass='$params->Pass'");

		if($resultado1->num_rows > 0) {
			$info[]=$resultado1;
		}else{
        	$response->resultado = 'FAIL';
        	$response->mensaje = 'LOGIN FALLIDO';
	}
    }

      header('Content-Type: application/json');
    
    echo json_encode($info); // MUESTRA EL JSON GENERADO
    
?>