// Fetch API desde un JSON (Array)

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleado.json') // pasamos la url
        .then( respuesta => {
            return respuesta.json() // retorna la respuesta como json
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado) // mostramos el resultado, como ya especificamos que es json js interpresa ese json y lo retorna como objeto
        })
}

function mostrarHTML({empresa,  id, nombre, trabajo}) { // usamos destrucutación al objeto que coloquemos entre parentesis en mostrarHTML
    const contenido = document.querySelector('#contenido');

    // como pusimos un appenChild innerHTML borra todo el HTMl y muestra su contenido
    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `
}