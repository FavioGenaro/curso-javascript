// Detectar si nuestra página se esta ejecutando en primer o segundo plano...
// el evento es visibilitychange
document.addEventListener('visibilitychange', e => {
    console.log(document.visibilityState) // mostramos el estado de la visibilidad

    // Twiter y facebook usan esta propiedad para detener o activar los videos,
    // si el usuario no esta le pone pausa, si es esta le da play
    if(document.visibilityState === 'visible') {
        console.log('Función para reproducir el video....' )
    } else {
        console.log('Pausando el video...')
    }
})

// Existen muchas API's nuevas, la de geolocalización no es tan nueva y es de las más populares, también Fetch API que estaremos viendo en el siguiente capítulo

