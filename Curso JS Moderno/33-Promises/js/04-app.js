// callback hell to promise...
const paises = [];

// nuevoPais vendria a ser nuestro promise. Los promise son callback
const nuevoPais = pais => new Promise( resolve => { // solo declaramos un resolve
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`)// si se cumple, mostramos agregado país
    }, 3000); // cada 3 segundo se ejecuta
});


nuevoPais('Alemania') // nuevo pais es un promise. Primero agregamos Alemania
    .then( resultado => { // resultado es el valor de resolve
        console.log(resultado); // mostramos el resultado del resolve
        console.log(paises);
        return nuevoPais('Francia'); // de forma recursiva llamamos el promise para agregar otro pais
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra'); // 3ro agregamos Inglaterra
    })
    .then(resultado => {
        console.log(resultado) // mostramos el resultado del promises
        console.log(paises); // mostramos el arreglo de paises
    })