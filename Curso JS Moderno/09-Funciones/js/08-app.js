// Funciones que retornan valores

// Actualmente hemos tenido funciones que envian datos a la consola, ya cuando veamos la parte del DOM algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero también tendremos funciones que retornan valores para pasarlos hacia otras funciones o hacer algo más...

function sumar(a, b) {
    return a + b; // con esto hacemos que retorne el valor de la suma
}

const resultado = sumar(1,2); // ese resultado lo guardamos en una variable

console.log(resultado); // despues imprimo el resultado


// Ejemplo más avanzado....
let total = 0;
function agregarCarrito(precio) {
    return total += precio; // Retorna la variable total, en total se almacenará la suma de todos los precios
}

function calcularImpuesto(total) {
    return 1.15 * total; // del total le agrega el 15% de impuestos
}

total = agregarCarrito(200); // total = total (por que agregar carrito retorna total)
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total + ' sin impuestos');


const totalPagar = calcularImpuesto(total); // total pagar es el valor de todo

console.log(`El total a pagar es de ${totalPagar}`);