// Detectar si tenemos o no RED...

const enLinea = navigator.onLine;

console.log(enLinea);

// Activar o desactivar... NETWORK 

// agregar un evento para offline y online

// Es muy común tener algo asi no? Uber cuando estas buscando tu transporte y si pierdes tu conexión te dice que no estas conectado. en javascript también es posible capturar algo asi

window.addEventListener('online', updateNetState); // si hay internet, actualiza el estado
window.addEventListener('offline', updateNetState); // si no hay internet, actualiza el estado
function updateNetState(e) { // actualiza el estado, si hay o no conexión
    if(navigator.onLine ) { // retorna true o false
        console.log('Si estas conectado')
    } else {
        console.log('Parece que has perdido tu conexión...')
    }
}

