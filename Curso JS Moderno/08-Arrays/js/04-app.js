// Al Igual que los objetos un arreglo se puede modificar a pesar de utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// podemos modicar los valores dentro del arreglo, con el uso de su indice 
meses[0] = 'Nuevo Mes'

// También se puede añadir al final, pues este indice no esta definido, pero nosotros lo definimos
meses[7] = 'Ultimo Mes'

// Al igual que los objetos en los arrays existen métodos que son bastante útiles, así que veamos algunos ejemplos en los siguientes videos.

console.log(meses);
console.table(meses);