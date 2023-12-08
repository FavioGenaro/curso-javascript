// En este video estaremos viendo la palabra this...
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...
const nombre = "Hola";
const precio = 20;
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`; //hacemos referencia a las propiedades del objeto y no a las variables externas al objeto
    }
}

console.log(producto.mostrarInfo() );