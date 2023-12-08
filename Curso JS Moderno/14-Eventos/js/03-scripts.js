// En este video estaremos viendo eventos que suceden con el teclado, es decir cuando el usuario escribe en un input...


// tenemos un formulario 

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('input', () => {
//     console.log('escribiendo...');
// })


// keydown  - cuando presionas una tecla
// keyup - Cuando sueltas la tecla...
// blur - cuando sales del input, das clic al input y luego sales con un clic exterior - ideal para validación...

// También hay eventos para cortar copiar y pegar
// cut - cuando cortamos
// copy - cuando copiamos
// paste - cuando pegamos un texto
// input - cuando se realizan todos los eventos que vinos anteriormente... incluyendo cortar, pegar y copiar, salvo el blur


// Ahora, no tiene mucha utilidad enviar a la consola un mensaje no? lo ideal seria saber el texto que se escribe o poderlo leer...

busqueda.addEventListener('input', (e) => {
    console.log(e); // Mucha información...
    console.log(e.type ); // Te dira sobre que elemento estamos trabajando (input)
    console.log(e.target); // en que input en especifico estamos escribiendo

    console.log(e.target.value) // nos dará lo que el usuario escribe, 

})

// También puede ser como función...


// busqueda.addEventListener('input',  leerInput);

// function leerInput(e) { // funcion declarada
//     console.log(e); // Mucha información...
//     console.log(e.type ); // Te dira sobre que elemento estamos trabajando...
//     console.log(e.target); // el input completo...
//     console.log(e.target.value) // lo que el usuario escribe...

// }