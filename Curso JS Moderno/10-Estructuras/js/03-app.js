// Veamos como utilizar los operadores de mayor que o menor que...


let dinero = 500;
let totalCarrito = 300;

// para comprobar si podemos realizar el pago
// > mayor que
// < menor que
if( dinero > totalCarrito ) { // si dinero es mayor al total
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes');
}


dinero = 300;
// >= mayor igual que
// <= menor igual que
if( dinero >= totalCarrito ) { // si dinero es mayor al total
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes');
}

// También puede ser sin llaves
// let dinero = 500;
// let totalCarrito = 300;

// if( dinero > totalCarrito )
//     console.log('Pago Correcto');
// else
//     console.log('Fondos Insuficientes');
