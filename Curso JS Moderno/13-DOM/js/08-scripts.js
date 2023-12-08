// Veamos lo que se conoce como Traversing the DOM

// Todo en JavaScript esta conectado en el document, pero la forma en que te moverás entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo..

// HIJOS
const navegacion = document.querySelector('.navegacion'); // seleccionamos el nav con su clase navegación
console.log(navegacion);

// Cada elemento(el a(enlace)) en la navegación los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
console.log(navegacion.childNodes); // trae los elementos en un NodeList, los espacios en blanco o saltos de linea son considerados elementos, por lo que los muestra como text

// también existe algo llamado Children
console.log(navegacion.children)// retorna los elementos hijos de esa clase, no considera espacios o saltos de línea, solo elementos html

// La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos...

// Hay mucha información aqui...
// podemos acceder a los nodos como arreglos
console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un elemento
console.log(navegacion.children[0].nodeName) // retorna que etiqueta es..., en este caso es un enlace, etiqueta <a>



// Por ejemplo si selecciono el primer card...

const card = document.querySelector('.card');
console.log(card.nodeType);
console.log(card.nodeName);

// 1 = Elemento
// 2 - Atributo
// 3 - Text node
// 8 - Commentario
// 9 - Documento
// 10 doctype

// en javascript puedes seleccionar un elemento y navegar en sus diferentes elementos... por ejemplo el card...

console.log(card.children); // accedemos a los hijos de .card

// Si quieres acceder a ese div con la clase de info puedes colocar...
console.log(card.children[1]); // accedemos al div.info

// Si quieres accedera  los elementos hijos de ese info... recuerda puedes anidar las propiedades.
console.log(card.children[1].children[1]); // accedemos al segundo hijo de div.info

// Acceder al titulo, retorna el texto 
console.log(card.children[1].children[1].textContent);

// Modificar ese titulo con un traversing, modifamos el texto
card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'

// Intenta cambiar el texto que dice concierto por algo más siguiendo esta sintaxis de ir navegando por el DOM...


// No lo hemos visto, pero veamos por ejemplo como acceder a una imagen...
console.log(card.children);
console.log(card.children[0]);
console.log(card.children[0].src);

// Cambiar la imagen...
card.children[0].src = 'img/hacer2.jpg'; // cambiamos la imagen






// Children es una buena forma de acceder a los elementos por su posición, pero supongamos que de nuestra navegación queremos acceder al primer o último enlace...

console.log(navegacion.lastChild); // considera a los espacios y saltos de línea como elementos (no usar)
console.log(navegacion.lastElementChild); // retorna el ultimo elemento de navegacion


// Si desesa acceder al primero
console.log(navegacion.firstChild) // considera a los espacios y saltos de línea como elementos (no usar)
console.log(navegacion.firstElementChild);

// Cambiar el primer texto...
navegacion.firstElementChild.textContent = 'Nuevo Enlace...';




// En el video anterior vimos como hacer traversing de un elemento padre hacia el hijo, JavaScript también te permite seleccionar un elemento hijo e ir navegando hacia el padre...

// PADRE
// vamos a seleccionar el primer enlace...
const enlace = document.querySelector('a');
console.log(enlace);


// Hay diferente sformas...
// Seleccionamos al padre del elemento
console.log(enlace.parentNode) // este considera elementos a los espacios y saltos de linea
console.log(enlace.parentElement) // esto es mejor, retorna solo elementos

// En algunos casos ambos van a dar el mismo resultado, en otros recuerda el espacio es importante...

// También puedes ir al padre del padre, asi sucesivamente
console.log(enlace.parentElement.parentElement)




// ELEMENTOS HERMANOS
// En JavaScript también es posible de hacer traversing a elementos que estan en el mismo nivel , digamos el vecino aunque en javascript se les conoce como hermanos...

console.log(enlace); // primer card
console.log(enlace.nextElementSibling); // hermanos siguiente del primer card
console.log(enlace.nextElementSibling.nextElementSibling); // 3er hermano

console.log(card.nextElementSibling);


// También hay una forma de ir digamos en la otra dirección...


const ultimoCard = document.querySelector('.card:nth-child(4)'); // seleccionamos el elemento 4 
console.log(ultimoCard)

console.log(ultimoCard.previousElementSibling);// va al elemento previo, antes, el hermano anterior