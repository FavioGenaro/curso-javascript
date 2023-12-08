
// console.log(fetch('https://jsonplaceholder.typicode.com/posts'));

// estructura más básica de una petición con fetch
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>  console.log(data))