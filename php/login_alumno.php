<?php 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("dbconexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM alumnos WHERE Nick='$params->Nick'");
 
    class Result {}
    
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    
    if($resultado->num_rows > 0) {
  
      $verificacion = mysqli_query($conexion, "SELECT * FROM alumnos WHERE Nick='$params->Nick'");
      $Passe = mysqli_fetch_assoc ($verificacion);

             if (password_verify($params->Pass, $Passe['Pass'])) {

              while($row = mysqli_fetch_assoc ($resultado)){
                $obj[] = $row; 
              } 
                      $response->resultado = 'OKALUMNO';
                      $response->mensaje = 'LOGIN ALUMNO EXITOSO';
                      $response->alumno = json_encode($obj);
            }else{
                      $response->resultado = 'FAILCONTRASEÑA';
                      $response->mensaje = 'CONTRASEÑA INCORRECTA';
                }

    }else{
        $response->resultado = 'NOUSUARIO';
        $response->mensaje = 'USUARIO INEXISTENTE';
      }

    header('Content-Type: application/json');

    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>

