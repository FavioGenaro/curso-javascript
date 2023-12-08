// Async Await Con una API...

document.addEventListener('DOMContentLoaded', obtenerDatos); // cuando el doc este listo, ejecuta obtener datos

// function obtenerDatos() {
//     fetch('https://picsum.photos/list') 
//         .then( respuesta => {
//             return respuesta.json()
//         }) 
//         .then(resultado => {
//             mostrarHTML(resultado);
//             console.log(resultado)
//         })
// }

// async function obtenerDatos() {
//     // usamos doble await porque en la primera obtenemos los datos y detenemos la ejecución hasta obtenerlos por completo
//     // en la segundo decimos que lo queremos como json, una vez obtenido todos los datos
//     const resultado = await fetch('https://picsum.photos/list'); // en base a esta respues
//     const respuesta = await resultado.json(); // 
//     console.log(respuesta);

// }

async function obtenerDatos() {
    try {
        const resultado = await fetch('https://picsum.photos/list');
        const respuesta = await resultado.json();
        console.log(respuesta);
    } catch (error) { // este catch es el equivalente al catch del then
        console.log(error);
    }

}