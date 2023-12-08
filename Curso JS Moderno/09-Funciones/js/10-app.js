// En este video estaremos viendo lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

// función normal
const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}
aprendiendo();

// arrow function, el parentesis es para pasar los parámetros y se agrega la flecha en vez de function
const aprendiendo1 = () =>  {
    console.log('Aprendiendo 1 JavaScript');
}
aprendiendo1();

// si tiene una linea no requiere llaves
const aprendiendo2 = () => console.log('Aprendiendo 2 JavaScript');
aprendiendo2();

// tambien al ser de una sola liena, dan por implicito el return, retornar un valor
const aprendiendo3 = () => 'Aprendiendo 3 JavaScript';
console.log(aprendiendo3()); // debo colocar el console.log porque la función solo retorna el valor, pero no lo imprime

