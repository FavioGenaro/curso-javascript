// Comparar booleans es exactamente igual que cualquier comparación de números o strings

const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2); // false: comparar 2 variables
console.log(boolean2 === false);// True: comparar si un boolean es verdadero
console.log(boolean2 === true);// false: comparar si un boolean es verdadero

console.log(boolean1 == "true"); // false: esto solo pasa con los booleans que no lo toma como igual, a pesar de que el contenido es el mismo.


// Aún no hemos llegado a ello, pero muchas personas cometen el siguiente error cuando escriben código javascript en un if

if(boolean1 === true) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

// Pero este código se puede simplificar quitando el === true porque ya sabemos que la variable es true

// Este mismo ejemplo aplica si un usuario esta autenticado puede darle me gusta a una foto o ver una página, así como si ya tienes una cuenta en netflix y has pagado 
const autenticado = true;
if(autenticado) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}