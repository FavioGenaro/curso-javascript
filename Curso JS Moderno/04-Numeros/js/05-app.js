// Veamos como ir incrementando un valor de 1 en 1 o en determinada cantidad

// Incluir incremento por 1 y menos 1

let puntaje = 5;
puntaje++; // primero llama a puntaje y luego suma
// puntaje sera igual a 5 pero despues se le suma
console.log(puntaje); // 6

puntaje = 5;
puntaje--; // primero llama a puntaje y luego resta
console.log(puntaje); // 4

puntaje = 5;
++puntaje; // primero suma y luego llama a puntaje
console.log(puntaje); // 6

puntaje = 5;
--puntaje; // primero resta y luego llama a puntaje
console.log(puntaje); // 4


// incrementos mayores que 1
puntaje = 5;
puntaje += 3; // suma 3 a puntaje (puntaje = puntaje + 3)
console.log(puntaje); // 8

puntaje = 5;
puntaje -= 3;// resta 3 a puntaje (puntaje = puntaje - 3)
console.log(puntaje); // 2