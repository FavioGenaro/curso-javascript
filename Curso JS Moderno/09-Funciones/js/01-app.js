// Las funciones en cualquier lenguaje son una serie de procedimientos o instrucciones, que realizan una acción, una ventaja de las funciones es que permiten tener un código más ordenado y fácil de mantener..

// Otra ventaja de las funciones es que son reutilizables, puedes tener una función que valide un formulario y utilizarla en todos tus formularios, puedes tener también una función que envie datos al servidor y reutilizarla múltiples veces...

// Existen 2 formas de crear funciones en JavaScript

// DECLARACIÓN DE FUNCIÓN, la expresión de la función utiliza la palabra reservada function, seguida de un nombre y un parentesis, en este parentesis se colocan los argumentos, finalmente el cuerpo de la función se define por unas llaves...

function sumar() {
    console.log(2 + 2); // lo que hace es sumar 2+2 y mostrarlo
}

// Las funciones deben llamarse, para poder usarse:

sumar(); // se manda llamar por su nombre seguido del parentesis()


// EXPRESIÓN DE FUNCIÓN - Este tipo de funciones se asigna como si fuera una variable
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2(); // se manda llamar de la misma forma

// Existe una 3ra forma de crear funciones, que más bien son métodos, la veremos un poco más adelante...

