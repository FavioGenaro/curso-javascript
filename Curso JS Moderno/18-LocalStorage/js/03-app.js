// En este video veamos como eliminar elementos del storage...

localStorage.removeItem('nombre'); // removeItem para eliminarlo, colocando la clave

// En cuanto a toda la funcionalidad de un CRUD, nos haria falta un update, no hay como tal un Update... lo que podrías hacer es...
// si quiere actualizar un registro, debes definir lo que vas a actualizar trayendo el arreglo u objeto, luego modificar esa variable y con setItem reescribirla
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray)
mesesArray.push('nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray)) // le paso la misma clave para recribir su valor.

// localStorage.clear();