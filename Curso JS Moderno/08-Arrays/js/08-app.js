// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:
//Destructuring: sacar de su estructura

const numeros = [10,20,30,40,50];

// crearemos las variables para cada valor del arreglo
const [primero] = numeros;

// console.log(numeros);
console.log(primero);
//console.log(segundo);


// Si quieres saltarte un valor, pon una coma....
const [, ,tercero] = numeros;
console.log(tercero);

// rest operator: (...): con esto cogemos todos los demás valores, y los acumula en un arreglo.
const [primeros, segundos ,...terceros] = numeros;
console.log(terceros); //  los acumula en un arreglo.
// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

//const [primero, , segundo, ...tercero ] = numeros;