// Vamos a crear un ejemplo...


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Instanciar la clase cliente
const pedro = new Cliente('Pedro', 6000);

console.log(pedro)

// Obtener Tipo de Cliente
Cliente.prototype.tipoCliente = function()  { // Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo  = 'Normal';
    }
    return tipo;
}

// Otro Prototipo para el nombre completo
Cliente.prototype.nombreClienteSaldo = function()  { // muestra los datos del objeto
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `; // podemos usar un prototype dentro otro
}

Cliente.prototype.retiraSaldo = function(retiro)  { // reduce el saldo
    this.saldo -= retiro;
}

// Acceder a los prototypes
console.log ( pedro.tipoCliente() );
// Un prototype que accede a otros prototypes
console.log ( pedro.nombreClienteSaldo() );

// reescribir un valor
pedro.retiraSaldo(2000);
// comprobar que el saldo se rebajo
console.log ( pedro.nombreClienteSaldo());


// si creamos otro objeto, este no tendra las mismas funciones
function Empresa(nombre, saldo, categoria) { // constructor de empresa
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}
const ccj = new Empresa('Código Con Juan', 400,'Cursos en linea');
console.log(ccj);