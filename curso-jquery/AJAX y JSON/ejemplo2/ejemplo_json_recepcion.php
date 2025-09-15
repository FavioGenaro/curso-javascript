<?php
    // leemos y decodificamos los datos JSON que nos llegan
    $datos_json=file_get_contents("php://input");
    $datos=json_decode($datos_json);

    $respuesta =array( // respondemos con este arreglo
        'mensaje'=> 'datos recibidos correctamente',
        'datos'=> $datos
    );

    header('Content-Type: application/json'); // header de la respuesta
    echo json_encode($respuesta); // enviamos un JSON
?>