// ForEach y Map con arrow functions...

const carrito = [ // arreglo de objetos
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// iteración normal
const nuevoArr = carrito.map( function(producto) {
    return  `Articulo: ${producto.nombre} Precio: ${producto.precio} `;
})

const nuevoArr2 = carrito.forEach( function(producto) {
    return  `Articulo: ${producto.nombre} Precio: ${producto.precio} `;
})

console.log(nuevoArr);
console.log(nuevoArr2);



// cambiamos el function por el parametro y la fecha. obviamos el parentesis y las llaves
const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: ${producto.precio} `) // el return es implicito

const nuevoArray2 = carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: ${producto.precio} `)); // se ejecuta solo

console.log(nuevoArray);
console.log(nuevoArray2);


// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map

