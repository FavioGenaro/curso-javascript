
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log(numero1 == numero3);
console.log(numero1 == numero2); //dice true porque es un comparar no muy estricto porque no tomó en cuenta el tipo de dato, solo el valor


// Typeof
console.log( typeof numero1 );
console.log( typeof numero2 );

// Operador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));


// Diferente a 

console.log(numero1 != numero3);
console.log(numero1 != numero2); // false, no son diferentes
console.log(numero1 !== numero2); // true, son diferentes tomando en cuenta el tipo de dato
console.log(numero1 !== parseInt(numero2)); // false

const password1 = "admin";
const password2 = "Admin";
console.log(password1 != password2); // true, son diferentes, distinque mayusculas