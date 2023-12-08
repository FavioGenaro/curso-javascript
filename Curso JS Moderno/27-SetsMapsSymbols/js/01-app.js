
// Creando un Set, es un elemento de javascript
// Un set te permite crear una lista de valores sin duplicados, pero solo acepta valores no acepta objetos.
// Pocas veces veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados con un foreach, pero sería más sencillo con un set... 
// de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto cuando se tiene un volumen grande de datos

let carrito = new Set();// creamos un nuevo set
carrito.add('Camisa'); // con add agregamos elementos, se agrega al final de la lista
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3'); // este elemento no se agrega al se duplicado
carrito.add('disco #3');// considera las mayusculas y minusculas, por lo que este elemento si se añade
console.log(carrito.size); // size, es para calcular la longitud de la lista, cuantos elementos tiene.
console.log(carrito)

// Comprobando que un valor existe en el set.
console.log( carrito.has('Camisa') ); // colocamos el valor a buscar, retorna true o false si existe o no.
// Eliminando del set
console.log( carrito.delete('Camisa') ); // delete elimina un valor y si lo imprimimos retorna true o false si lo elimino o no, esto es una forma que tenemos de comprobar si se elimina un elemento
console.log( carrito.has('Camisa') ); // como lo eliminamos retorna false
console.log(carrito);

// Limpiar un set
// carrito.clear(); // elimina todos los elementos del set
console.log(carrito);

// Foreach a un set, set se puede iterar
carrito.forEach(producto =>  {
    console.log(producto);
})

// Foreach a un set
carrito.forEach((producto, index, pertenece) =>  { // como solo maneja valores el index retorna lo mismo que producto
    // pertenece retorna el set al que pertenece producto, por lo que muestra todo el set carrito
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito); // es igual ya que pertence solo retorna carrito
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);
let numero = new Set(arregloCarrito);
console.log(numero)

// En un arreglo
let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]); // se eliminaran los repetidos, los ultimos 4 tres se eliminan
console.log(numeros)
