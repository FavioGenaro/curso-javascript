// 01- Vamos a abrir el capitulo 13-DOM y abrirlo en Live server

// Lo primero que haremos sera crear una carpeta llamada js / y en ella colocar el archivo scripts.js

let elemento;

elemento = document;
elemento = document.all; // seleecciono todos los elemento
elemento = document.all[0];
elemento = document.head; // selecciono el head
elemento = document.body; // selecciono el body


elemento = document.domain; // dominio desde donde se carga el proyecto (nuestro caso 127.0.0.1 que es el localHost)

// elemento = document.URL;
// elemento = document.characterSet;
// elemento = document.contentType;

elemento = document.forms; // muestra los formularios que hay en el proyecto, en forma de un HTMLColleccion parecido a un arreglo.
elemento = document.forms[0]; //como es un HTMLColleccion, podemos acceder con un indice como un arreglo
elemento = document.forms[0].id; // podemos obtener el id del formulario con indice 0, es decir, el primero
elemento = document.forms[0].method; // accedemos a su metodo
elemento = document.forms[0].classList; // nos da las clases que tiene el formulario, en forma de lista (parecido a un arreglo)
elemento = document.forms[0].action; // tmb al action del formulario

elemento = document.links; // nos da los enlaces que tiene el proyecto, en este caso todos los que tenga de equiqueta el <a>, en forma de HTMLColleccion

elemento = document.links[4]; // podemos acceder a un enlace en especifico
elemento = document.links[4].id; // accedemos a su id
elemento = document.links[4].className; // nos retorna las clases en forma de string
// elemento = document.forms[4].classList; // nos retorna la lista como DONTokenList, igualmente parcedo a un arreglo
// elemento = document.forms[4].classList[0];

elemento = document.images; // accedemos a todas las imagenes en forma de HTMLCollection

elemento = document.scripts; // tmb podemos acceder a todos los scripts en forma de HTMLColleccion
// elemento = document.scripts[2].getAttribute('src');

//console.log(elemento);

console.log(elemento);

