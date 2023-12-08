// En este video veremos como unir 2 arreglos, para ello existe un array method llamado .concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre'];
const meses3 = ['Octubre','Noviembre','Diciembre'];

// Unir 2 arreglos con concat, es importante el orden en que concatenamos.
// Estructura (arreglo 1).concat(arreglo2, arreglo3, ...)
// NOTA: dentro de concat también puede ir cadenas otros valores y en este caso se añadirá dentro del arreglo.
const resultado = meses.concat(meses2, meses3,'Otro mes');
console.log(resultado);

// Existe otra forma, que es con rest operator o spread operator.
// Estructura: parece que estamos creando un arreglo, pero usamos los 3 puntos
// con ... añadimos un arreglo, tambien podemos añadir un string u otro valor al arreglo pero sin los ... , pero si le añadimos los ... convierte a ese string en un arreglo con todas sus letras
const resultado2 = [...meses,...meses2,...meses3,'Otro mes',...'Otro mes' ]; // Tienes que asegurarte de que sean arrays cuando usas ...
console.log(resultado2)

