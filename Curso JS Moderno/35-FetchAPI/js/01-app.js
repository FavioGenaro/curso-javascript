// Fetch API consumir datos desde un txt...

const cargarTxtBtn = document.querySelector('#cargarTxt'); // seleccionamos el boton

cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    // fetch es nativo de JS. 
    fetch('data/datos.txt') // URL del archivo a leer o donde se van a enviar los datos
        .then( respuesta => { // then, si se cumple, encuentra el archivo y lee los datos, me trae la respuesta(objeto que almacena ciertos datos)
            // status 200, quiere decir que se logro hacer correctamente el archivo
            // status 404, no se encontro el archivo
            console.log(respuesta);

            console.log(respuesta.headers.get("Content-Type"));
            console.log(respuesta.status); // Estado, 200 o 404
            console.log(respuesta.statusText); //estado en ingles, Ok-esta bien
            console.log(respuesta.url); // URL a la que consultamos, url del txt
            console.log(respuesta.type); // Tipo de consulta, es basic

            // Hay que decirle que método vamos a utilizar...

            // Hay 2 JSON o text, en el siguiente video vemos jSON, pero esto es un texto o txt
            return respuesta.text(); // Que este mal escrito

        })
        .then( datos => { // el siguiente then trae el texto o datos
            console.log(datos);
        })
        .catch( error => { // en caso haya un error en la consulta, siempre es bueno colocar un catch
            console.log(error);
        })
}