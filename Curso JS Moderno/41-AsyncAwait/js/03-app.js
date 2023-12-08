// Async Await con Function Declaration o arrow function

function usuarioAutenticado() {
    return new Promise((resolve, reject) => {
        const autenticado = true;

        setTimeout( () => {
            if(autenticado) {
                resolve('El Usuario esta autenticado'); 
            } else {
                reject('Las credenciales son incorrectas');
                
            }            
        }, 3000);

    });
}

// Async await
// con arrow function
const login = async () => { // al se una función anonima, se pone el async al inicio
    try {
        const respuesta = await usuarioAutenticado();
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}


login();