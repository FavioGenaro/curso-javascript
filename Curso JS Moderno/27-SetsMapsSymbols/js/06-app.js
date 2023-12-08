
// Iterators
function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => { // retorna la funcion siguiente
            let fin = (i >= carrito.length); // va a iterar solo hasta que termine con todos los elemento
            let valor = !fin ? carrito[i++] : undefined; // si no llega al final, va a carrito++ y si llega retorna undefined

            return { // retorna finalmente un objeto
                fin: fin,
                valor: valor
            };
        }
    };
}
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorrerCarrito = crearIterador(carrito);//funcion que retorna una funcion

console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );