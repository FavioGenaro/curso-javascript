// Async Await 

function descargarClientes() {
    return new Promise((resolve, reject) => { // en promise simulamos una conexion a la base de datos
        const error = true; // esto simula un error en la conexión. true hay un erro y es detectado por el catch y false no hay error

        setTimeout( () => { // retrasamos la ejecución del codigo para simular la conexión
            if(!error) { 
								// resolve si la función se ejecuta sin problema
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
								// reject es cuando hay un error de ejecución
                reject('No se pudo aplicar el descuento'); // el catch detecta esto como el error y muestra el mensaje
                
            }            
        }, 3000); 

    });
}

// Async await
// async, se coloca en la función donde se ejecuta el await,
// await, se coloca en una función, este es la función que esta dentro de la funcion principal.
// await bloquea la ejecución del codigo, espera a que termine de ejecutarse la función para despues ejecutar el resto
async function ejecutar() {
    try {
        console.log(1+1) // en false solo esto se ejecuta
        const respuesta = await descargarClientes(); // Detiene la ejecución del try hasta que sea ejecutado...El codigo fuera del async continua ejecutandose(lo que esa fuera de la función se ejecuta)
        console.log(2+2)
        console.log(respuesta);
        console.log(2+2)
    } catch (error) {
        console.log(error) // si hay un error se detiene lo que esta dentro del try y se ejecuta el catch
    }
		console.log( 2 + 3); // 5
}
ejecutar();

console.log( 3 + 3); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta