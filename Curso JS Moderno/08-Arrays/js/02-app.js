// Veamos como acceder a los elementos de un arreglo...

const numeros = [10,20,30,40,50,[1,2,3]];


// esta vez estare utilizando 
console.log(numeros);
console.table(numeros); // genera una tabla


// La forma en la que accedes a un arreglo es por lo que se econoce como el indice en el arreglo, los arreglos inician en 0 usualmente aunque hay lenguajes donde inician en 1

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[3])
console.log(numeros[20]) // el arreglo no tiene indice 20, por lo que creara el valor pero como no esta definido dirá undefined

// para acceder al arreglo y los valores de un arreglo dentro de otro  (igualmente su índice inicia en cero)
console.log(numeros[5]);
console.log(numeros[5][2]);
