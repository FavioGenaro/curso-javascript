// Veamos otras comparaciones


const puntaje = "1000"; //puntaje del tipo string

// es igual
// dira que es igual, pese a que son de distinto tipo de dato.
if(puntaje == 1000) { 
    console.log("Si es igual!"); 
} else {
    console.log("No no es igual");
}

// No es igual
if(puntaje != 1000) { // Si puntaje es diferente de 1000
    console.log("Si! es diferente!"); 
}  else {
    console.log("No, no es diferente");
}
// comparador estricto de tipo y valor, se necesita que coincida en el tipo de dato y su valor, por lo que dirá que no es igual
if(puntaje === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// comparador estricto de tipo y valor
if(puntaje !== 1000) {
    console.log("Si es DIFERENTE (ESTRICTO) !"); // difiere en el tipo de dato
} else {
    console.log("No no es igual");
}
