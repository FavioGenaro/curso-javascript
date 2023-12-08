// En este video estaremos viendo eventos que ocurren con el mouse

const nav = document.querySelector('.navegacion');


// vamos a registrar el eventListener para el nav..
//mouseenter, cuando estamos sobre el elemento (es un hover)
nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')

    nav.style.backgroundColor = 'gray';
});
//mouseout, cuando salimos del elemento
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})


// otros eventos abarcan...

// mousedown - cuando presionamos click, 
// click - similar a mousedown, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar el click
// 