// autos almacena un arreglo de objetos
//console.log(autos); // podemos llamar a variables de otros archivos javascript

// VARIABLES
const resultado = document.querySelector('#resultado');
// selects
const year = document.querySelector('#year'); // no coloca año como variable, por la ñ puede causar errores
const marca = document.querySelector('#marca'); 
const minimo = document.querySelector('#minimo'); 
const maximo = document.querySelector('#maximo'); 
const puertas = document.querySelector('#puertas'); 
const transmision = document.querySelector('#transmision'); 
const color = document.querySelector('#color'); 

const maxYear = new Date().getFullYear(); // año actual
const minYear = maxYear - 10;

const datosBusqueda = {// objeto que contiene el valor de cada select
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


document.addEventListener('DOMContentLoaded', () => { // cuando carge el HTML
    // mostras autos en resultado
    mostrarAutos(autos);

    // llenar selects
    llenarSelect();
})

// eventos para los selects
marca.addEventListener('change', e => { // change es un evento para los select, cada vez que cambia o se selecciona un valor
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => { // change es un evento para los select, cada vez que cambia o se selecciona un valor
    datosBusqueda.year = parseInt(e.target.value);// lo convertimos a entero por que viene como string
    filtrarAuto();
});
minimo.addEventListener('change', e => { // change es un evento para los select, cada vez que cambia o se selecciona un valor
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e => { // change es un evento para los select, cada vez que cambia o se selecciona un valor
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => { // change es un evento para los select, cada vez que cambia o se selecciona un valor
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change', e => { // change es un evento para los select, cada vez que cambia o se selecciona un valor
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e => { // change es un evento para los select, cada vez que cambia o se selecciona un valor
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda)
});

//FUNCIONES
function mostrarAutos(autos){

    limpiarHTML();//elimina el HTMl previo

    autos.forEach(auto =>{

        const {marca, modelo,year,puertas,transmision,precio,color} = auto;// usando destruccting
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        resultado.appendChild(autoHTML);

    })
}
// limpiar HTMl de resultado
function limpiarHTML(){
    while(resultado.firstChild){ // mientras tenga un hijo
        resultado.removeChild(resultado.firstChild)
    }
}


// genera los años de select
function llenarSelect(){

    for (let i = maxYear; i >= minYear; i--){// va a ir de adelante hacia atras para que la primera sea 2022 y la ultima 2012
        const opcion = document.createElement('option')
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// agrega cada opción al select

    }

}

// función de filtrado
function filtrarAuto(){
    // resultado almacena lo filtrado
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor); // funcion de alto nivel, usamos una función dentro de otra (filter es un array metod)
    // console.log(resultado)

    if (resultado.length){ // si hay algo (0 = nada y 1 a más = hay algo)
        mostrarAutos(resultado); // muestra el resultado del filtrado
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay resultados. Intenta con otros términos de búsqueda'
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){ // auto es la variable que itera sobre el arreglo autos
    const {marca} = datosBusqueda // usando detruting
    if(marca){ // si marca no esta vacia
        return auto.marca === marca; // retorna los autoss que cumplan la condición
    }
    return auto; // si no selecciona nada, retorna los autos que ya estaban seleccinados
}
function filtrarYear(auto){ // auto ya es la version filtrada del primer filter
    const {year} = datosBusqueda // usando detruting
    if(year){ // si year no esta vacio
        return auto.year === year; // retorna los autoss que cumplan la condición, podemos usar == ya que year viene como string y auto.year como int, aunque esto lo convertimos desde antes a int
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo; // aqui no hay operador estricto, compara string y number, podemos coloca parseInt o double si lo requerimos
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}