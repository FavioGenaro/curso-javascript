const agregar = document.querySelector('.agregar-carrito');
// const card = document.querySelector('.card');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); // contiene lo productos seleccionados
const listaCursos = document.querySelector('#lista-cursos'); // toda el contenedor de los cursos
let articulosCarrito = [];
let cont = 1;

cargarEventListenes();
function cargarEventListenes(){

    listaCursos.addEventListener('click', agregarCurso);// click en todo el contenedor de los cursos

    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


//FUNCIONES
function agregarCurso(e){
    e.preventDefault(); // para que no vaya al enlace que tiene predefinido

    if(e.target.classList.contains('agregar-carrito')){ // si el donde hago click contiene la clase 'agregar-carrito' (que son los botones)
        // console.log(e.target.parentElement.children[0].textContent)
        const cursoSeleccionado = e.target.parentElement.parentElement; // padre del padre, es el card en sí
        leerDatosCurso(cursoSeleccionado);
    }
}


function eliminarCurso(e){
    e.preventDefault();
    // console.log(e.target)

    if(e.target.classList.contains('borrar-curso')){ // si el donde hago click contiene la clase 'agregar-carrito' (que son los botones)
        // console.log("Eliminado carrito...")
        // console.log(e.target.getAttribute('data-id'))
        const cursoId = e.target.getAttribute('data-id'); // de frente al atributo porque le dimos click a la X.

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId); // itera sobre el arreglo y devuelve los que sean diferente al id, es decir, todos menos el que voy a eliminar
        carritoHTML(); // mostramos el HTML
    }

}
function vaciarCarrito(e){
    e.preventDefault();

    articulosCarrito = []; // limpiamos el arreglo original
    limpiarHTML(); // limpiamos del HTML o tmb podriamos hacer uso de carritoHTML(), dado que igual no habria nada que mostrar
    // carritoHTML(); 
}

// leyendo datos del curso
function leerDatosCurso(card){ // el parametro es el card, este en formato html
    //creamos un objeto que alamacene los datos
    const infoCurso = {
        // card al ser html, podemos usar querySelector, para buscar en su contenido
        imagen: card.querySelector('img').src,
        titulo: card.querySelector('h4').textContent,
        precio: card.querySelector('.precio span').textContent,
        id: card.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //revisa si el elemento se repite, some itera el arreglo (si al menos un elemento del array cumple con la condición implementada por la función proporcionada.)
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id); // retorna true y false
    if (existe){
        const cursos = articulosCarrito.map(curso =>{ // recorremos el arreglo para actulizar la cantidad
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            }else{ 
                return curso; // retorna los objetos no duplicados
            }
        })
        articulosCarrito = [...cursos];
    }else{
        articulosCarrito = [...articulosCarrito,infoCurso]; // es el mismo arreglo + el nuevo objeto con infoCurso
    }

    carritoHTML(); // pasamos el contenido al HTML
}

// Colocar datos del carrito en el HTML, dentro del tbody
function carritoHTML(){
    // limpiamos el HTML
    limpiarHTML();// esto porque hiremos agregando el arreglo una y otra vez, el contenido se repetira, por lo que lo limpiamos antes
    // si tenemos 1, y luego agreamos el 2, en el arreglo tenemos 1 y 2, pero como ya estaba el 1 en el HTML, habria 1,1 y 2, por lo que debemos limpiarlo

    // recorremos articulosCarrito, card sera la variable que contenga cada valor del arreglo
    articulosCarrito.forEach(card => {
        // usando Destructuring para crear las variables
        const {imagen,titulo,precio,cantidad,id} = card; // deben estar en el orden que estan alamacenados en el objeto
        const row = document.createElement('tr') // creamos un elemento tr
        row.innerHTML =`
            <td> <img src="${imagen}" width="100px"> </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td> 
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `; // forma de generar HTML
        // a la X la añadimos la clase borrar-curso que esta definido en el archivo CSS, tambien el el HTML hay una columna vacia para esta X

        contenedorCarrito.appendChild(row); // agregamos el HTML dentro del tbody 
    })
}

function limpiarHTML(){
    // contenedorCarrito.innerHTML = ''; // forma lenta de eliminar HTML

    // forma rapida, ira eliminado el primer hijo hasta que no quede ninguno
    while(contenedorCarrito.firstChild){ // mientras tenga un hijo
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

