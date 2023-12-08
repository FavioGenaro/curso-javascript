// Fetch API desde una API

const cargarAPIBtn = document.querySelector('#cargarAPI'); // seleccionamos el boton
cargarAPIBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('https://picsum.photos/list')  // psamos la url, en este caso es una API, las apis nos retorna archivos JSON
        .then( respuesta => {
            return respuesta.json() // las apis retorna la info en .json
        }) 
        .then(resultado => {
            mostrarHTML(resultado); // mostramos el contenido en el html
            console.log(resultado) // mostramos el arreglo obtenido de esa api
        })
}

function mostrarHTML(datos) {
    
    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach( perfil => { // iteramos todo el arreglo
        const { author, post_url } = perfil; // aplicamos destructuración a cada objeto
        // la api nos retorno muchos datos, en este caso solo usamos el de autor y el link de la imagen Unsplash
        // para la imagen creamos una etiqueta a para que nos lleve a esa imagen de forma externa y no cargar todas las imagenes en el mismo html
        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `

    });

    contenido.innerHTML = html;
}