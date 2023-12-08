// En este video veamos como obtener lo sdatos de Local storage
// obtenemos con getItem y colocamos la llave para obtener su valor
const nombre = localStorage.getItem('nombre');
console.log(nombre);


const productoJSON = localStorage.getItem('productoJSON');
console.log(JSON.parse( productoJSON )); // con JSON.parse lo convertimos en objeto o arreglo según la forma que tiene el arreglo


const meses = JSON.parse( localStorage.getItem('meses'));
console.log(meses);

