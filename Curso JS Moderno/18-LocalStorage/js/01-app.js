// LocalStorage: es parte de la ventana global

// Veamos algunos ejemplos de LocalStorage...

// Local Storage funciona con una especie de Llave(como voy a obtener ese valor o como hago referencia a ellos) valor(el contenido en sí, puede ir cambiando)...
// el primer dato es la llave y el segundo su valor

localStorage.setItem('nombre', 'Juan'); // con setItem colocamos un valor

// añadir algo a sessionstorage
sessionStorage.setItem('nombre', 'Pablo');

// Local Storage solo soporta strings(puede convertir un número a string), no soporta arrays ni objetos, pero puedes almacenarlos convirtiendolos a string..

const producto = { // objeto
    nombre: 'Monitor 24"',
    precio: 300
}

const productoString = JSON.stringify(producto);//convertimos el objeto a string
localStorage.setItem('productoJSON', productoString);// almacenamos el localStorage

// Lo mismo con un array
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));// alamacenamos el arreglo convertido a string
