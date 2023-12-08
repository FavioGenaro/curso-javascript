
let DB;

document.addEventListener('DOMContentLoaded', () => { // cuando carga el HTML
    crmDB();

    setTimeout( () => { // despúes de 3s agregamos el cliente
        crearCliente();
    }, 3000);
});


function crmDB() {
    // .open nos sirve para crear la base de datos
    // crear base de datos con la versión 1.1
    let crmDB = window.indexedDB.open('crm', 1.1); // crm es el nombre y 1.1 es la versión

    // si hay un error, lanzarlo
    crmDB.onerror = function() {
        // puede que el navegador no soporte indexDB
        console.log('Hubo un error');
    }
    // si todo esta bien(se creo sin problemas), asignar a database el resultado
    crmDB.onsuccess = function() {
        console.log('todo listo! Base de datos creada');

        // guardamos el resultado
        DB = crmDB.result;
        
        console.log(DB);
    }
    // onupgradeneeded sirve para configurar 
    // este método solo corre una vez, como el SQL que se lee el archivo una vez para crear y añadir tablas
    crmDB.onupgradeneeded = function(e) {
        // console.log('Este metodo solo corre una vez');// si recargamos no se ejecuta porque el indexDB ya esta creada y no se borra al recarga, tendriamos que eliminarlo para que al actualizar se ejecute

        // el evento que se va a correr tomamos la base de datos
        const db = e.target.result;
        console.log(db)
        // definir el objectstore, primer parametro es el nombre de la BD que vamos a usar, segundo es un objeto de configuración
        // keypath es de donde se van a obtener los indices
        let objectStore = db.createObjectStore('crm', { 
            keyPath: 'id',  
            autoIncrement: true 
        } );
        // objectstore nos permite crear las columnas de nuestra base de datos
        // creamos las columnas 
        //createindex, nombre, keypath (referencia que usaremos para consulta esa columna, optamos por colocar todos igual)
        // y 3ro los parametros en un objeto, keypath esn este caso sera el indice para poder realizar busquedas
        objectStore.createIndex('nombre', 'nombre1', { unique: false } ); // unique es unico, false para que pueda repetirse ese campo y true para que no se repita
        objectStore.createIndex('email', 'email1', { unique: true } ); // el correo es unico por lo que es true
        objectStore.createIndex('telefono', 'telefono1', { unique: false } );

        // console.log('DB creada y lista');
    }
}


function crearCliente() {

    // Crear un nuevo registro
    // con transaction, primer valor es el nombre de la base de datos y como vamos a agregar cliente lo ponemos en modo lectura y escritura
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function(event) { // se completa la transacción
        console.log('Transacción Completada');
    };
    
    transaction.onerror = function(event) { // para el error en la transacción
        console.log('Hubo un error en la transacción') // puede mostrarse si escribimos 2 correos iguales porque lo pusimos como unique
    };

    // despues de las verificaciones anteriores, creamos el objeto para insertar
    let objectStore = transaction.objectStore('crm'); // colocamos de parametro el nombre de la base de datos
    console.log(objectStore);

    const nuevoCliente = { // objeto con los datos del cliente
        nombre1 : "Juan",
        email1: "correo@correo.com",
        telefono1: 1020912
    }


    let peticion = objectStore.add(nuevoCliente); // usamos add para insertar el cliente

    console.log(peticion); // 
}

