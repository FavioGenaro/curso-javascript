// Fizz Buzz...

// Multiplos de 3: 3 6 9 12 15 ...  debe imprimir FIZZ
// Multiplos de 5: 5 10 15 20 25 ... debe imprimir BUZZ
// Multiplos de 3 y 5: 15 30 45 ... debe imprimir Fizz Buzz

for(let i = 1; i < 100; i++  ) {
    if(i % 15 === 0) { // multiplo de 3 y 5 son multiplos de 15, además debe ir primero porque el resto de ifs(%3 y %5) cumplen con esos numeros multiplos de 15.
        console.log(`${i} FIZZ BUZZ`)
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i} buzz`)
    } 
}