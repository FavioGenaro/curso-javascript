
// Symbol

// Los simbolos son nuevos en ES6, te permiten crear propiedad única 

// Symbol es creado y se agrega a una propiedad del objeto.
// new Symbol enviaria un error.


const sym = Symbol('symbol');
const sym2 = Symbol('symbol');

// Los symbolos siempre son diferentes
// por mas que sym y sym2 tengan el mismo contenido, son diferentes
console.log( Symbol() === Symbol() ); // false

// Llaves de objetos únicas
let nombre = Symbol();
let apellido = Symbol();

// Crear un objeto vacio
let persona = {}

// debe tener corchetes, no podemos acceder con persona.nombre
persona[nombre] = 'Juan'; // para agregar un symbol como atributo de un objeto usamos corchete
persona[apellido] = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo = 500;
console.log(persona);
console.log(persona[nombre]); // para acceder debemos usar los corchetes

// No se puede acceder al SYMBOL con un for.
for(let i in persona) {
    console.log(`${i} : ${persona[i]}`);
}

// También se puede crear UNA DESCRIPCION DEL SYMBOLO

let nombreCliente = Symbol('Nombre del cliente');// entre el parentesis agregamos la descripción del symbol
let cliente = {};

cliente[nombreCliente] = 'Pedro';


// Probar
console.log(cliente); //Al imprimir el objeto, se muestra esa descripción entre paréntesis.
console.log(cliente[nombreCliente]); // accedemos al nombre
console.log(nombreCliente); // nos retorna la descrición del cliente
