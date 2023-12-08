// Notificaciones nátivas

const notificarBtn = document.querySelector('#notificar');// seleccionamos el boton

notificarBtn.addEventListener('click', () => {
    Notification// al dar click usaremos la api de notificaciones
        .requestPermission() // y corremos un metodo que pregunta al usuario si quiera dar permiso a las notificaciones (Bloquear o Permitir)
        .then( resultado => { // usaremos promesas. 
            console.log('El resultado es ', resultado) // mostramos el resultado del permiso
        })
})

// const verNotificacionBtn = document.querySelector('#verNotificacion'); // seleccionamos el boton para que nos muestr una notificación
//     verNotificacionBtn.addEventListener('click', () => {
//         if(Notification.permission == 'granted') { // si dio Permitir, Invocamos nuevamente a la API de notificación y verificamos si tenemos permiso 
//             new Notification('Esta es la notificación'); // creamos un objeto de notificación y esta se mostrara automaticamente
//         }
// })


// Ir mas alla con nuestra notificación...

const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission == 'granted') {
        // convertimos la notificación en un objeto de notificación para poder asignarle eventos
        const notificacion = new Notification('Esta es la notificación', { 
            icon: 'img/ccj.png',
            body: 'Código con Juan, los mejores tutoriales'
        });

        // Ir al sitio web de juan
        notificacion.onclick = function() { // si hacen click sobre la notificación  ejecuta la función
            window.open('https://www.codigoconjuan.com') // los lleva al siguiente enlace
        }

    }
})