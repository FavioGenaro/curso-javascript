// Fetch API desde un JSON (Objeto)
// en este caso el json es un arreglo de objetos
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleados.json') 
        .then( respuesta => respuesta.json()) // retornamos como json 
        .then(resultado => {
            mostrarHTML(resultado); 
            console.log(resultado); // nos mostrara como un objeto
        })
}

function mostrarHTML(empleados){ // no podemos aplicar destructuración como la forma pasada porque el json tiene un arreglo y no un solo valor
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach( empleado => { // iteramos el arreglo de objetos
        const { id, nombre, empresa, trabajo} = empleado; // en esta parte si podemos aplicar destructuración

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}