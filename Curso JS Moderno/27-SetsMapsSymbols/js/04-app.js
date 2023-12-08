// Wekmap

let key = {userId:1}; // objeto
let key2 = {userId:2};
let weakmap = new WeakMap();

weakmap.set(key,"Alex"); // la llave es un objeto, solo acepta un objeto, muy parecido al weakset

console.log(weakmap.has(key))//true

console.log(weakmap.get(key)); //Alex, muestra el valor y hace como si userId:1 quedara oculto, pero podemos acceder a el imprimiendo el weakmap
console.log(weakmap)
console.log(weakmap.delete(key)); // true
console.log(weakmap.get(key)); //undefined

weakmap.set(key2,"Vicky");
weakmap.size; //undefined, no funciona
// tampoco podemos iterar
key2=undefined; // si la llave es undefined
console.log(weakmap.get(key2)); //undefined