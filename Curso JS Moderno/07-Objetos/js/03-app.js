// Veamos como asignar variables hacia un objeto

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}
console.log(producto);


// const nombre = producto.nombre; // estraigo el valor y asigno a la variable




// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas. lo que hcae es crear y estraer el valor y crear una variable con ese valor

const { nombre } = producto;


// si deseas extraer más variables;
const { precio } = producto;

console.log(nombre)
console.log(precio)

// O puedes hacerlo mejor con ,(coma) para hacer varias extraciones al mismo tiempo

//const {nombre, precio} = producto;
