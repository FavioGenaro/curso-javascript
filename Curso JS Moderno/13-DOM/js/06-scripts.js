// Seleccionar elementos del DOM nos va a permitir modificar nuestro HTML y hacerlo más interactivo..

// Veamos por ejemplo como modificar el texto de la parte superior..


// Primero tenemos que seleccionarlo
// Seleccionamos el h1 del documento
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Si deseas acceder al texto del h1 hay 3 formas de hacerlo...
console.log(encabezado.innerText); 
console.log(encabezado.textContent); // respeta los espacios en blanco que puedan haber
console.log(encabezado.innerHTML); // trae lo que esta contenido dentro de la etiqueta h1 incluido si hay codigo HTML, en este caso se trajo la etiqueta span

// Cual es la diferencia entre estas 3... bueno, si le ponemos a ese elemento visibility: hidden; en el CSS, 

// Puedes ver que innerText no puede acceder a ese contenido, porque lo ocultamos con CSS

// Ahora, si añadimos algo de HTML, 

// TextContent trae el contenido sin importar el CSS y además va a ignorar esas etiquetas HTML y traer solo el texto, mientras que innerhTML si se trae el HTML.




// ahora también puedes tener algo de encadenamiento o chaining...
const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado); // trae directamente el texto, asignadolo a una variable.




// Para modificar el texto, lo que podemos hacer es asignar un valor a esa propidad
document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading'

// otra opción seria con una variable y asignarla a la propiedad.
const nuevoTexto = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;
// firefox al seleccionar una etiqueta HTML, nos da la etiqueta y las propiedades a las que podemos acceder de esa etiqueta



// También puedes cambiar una imagen...
// No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen...

const imagen = document.querySelector('.card img');
console.log(imagen); // la etiqueta
console.log(imagen.src); // nos da el link de la imagen
// Cambiamos la imagen, cambiando el link de la imagen
imagen.src = 'img/hacer2.jpg';