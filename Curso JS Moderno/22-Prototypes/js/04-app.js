

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

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
Cliente.prototype.nombreClienteSaldo = function()  {
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
}

Cliente.prototype.retiraSaldo = function(retiro)  {
    this.saldo -= retiro;
}

// Instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log ( pedro);

// Acceder a los prototypes
console.log ( pedro.tipoCliente() );

// Un prototype que accede a otros prototypes
console.log ( pedro.nombreClienteSaldo() );

// reescribir un valor
pedro.retiraSaldo(2000);

// comprobar saldo
console.log ( pedro.nombreClienteSaldo());


// NUEVO: Heredar Prototypes

// Creamos 2 objetos nuevos...
function Persona(nombre, saldo, telefono) {
    // this.nombre = nombre;
    // this.saldo = saldo;
    // this.telefono = telefono;

    // como cliente y persona tiene atributos repetidos (nombre y saldo), podemos usar cliente para no repetir codigo
    // call manda a llamar al objeto
    Cliente.call(this, nombre, saldo); // con this llamamos a nombre y saldo
    this.telefono = telefono; // nuevo atributo
}
// Heredar las funciones del prototype ( Antes de Instanciarlo, porque dará error )
// Object.create es una funcion diseñada para heredar el prototype
Persona.prototype = Object.create( Cliente.prototype );

// Heredar el constructor, ya que este no se hereda con Object.create
Persona.prototype.constructor = Cliente;

// Instanciarlo,
const juan = new Persona('Juan', 6000, 1120192);
console.log(juan);


// Crear Prototype solo para Persona..., la funcion mostrarTelefono no estara en cliente
Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de este cliente es: ${this.telefono}`
}
console.log ( juan.nombreClienteSaldo() );
console.log ( juan.mostrarTelefono() );