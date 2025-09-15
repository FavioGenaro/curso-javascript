<?php 
    $datos = array( // arreglo de datos
        'nombre' => 'luis',
        'edad' => 33,
        'pais' => 'peru'
    );
    header('Content-Type: application/json'); // header de la respuesta devuelta

    echo json_encode($datos) // devolvemos en formato JSON
?>