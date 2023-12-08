// En este video estaremos viendo como seleccionar elementos por su clase...

// Seleccionando el header...

// Todos los selectores inician con document...
const header = document.getElementsByClassName('header'); // Es muy importante las mayusculas y minusculas para el nombre de la clase
console.log(header);

const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);


// Como las classes se pueden repetir(la misma clase en diferentes elementos), obviamente todas las coincidencias de clases se asignaran a contenedores.
// todos los elemento con la clase contenedor estaran en forma de un HTMLCollection
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si una clase no existe, no va a retornar nada...
// retorna un HTMLCollection vacio
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

