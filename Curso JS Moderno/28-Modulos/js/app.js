"use strict";
// 1) El Problema
// console.log(nombreCliente);


// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas o también si decidimos implementar librerías...

// La solución es agrupar cada archivo en lo que se conoce como un IIFE (irse al otro archivo...)

// console.log(window.nombreCliente);


// Para leer ese export utilizamos
// import { nombreCliente } from './cliente.js'; // entre llaves colocamos las variables y funciones. de forma destructurada 

// console.log(nombreCliente); // También nos va a marcar un error por lo tanto agregamos type="module"


// // Comentar el código anterior...


// import { nombreCliente, ahorro }  from './cliente.js';
// console.log(nombreCliente);
// console.log(ahorro);

// // Y puedes exportar o importar todo, variables, funciones, classes 



// // 3  ) Exportar e importar funciones..


// import { nombreCliente, ahorro, mostrarInformacion }  from './cliente.js';
// console.log(nombreCliente);
// console.log(ahorro);
// let cliente = mostrarInformacion(nombreCliente, ahorro);
// console.log(cliente);
// console.log(mostrarInformacion(nombreCliente, ahorro));


// // 4 

// import { nombreCliente, ahorro, Cliente }  from './cliente.js';

// let cliente2 = new Cliente(nombreCliente, ahorro);
// console.log(cliente2)
// console.log(cliente2.mostrarInformacion());


// // 5) 



// import { Cliente }  from './cliente.js';
// import { nombreCliente, ahorro, Cliente }  from './cliente.js';
// import { Empresa } from './empresa.js';


// // const nombreCliente = 'Juan',
// //       ahorroCliente = 400;

// let cliente3 = new Cliente(nombreCliente, ahorro);
// console.log(cliente3.mostrarInformacion());

// const nombreEmpresa = 'Udemy',
//     ahorroEmpresa = 1000000000,
//     categoriaEmpresa = 'aprendizaje';

// let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoriaEmpresa); // creamos objeto empresa
// console.log(empresa.mostrarInformacion()); // mostramos la informacion, metodo de la misma clase

// // 6 
import MiNuevafuncion, { nombreCliente as nombre, ahorro as ahorroCliente } from './cliente.js'; // lo que esta fuera de las llaves es un export default, solo puede existir uno por archivo
console.log(nombre); // solo debemos usar el alias, ya no el nombre original
console.log(ahorroCliente);

MiNuevafuncion();