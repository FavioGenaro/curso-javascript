const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...


const nuevoArray = carrito.map( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: ${producto.precio} `;
})

const nuevoArray2 = carrito.forEach( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: ${producto.precio} `;
})

console.log(nuevoArray);// va a tener todos los valores del arreglo, lo que podemos hacer acá es filtrar el contenido y pasarlo a este nuevo arreglo.
console.log(nuevoArray2); // vacio o no definido