<?php 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM alumnos WHERE Nick='$params->Nick' AND Pass='$params->Pass'");
 
    class Result {}
    
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    
    if($resultado->num_rows > 0) {
	
        $obj = mysqli_fetch_assoc ($resultado); 

        $response->resultado = 'OK';
        $response->mensaje = 'LOGIN ALUMNO EXITOSO';
        $response->alumno = json_encode($obj);

    } else {

	$resultado1 = mysqli_query($conexion, "SELECT * FROM profesores WHERE Nick='$params->Nick' AND Pass='$params->Pass'");

	if($resultado1->num_rows > 0) {
	$obj = mysqli_fetch_assoc ($resultado1); 

        $response->resultado = 'OKEY';
        $response->mensaje = 'LOGIN PROFE EXITOSO';
        $response->alumno = json_encode($obj);

	}else{
	$response->resultado = 'FAIL';
        $response->mensaje = 'LOGIN FALLIDO';
	}
        
    }
    header('Content-Type: application/json');
    
    echo json_encode($response); // MUESTRA EL JSON GENERADO
   
?>