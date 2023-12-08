
// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...
// parecido a los diccionarios en python
// y en cuanto a performance los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto

const cliente = new Map();

cliente.set('nombre', 'Karen'); // usamos una llave del tipo string y el valor tambien es un string
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set( true, true); // podemos usar booleanos de llave
cliente.set([0], 3000); // tambien arreglos a esto en si no le veo mucha utilidad
console.log(cliente);

// acceder a los valores
console.log(cliente.get('nombre')); // colocamos la llave y nos retorna su valor asociado
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));


// Métodos al MAP
// Tamaño del MAP
console.log(cliente.size); // la ext
// Contiene un valor
console.log(cliente.has('tipo')); // debemos buscar la llave, no el valor
console.log(cliente.get('tipo')); // para que nos retorne el valor, debemos colocar en get la llave
// Borrar
cliente.delete('nombre'); // colocamos la llave que debemo eliminar
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre')); // marca un underfine porque ya lo eliminamos
console.log(cliente.size);

// Borrar el map
// cliente.clear(); // elimina todos los elementos
console.log(cliente);

// También se puede inicializar un map con diferentes valores
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]); // dos arreglos dentro de un arreglo

paciente.set('nombre', 'Antonio'); // los valores se agregan al final
paciente.set('cuarto', 400); // si colocamos la misma llave, reescribe un valor

console.log(paciente);


// Foreach a un map, los maps son iterables
cliente.forEach((datos, index) => { // en este caso el index nos retorna la llave
    // console.log(datos);
    console.log(`${index}: ${datos}`);
});

