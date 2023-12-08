// Realiza las acciones, realiza las Peticiones AJAX

// recibe un objeto json action
/**
    action { 
        type: tipo de petición
        payload: Contiene información que debemos enviar al servidor
    }

*/

// creamos esta variable como path principal, por si en algun momento ya no queremos los todos, sino clients, users, etc.
const path = "todos";

const endpoint = "https://jsonplaceholder.typicode.com"

// action es un objeto, este objeto será pasado desde el archivo Todo.js
export default async (action) => {
    // opciones(encabezados) para la petición AJAX
    let options = {
        method: getMethod(action)
    }

    // retornamos el resultado de fetch
    return fetch(endpoint+getPath(action), options)
        .then(data => data.json())
}

// get method
let getMethod = (action) => {
    switch(action.type){
        case "create":
            return "POST"
        case "update":
            return "PUT"
        case "destroy":
            return "DELETE"
        case "list":
            return "GET"
        case "listAll":
            return "GET"
    }
}

// ruta según el tipo
let getPath = (action) => {
    switch(action.type){
        case "create":
            return `/${path}`
        case "update":
            return `/${path}/${action.payload.id}`
        case "destroy":
            return `/${path}/${action.payload.id}`
        case "list":
            return `/${path}/${action.payload.id}`
        case "listAll":
            return `/${path}?_limit=20`
    }
}