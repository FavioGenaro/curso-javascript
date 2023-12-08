const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular



// ELIMINAR EL ULTIMO ELEMENTO...
// carrito.pop();

// console.table(carrito);
// carrito.pop(); elimina el 2
// console.table(carrito);
// carrito.pop(); elimina el 1
// console.table(carrito);



// ELIMINAR EL PRIMER ELEMENTO...
// carrito.shift();

// console.table(carrito);
// carrito.shift();
// console.table(carrito);
// carrito.shift();
// console.table(carrito);


// AHORA SUPONGAMOS QUE DESEAS ELIMINAR DEL CENTRO...
//carrito.splice(1,0); 
// el primer parametro es de donde va a comenzar a eliminar, en este caso se coloca el valor del indice que se desea eliminar; el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
// carrito.splice(1, 2);

carrito.splice(1,0); // no borra nada
console.table(carrito); 
carrito.splice(1,1); // borro el elemento con indice 1
console.table(carrito); 
carrito.splice(0,2); // borro el elemento con indice 0 hasta el elemento 1 (borra los 2 elemento que quedaban)
console.log(carrito); 
