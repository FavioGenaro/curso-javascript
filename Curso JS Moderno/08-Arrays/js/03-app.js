// Veamos algunas operaciones útiles en los arreglos,


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

// Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad, este contara desde 1, es decir, dara la cantidad exacta de elementos
console.log(meses.length); // 6 elementos

// ahora, si recuerdas en videos anteriores vimos como acceder a un arreglo, pero si este arreglo tuviera 40 elementos sería muy complicado ir 1 por 1, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese arreglo crece de forma dinamica, entonces, como acceder a todos los elementos? con algo llamado un iterador, y en javascript hay varios, veamos el for que existe en diferentes lenguajes...

// usamos let, porque el valor de i irá cambiando, lo que no podemos hacer con const
for (let i = 0; i < meses.length; i++) { // inicia en el indice 0, y recorre hasta el 6-1, es decir, 5, que es valor de indice mayor
    console.log(meses[i]);
}