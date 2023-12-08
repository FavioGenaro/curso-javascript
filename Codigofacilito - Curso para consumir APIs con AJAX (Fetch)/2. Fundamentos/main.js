// estructura más básica de una petición con fetch
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (response.status >= 200 && response.status<300){ // entre 200 y 299
            
        }
        return response.json();
    })
    .then(data => console.log(data))
	.catch(err => console.log(err))*/


// 8. Parámetros query
let parametros = {
    userId: 1,
    _limit: 3
}

let url = new URL('https://jsonplaceholder.typicode.com/posts');

// Object.keys retorna un arreglo de los keys del objeto
// console.log(Object.keys(parametros));

Object.keys(parametros).forEach(paramKey => {
    // método searchParams, que viene del objeto URL, permite agregar parámetros a la url, pasamos el key y el valor.
    url.searchParams.append(paramKey,parametros[paramKey])
})
console.log(url)

// Ctrl + Alt + llave de cierre para generar ``
fetch(url) // usuario 1
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data))
	.catch(err => console.log(err))


// 9. Métodos HTTP

// 10. Parámetros en el cuerpo
let postParams = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(postParams)
}) // usuario 1
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 101}, retorna el ID del elemento registrado
	.catch(err => console.log(err))


// 11. Enviar JSON (Encabezado)

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(postParams),
    headers: { // enviamos la data en formato JSON
        'Content-type': 'application/json; charset=UTF-8',
    }
}) // usuario 1
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 101}, retorna el ID del elemento registrado
	.catch(err => console.log(err))

// 12. Subir archivos

