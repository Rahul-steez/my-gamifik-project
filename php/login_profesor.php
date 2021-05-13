<?php 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
 
    class Result {}
    
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
 
	$resultado1 = mysqli_query($conexion, "SELECT * FROM profesores WHERE Nick='$params->Nick'");

	if($resultado1->num_rows > 0) {

    $verificacion1 = mysqli_query($conexion, "SELECT * FROM profesores WHERE Nick='$params->Nick'");
    $Passe1 = mysqli_fetch_assoc ($verificacion1);

         if (password_verify($params->Pass, $Passe1['Pass'])) {

            while($row = mysqli_fetch_assoc ($resultado1)){
            $obj1[] = $row; 
            }
                   $response->resultado = 'OKPROFESOR';
                   $response->mensaje = 'LOGIN PROFE EXITOSO';
                   $response->profe = json_encode($obj1);

	    }else{
                   $response->resultado = 'FAILCONTRASEÑA';
                   $response->mensaje = 'LOGIN FALLIDO';
	      }
    }else{

        $response->resultado = 'NOUSUARIO';
        $response->mensaje = 'USUARIO INEXISTENTE';
      }
      
    header('Content-Type: application/json');

    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>

