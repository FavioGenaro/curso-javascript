// Finalmente otro tema importante cuando trabajas con el DOM, es la creación de HTML desde JavaScript..

// Cuando publicas un tweet, tienes un textarea que al enviarlo se agrega al listado de tweets, de ahi la gente comienza a darle me gusta, así que veamos como hacerlo generar HTML desde JavaScript...


// Y no te preocupes si todo lo que vemos en este video no queda claro, estaremos practicando mucho lo que es el DOM Scripting ya con muchos otros proyectos...

// Vamos a crear un nuevo enlace... lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...

const enlace = document.createElement('A');// creamos la etiqueta A
console.log(enlace);

// Segundo paso es crear el texto del enlace, lo haremos con textContent
enlace.textContent = 'Nuevo Enlace';

// Despues vamos a asignar una ruta a la que va a dirigir ese enlace
enlace.href = '/nuevo-enlace';

// podemos ir agregando propiedades al enlace donde deseas mostrarlo...
// Si quieres agregar una clase
enlace.classList.add('enlace'); // le agregamos una clase al enlace
enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace')// colocamos atributos
enlace.onclick = miFuncion; // añadimos una funcionalidad al enlace al darle click

// seleccionamos la navegación, que es el lugar donde queremos agregar el enlace
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); // lo agregamos como hijo de la navegacion, al final
navegacion.insertBefore(enlace,navegacion.children[1])// con esto indicamos en que posicion queremos insertarlo, nos da más control, antes de la posicion 1
console.log(enlace);

//tambien podemos dar cierta funcionalidad al elemento
function miFuncion(){
    alert('Diste click')
}




// Vamos a crear un segundo ejemplo, crearemos uno de nuestros cards... sin duda será algo más complejo...

// crear los 3 parrafos. que componen un CARD
// Primer parrafo
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto'); // clase de concierto

// Segundo parrafo, el titulo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo'); // clase de titulo

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por pesrona';
parrafo3.classList.add('precio');

// crear el div...
const info = document.createElement('div');
info.classList.add('info'); // añadimos la clase info al div
// añadimos al div cada uno de los parrafos, en orden
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

console.log(info);
console.log(parrafo1);
console.log(parrafo2);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';// ruta de la imagen
imagen.alt = "Texto alternativo";
imagen.classList.add('img-fluid') // añadimos una clase de boostrap por ejemplo, que hace que la imagen sea responsiva

// Creamos el card, que es el div padre de info
const card = document.createElement('div');
card.classList.add('card');
// Vamos a asignar la imagen al card...
card.appendChild(imagen); // primero la imagen
// y el info
card.appendChild(info); // segundo la info
console.log(card);

// Insertarmos el card en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');// seleccionamos como en css ya que .contenedor-cards se repite más abajo
contenedor.appendChild(card); // al final del contenedor
//contenedor.insertBefore(card,contenedor.children[0]) // insertamos antes de 0, es decir, al incicio

console.log(contenedor);