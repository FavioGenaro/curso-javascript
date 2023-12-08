// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(typeof numero1); // nos devuelve el tipo de dato

// Convertir de Strings a Números flotantes o Enteros

console.log(Number.parseInt(numero1)); // Convertir de String a Número entero
// si convierto a numero2 en entero, solo devuelve la parte entera
console.log(Number.parseFloat(numero2)); // Convertir a número con decimales 
console.log(Number.parseInt(numero3)); // eso no es un número

// Revisar si un número es entero
// devolvera true o false segun el caso
console.log(Number.isInteger(numero4) ); // Revisar si un número es entero o no
console.log(Number.isInteger(numero3) ); //

// Convertir número a String
console.log(numero4.toString());