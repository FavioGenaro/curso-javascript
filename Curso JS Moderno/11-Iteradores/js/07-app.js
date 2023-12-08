// En este video veremos for of...

// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este se ejecuta mientras haya elementos por iterar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];
// itera el arreglo
// let (variable que almacena el valor de cada dato del arreglo) of (arreglo)
for (let pendiente of pendientes) {
    console.log(pendiente);
}

// Sin duda una forma más sencilla que un foreach y un for no?

const carrito = [ // arreglo de objetos
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]
// producto almacenara cada objeto
for (let producto of carrito) {
    console.log(producto.nombre);
}

// Una forma de acceder a los nombres de los atributos(no a sus valores) usando for of, es con entries, añadido en ECMAScript 7
for(let [atributo, valor] of Object.entries(automovil)){
    // console.log(valor);
    console.log(atributo + ": " + valor);
}