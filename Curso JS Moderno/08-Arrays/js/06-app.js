// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// PARA AÑADIR PRODUCTO AL ARREGLO (AL FINAL)
let resultado = [...carrito, producto]; // añadimos a resultado la variable carrito y producto

// para añadir otro valor, y mantener los anteriores (paracido a += y -=)
resultado = [...resultado, producto2]; // añadimos a resultado, el producto2

// PARA AÑADIR AL INICIO
resultado = [producto3, ...resultado]; // para añadir al inicio, simplemente cambiamos la posición del producto a añadir.

//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.table(resultado); // mostramos resultado, porque este contiene a los valores
console.table(carrito); //carrito no tiene elementos, porque no lo modificamos