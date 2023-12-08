// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m',
        fabricacion:{
            pais: 'China'
        }
    }
}


const { nombre, 
        informacion, // para obtener la variable información
        informacion: { peso, // aqui extraigo una variable por cada propiedad 
                    medida, 
                    fabricacion , //para obtener la variable fabricación
                    fabricacion:{pais} // aqui extraigo una variable por cada propiedad 
                    } 
        } = producto;


console.log(nombre)

console.log(informacion) // objeto
console.log(peso)
console.log(medida)

console.log(fabricacion) // objeto
console.log(pais)