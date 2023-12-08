// En javascript hay un objeto(clase) llamado Date que almacena fechas
const diaHoy = new Date();
let valor;
valor = diaHoy; // asignamos el valor
console.log(valor) // el dia de hoy, retornando una serie de valores más
console.log(typeof valor) // es de tipo objeto

// En este momento
Date.now();//retorna la fecha actual

// Formas de crear las fechas
// Date es Mes, dia y año
let cumple = new Date('1-5-1987'); // en el orden: Mes, dia y año
cumple = new Date('January 5 1987');// mismo orden pero con el mes escrito
console.log(cumple)

// console.log(typeof valor)

// Convertir fecha a string
// .toString lo cambiaria de object a string
// cumple.toString();
// valor = cumple;
// console.log(valor);

// metodos para las fechas
valor = diaHoy.getMonth(); // retorna el mes en el que estamos, pero inicia en cero, Enero = 0 - Diciembre = 11
console.log(valor);
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear(); // nos da el año actual
console.log(valor);
valor = diaHoy.getMinutes();
valor = diaHoy.getHours(); //retorna la hora actual (solo la parte hora)
console.log(valor);
valor = diaHoy.getTime(); // retorna los milisegundo que transcurrieron desde 1 enero de 1970 hasta la fecha
console.log(valor);
// Modificar datos de fechas con set
// valor = diaHoy.getFullYear();
diaHoy.setFullYear(2018); // Con el set modificamos el valor
console.log(diaHoy);