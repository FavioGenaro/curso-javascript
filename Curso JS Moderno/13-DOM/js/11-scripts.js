// No siempre estarás haciendo traversing a tu dom, 

const btnFlotante = document.querySelector('.btn-flotante'); // boton de Idioma y Moneda
const footer = document.querySelector('.footer'); // selecciono el footer

btnFlotante.addEventListener('click', mostrarOcultarFooter); // boton foltante va a esperar el evento de click
// el primer argumento que le paso es el evento, en este caso click
// el segundo argumento es una función, puede ser una declarada o una funcion anonima como un arrow function
// btnFlotante.addEventListener('click',()=>{ //esto tambien es valido
// })


// esta una funcion declarativa
//console.log(footer.classList.contains('activo'))
function mostrarOcultarFooter() {
    // console.log(footer.classList); retorna las clase que tienen footer
    if( footer.classList.contains('activo') ) { // si esta con la clase activo, conaints 
        footer.classList.remove('activo');// quitamos la clasa activo y regresa su codigo css original(bottom:-100%)
        this.classList.remove('activo'); // al boton que llama la función se le quita la clase activo
        this.textContent = 'Idioma y Moneda';// cambiamos el texto del boton que llama a la funcion
    } else { // si no esta la clase activo
        footer.classList.add('activo'); // pasamos la clase 'activo' para que se muestre, es un css que lo eleva (bottom:0)
        this.classList.add('activo'); // al boton que llama la función se le añade la clase activo, que le cambia el color de fondo y texto
        this.textContent = 'X Cerrar'; // cambiamos el texto del boton que llama a la funcion
    }
}