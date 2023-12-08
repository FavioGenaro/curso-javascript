// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.

const carrito = []; // arreglo vacio

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

// agrega un elemento hasta la ultima posición.
carrito.push(producto);
carrito.push(producto2);


// Añadir al Inicio del carrito...

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.table(carrito);