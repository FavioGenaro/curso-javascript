// Como se comunican las funciones entre si...
// es mejor tener varias funciones que una sola 
// Tus funciones se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en pequeñas partes, realizan una operación y se van hacia la otra función..., para eso es necesaria la comunicación entre ellas

iniciarApp(); // funcion que inicia todo

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion(); // mandamos a llamar la funcion una vez que termine el codigo anterior 
}


function segundaFuncion() {
    console.log('Desde la segunda función...')
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado con éxito ${usuario} `)
}


