// Cuando tienes múltiples condiciones por revisar, como unas 10 o 20, una forma fácil de leerlo es con un switch...

const metodoPago = 'efectivo';

switch(metodoPago) { // dentro colocamos la variable que queremos revisar
    // los case son los diferentes valores que queremos comprobar
    case 'efectivo': 
        console.log(`Pagaste con ${metodoPago}`);
        break;// una vez que ejecuta el codigo, debemos para la ejecución o verificación de los demás case.
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default: // es obligatorio, es igual que un else, en caso ningun case tenga el valor del la variable
        console.log('Aún no has pagado');
        break;
}


// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if