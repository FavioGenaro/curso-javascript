// MomentJS
const diaHoy = new Date();
moment.locale('es');  // locale para colocar las fechas en español
// M para el mes, D para el dia y Y para el año. h para las horas, m para el minuto, s para los segundos
console.log(  moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy) ); // colocando .format podemos colocar un formato



console.log( moment().format('LLLL', diaHoy) ); 

console.log ( moment().add(3, 'days').calendar() ); // añado 3 dias a la fecha actual (calendar())



