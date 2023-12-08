// 2 O mas Async await...

//Es muy común tener 2 Async Await,  es probable que quieras en una misma función descargar los últimos 100 clientes y también los últimos 50 pedidos..
// creamos 2 promises
function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes....');
        setTimeout( () => { // despues de 5 segundos resulve el promise
            resolve('Los clientes fueron descargados');           
        }, 5000);

    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => { // despues de 5 segundos resulve el promise
        console.log('Descargando Pedidos....');
        setTimeout( () => {
            resolve('Los pedidos fueron descargados');           
        }, 3000);
    });
}

// Async await
// const app = async () => {
//     try {
//         // una función se ejecuta despues de otra
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);
//             // queremos que despues de descargar los clientes, descargue los pedidos. queremos primero tener los clientes para luego consultar sus pedidos
//         const pedidos = await descargarUltimosPedidos();
//         console.log(pedidos);
//     } catch (error) {
//         console.log(error)
//     }
// }

// La solución, Promise.all();
const app = async () => {
    try {
        //Promise.all va a agarrar un arreglo de promises
        // permite, en caso las dos funciones son independientes, ejecutarse en parelelo, veremos como una demora más por tener 5s y otra menos de 3s
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos() ])
        // da la impresión 
        console.log(respuesta); // retorna un arreglo con la respuesta de cada función
        console.log(respuesta[0]); // la respuesta de la primera función (descargarNuevosClientes())
        console.log(respuesta[1]); // la respuesta de la segunda función (descargarUltimosPedidos())
    } catch (error) {
        console.log(error)
    }
}
app();