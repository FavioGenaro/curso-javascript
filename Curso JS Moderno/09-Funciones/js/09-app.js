// En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..

// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...

const reproductor = { // las llaves hacen ver que es un objeto
    reproducir: function(id) {
        console.log(`Reproduciendo canción con id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    // borrar: function(id) {
    //     console.log(`Borrando canción con id: ${id}`)
    // },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}

console.log(reproductor);

reproductor.reproducir(30); // se consideran metodos de propiedad o metodos a secas
reproductor.pausar();

// Como es un objeto, tambien los métodos pueden crearse por fuera
reproductor.borrar = function(id) {
    console.log(`Borrando canción con id: ${id}`)
}
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');

