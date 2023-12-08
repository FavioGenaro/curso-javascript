// Otra opción que a mi me gusta mucho es aplicar algo llamado delegation..

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => { // click a toda la tarjeta
    //target para saber que elemento HTML le damos click
    // classList: para saber las clases del elemento
    // contains: comparamos la clase
    if(e.target.classList.contains('titulo')) { // si damos click
        console.log('click titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('click precio');
    }
    if(e.target.classList.contains('card')){
        console.log('click en card')
    }
});