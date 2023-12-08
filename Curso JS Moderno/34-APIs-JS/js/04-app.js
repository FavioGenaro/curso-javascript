// ejecutar el sitio web en pantalla completa...

// seleccionamos los botones para aplicarles los eventos
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click',  pantallaCompleta);
salirBtn.addEventListener('click',  cerrarPantallaCompleta);



function pantallaCompleta() {
    // document.documentElement seleciona todo el html y con .requestFullscreen() ponemos en pantalla completa
    // es decir, que cualquier elemento puede colocarse en pantalla completa, en youtube escoge colocar el video en pantalla completa
    document.documentElement.requestFullscreen(); // con esto entremos en modo pantalla completa
}

function cerrarPantallaCompleta() {
    // salimos del modo pantalla completa
    document.exitFullscreen();
}