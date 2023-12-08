
// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de la palabra function

// Generador
function *crearGenerador() {
    // Yiel es nuevo también en es6 y son los valores que podemos utilizar para iterar...
    yield 1; // yiel indica los valores que podemos iterar
    yield 'Nombre';
    yield 3+3;
    yield true;
}
// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

console.log(iterador) // si solo lo mostramos esa suspendido o dormido, pero con next lo despertamos y nos da el primer valor
console.log(iterador.next()) // primero, 1
console.log(iterador.next().value); //segundo, Nombre
console.log(iterador.next().done); // tercero, false
console.log(iterador.next().value); // cuarto true
console.log(iterador.next().value); //undefined porque ya no hay más elementos
console.log(iterador) // este ultimo aparece como cerrado(closed) ya que ya no hay más elementos que iterar
console.log(iterador.next()) // como ya no hay elementos, done esta en true y value en underfine

// Crear el generador
function *nuevoGenerador(carrito) {
    for( let i = 0; i < carrito.length; i++) {
        yield carrito[i]; // hacemos que el yield sea más dinamico o programado con el for
    }
}
// carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorrer el iterador
let iterador2 = nuevoGenerador(carrito);

console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );