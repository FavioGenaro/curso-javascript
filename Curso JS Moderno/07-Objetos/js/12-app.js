// object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}
// Object constructor

function Producto(nombre, precio){ //clase producto con 2 parametros
    // this para no mezclar y con eso indicamos que propiedades va a tener ese objeto
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor 24 pulgadas", 500)
console.log(producto2)

const producto3 = new Producto("Televisión", 100)
console.log(producto3)