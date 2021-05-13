<?php 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

   $Id = mysqli_real_escape_string($conexion, trim($params ->Id));
   $Email = mysqli_real_escape_string($conexion, trim($params ->Email));
   $PassAnt = mysqli_real_escape_string($conexion, trim($params ->PassAnt));
   $Pass = mysqli_real_escape_string($conexion, trim($params ->Pass));
   $Nombre = mysqli_real_escape_string($conexion, trim($params ->Nombre));
   $Apellidos = mysqli_real_escape_string($conexion, trim($params ->Apellidos));


   $comprobar = mysqli_query($conexion, "SELECT * FROM alumnos WHERE Id='$Id'");
   $Passe = mysqli_fetch_assoc ($comprobar);

   class Result {}
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();

	if(password_verify($PassAnt, $Passe['Pass'])) {

   $Pass_cifrado=password_hash($Pass, PASSWORD_DEFAULT);

  // REALIZA LA QUERY A LA DB
  $resultado = "UPDATE alumnos set Email= '{$Email}', Pass='{$Pass_cifrado}', Nombre='{$Nombre}', Apellidos='{$Apellidos}' WHERE '{$Id}'= Id ";
	
    if(mysqli_query($conexion, $resultado)) {

      $updateinfo = mysqli_query($conexion, "SELECT * FROM alumnos WHERE Id='$Id'");

      while($row = mysqli_fetch_assoc ($updateinfo)){
        $obj[] = $row; 
      } 
      $response->resultado = 'OKMODIALUMNO';
      $response->mensaje = 'OK REGISTER ALUMNO';
      $response->alumno = json_encode($obj);

    } else {
      $response->resultado = 'FAIL';
      $response->mensaje = 'DATOS ERROR';
    }
	}else{

      $response->resultado = 'FAKEPSW';
      $response->mensaje = 'DATOS ERROR';
}

    echo json_encode($response);
    header('Content-Type: application/json');
?>



