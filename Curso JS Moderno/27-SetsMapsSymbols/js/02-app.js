// Weakset solo puedes pasarle objetos
var ws = new WeakSet();
const cliente = {
    nombre: 'Juan',
    saldo: 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}

ws.add(cliente); 
ws.add(cliente2);
console.log(ws)

const nombre = 'Pedro';
// ws.add(nombre); // Solo se pueden agregar objetos, variables normales no


console.log( ws.has(cliente) ); // true
console.log( ws.has(cliente2)); // true

console.log( ws.delete(cliente)); // lo elimina y por ende retorna true
console.log( ws.has(cliente) ); // ya no lo encuentra, retorna false

// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.

