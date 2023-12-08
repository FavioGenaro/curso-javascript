// Parametros en un arrow Function...

// función normal
const aprendiendo = function(tecnologia){
    console.log(`aprendiendo ${tecnologia}`)
}
aprendiendo('JavaScript')

// Parametros
const aprendiendo1 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo1('JavaScript 1');

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo2 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo2('JavaScript 2');

// para multiples parametros si requieren parentesis
const aprendiendo3 = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} y ${tecn2}`);
aprendiendo3('JS', 'ES');

