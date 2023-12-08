// El problema que solucionan los prototypes...

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 400);

console.log(juan);


// Supongamos que queremos una función que muestre el nombre y saldo...
function formatearCliente(cliente) {
    const {nombre, saldo} = cliente; // destruccting, extrae en variables nombre y saldo
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan)); // le pasamos el objeto juan


// si el sistema crece más y añadimos a empresas
function Empresa(nombre, saldo, categoria) { // constructor de empresa
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}
function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa; // destruccting, extrae en variables nombre y saldo
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

const ccj = new Empresa('Código Con Juan', 400,'Cursos en linea');
console.log(formatearEmpresa(ccj));
// console.log(ccj);


// Debido a que tengo una propiedad nueva, es dificil reutilizar esa función, lo cual nos llevaria digamos a muchas funciones que no sabriamos cuales utilizar para los diferentes objetos, esa es una ventaja que nos dan los prototypes ya que podemos crear funciones que se podrían atar o utilizar unicamente con determinados objetos...