
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}


// Otra forma de hacerlo que se considera más moderna es con algo llamado el Spread Operator o Rest Operator
// los ...(tres puntos) quiere decir copiar ese objeto y cada copia se le asigna a resultado
const resultado = { ...producto, ...medidas};

console.log(resultado);