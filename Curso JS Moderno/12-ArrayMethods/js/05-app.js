// en este video estaremos viendo FIND.

// find te creará un arreglo nuevo en base a la condicion que hayas mandando, retorna el primer resultado que cumpla con la condición...


// arreglo de objetos
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
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Bocinas') {
        resultado = carrito[index]
    }
});
console.log(resultado); // resultado es un objeto


// con .find seria
//retorna el primer resultado que sea true, filter retorna a todos los que cumplan la condición
const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas');
console.log(resultado2);
// si ninguno cumple la condición, retorna underfine