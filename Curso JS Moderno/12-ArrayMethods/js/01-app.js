// Previamente vimos algunos métodos para strings, para números y también para objetos...

// Veamos una serie de métodos muy útiles cuando se trabaja con arrays y algunos casos de uso

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//arreglo de objetos
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];


// Si te gustaría saber si nuestro arreglo de meses, tiene el mes de Febrero, podrías hacerlo con un foreach...

meses.forEach(mes => {
    if(mes === 'Enero') { // si enero existe
        console.log('Enero si existe...')
    }
})

// O también podrías utilizar el Array Method de .includes

// .includes: revisa si un valor existe en un arreglo, retorna un true o false
const resultado = meses.includes('Enero'); 
console.log(resultado);


// En el caso de un arreglo de objetos... .includes no va a funcionar o no seria la mejor opción, podrías utilizar uno llamado .some, retorna un true o false
// producto es la variable que almacena los objetos. nombre es la propiedad que del objeto y buscamos según esa propiedad.
const existe = carrito.some( producto => producto.nombre === 'Celular' );
console.log(existe);

// Some en un arreglo tradicional o normal...
const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);
