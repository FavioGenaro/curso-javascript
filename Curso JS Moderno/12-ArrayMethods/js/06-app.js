// En este video estaremos viendo every...

// Every es raro, ya que todos los elementos del arreglo deberán cumplir esa condición para que retorne un true
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

// con un foreach seria algo asi...
let cumple = true;
// queremos comprobar si todos los productos son menores de 700, si es asi entonces retorna true, caso contrario false
carrito.forEach( producto => {
    if(producto.precio > 700) { // precio mayor a 700, hay uno mayor, por lo que no se cumple
        cumple = false;
        return // una vez que encuentre uno mayor a 700, detiene la función y cumple = false
    }
})
console.log(cumple);

// con every, todos deben cumplir la condición para retornar true
const resultado = carrito.every(producto => producto.precio < 1000); // Mil se cumple, 700 no...
console.log(resultado);
