// Veamos unas serie de iteradores que se pueden considerar nuevos en JavaScript, ya vimos algunos en videos anteriores y usualmente con un for un map estarás bien, pero hay otros que pueden facilitarte tu código.


// Entries Iterador

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]); // set es
const datos = new Map(); // map es llave valor

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');

// entries, imprime llave y valor, si no hay una llave agrega una
// entries() a las ciudades, que es un arreglo
for( let entry of ciudades.entries() ){
    console.log(entry); // agrega una llave, que por se una arreglo las llaves son sus posiciones empezando por cero
}
// entries a las ordenes, que es un SET, sin llave
for( let entry of ordenes.entries() ){
    console.log(entry); // le asigna una llave a los sets, la llave es igual al valor
}
// entries a los datos, que es un MAP
for( let entry of datos.entries() ){
    console.log(entry); // como ya tiene llave valor, muestra ambos
}


// Values iterator, solo muestras los valores y no las llaves
// values() a las ciudades
for(let value of ciudades.values()) {
    console.log(value); // muestra los valores del arreglo
}
// values a las ordenes
for( let value of ordenes.values() ){
    console.log(value); // imprime los valore del set
}
// values a los datos
for( let value of datos.values() ){
    console.log(value); // imprime solo los valores del map, no las llaves
}


// Keys iterator, imprime las llaves
// keys() a las ciudades
for(let keys of ciudades.keys() ) {
    console.log(keys);// al ser un arreglo las posiciones son las llaves
}
// keyss a las ordenes
for( let keys of ordenes.keys()  ){
    console.log(keys);// al ser set genera las llaves con los mismos valores,sea int o string (llave==valor)
}
// keyss a los datos
for( let keys of datos.keys()  ){
    console.log(keys); // el map ya tiene sus propias llaves, asi muestra esas llaves
}


// Default o iterador por default, retorna los valores y llaves si hubiese
for(let ciudad of ciudades) {
    console.log(ciudad); // itera sobre el arreglo, el iterador normal sobre los valores
}

for( let orden of ordenes){
    console.log(orden);// solo retorna los valores
}

for( let dato of datos){
    console.log(dato); // trae llave y valor
}

// Iterar en un string
const mensaje = 'Aprendiendo JavaScript';

// Forma vieja
for( let i = 0; i < mensaje.length; i++ ) {
    console.log(mensaje[i]);
}

// forma nueva
for( let letra of mensaje) {
    console.log(letra);
}

// Iterar en un NODE LIST
const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlace.href);
}
