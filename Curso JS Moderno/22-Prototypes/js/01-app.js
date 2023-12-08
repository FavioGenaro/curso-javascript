// En este capitulo estaremos viendo que son los prototypes y como utilizarlos

// Los prototypes están muy relacionados con los objetos... de hecho el prototype esta disponible en todos los objetos (todos lo tienen)

// Previamente habiamos visto 2 formas de crear objetos:

// Object literal, que es algo asi:
// Esta forma aunque es la más común, también es menos dinamica..
const cliente = {
    nombre: 'Juan',
    saldo: 500
}
console.log(cliente)

// Si necesitas añadir o crear un objeto reutilizable ó dinamico, tienes que utilizar un constructor de función

// En JavaScript hoy en día tenemos clases, pero previamente la programación porientada aobjetos era de la siguiente forma:
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 400);

console.log(juan); // Puedes ver que si expandimos juan en la consola tenemos algo llamado el Prototype...