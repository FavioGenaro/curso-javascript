
// Vamos a definir un promise, tenemos dos palabras reservadas
// resolve: lo que se ejecuta cuando se cumple el promise
// reject: se ejecuta cuando hay un error en el promise, no se cumple
const aplicarDescuento = new Promise( (resolve, reject) => { // Puede ser arrow function...
    const descuento = true;

    // Comentar estas siguientes lineas para ver el Resolve...
    if(descuento) { 
        resolve('Descuento Aplicado'); // si hay un descuento
    } else {
        reject('No se pudo aplicar el descuento'); // cuando no hay un descuento
    }

});

// En los Promises hay 3 ESTADOS posibles,
// Fullfilled - se ha cumplido, descuento aplicado(true)
// Rejected - se ha recahzado o no se pudo cumplir (false)
// pendiente, no se ha cumplido o ni rechazado, es cuando no incluimos nada en la función
console.log(aplicarDescuento); // mostramos el promise


// se aplica el descuento y con .then definimos que pasa si se aplica y con catch si no se cumple, algunos llaman a estos tmb callbacks
aplicarDescuento
    .then( // aplica descuento, es decir, se cumple el promise y entonces (then)
    resultado =>  {
        console.log(resultado); // mostramos el resultado del promise, podemo tamb llamar a una función aparte
    }).catch( error => { // cuando el promise no se ejecuta
        console.log(error); // mostramos el contenido del reject
    });



// recuerda que gracias a las ventajas de los  arrow functions puedes colocar todo en una sola linea...

// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...

function descuento() {
    console.log('Aplicando el Descuento...');
}