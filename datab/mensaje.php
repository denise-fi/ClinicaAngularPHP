<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        exit;

    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");


        $json = file_get_contents('php://input');
        
        $params = json_decode($json);

        $nombre = $params->nombre;
        $apellido = $params->apellido;
        $correo = $params->correo;
        $numero = $params->numero;
        $clave = $params->clave;

        echo $nombre . '/' . $apellido . '/' . $correo . '/' . $numero . '/' . $clave;

        require("conexion.php");
        $con = retornarConexion();

        $registros = mysqli_query($con, "select * from usuarios");
        $vec = [];
        while ($reg = mysqli_fetch_array($registros)) {
            $vec[] = $reg;
        }
        var_dump($reg);
        $cad = json_encode($vec);
        echo $cad;

        echo true;
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);

        exit;
}
