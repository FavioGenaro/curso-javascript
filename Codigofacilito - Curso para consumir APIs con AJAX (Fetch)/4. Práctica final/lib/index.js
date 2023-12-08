// Control del DOM - Como un controlador de una arquitectura MVC

import { Todo } from "./Todo.js";

// cuando la página termine de cargarse
window.addEventListener("load", (ev) =>{ 
    
    let container = document.querySelector("#root ul");// elemento del dom

    // cargamos el evento submit al formulario
    document.querySelector('#mainForm').addEventListener("submit", (e)=>{
        e.preventDefault(); // para que no envie el formulario

        const form = ev.target; // elemento actual es el form
        const textarea = form.querySelector("textarea")

        const button = form.querySelector("[type='submit']") // elemento cuando se hace submit
        button.disabled = true; // deshabilitamos el botón, para que el usuario no haga varios clicks

        let todo = new Todo({ // creamos una clase Todo y le pasamos el valor del textarea como titulo
            title: textarea.value // solo es valor
        });

        todo.save().then(()=>{ // guardamos el registro del nuevo Todo
            // limpiamos y habilitamos el boton al completarse el save
            textarea.value = "";
            button.disabled = false;

            // Agregamos al html
            let li = buildDOMElement(todo);
            container.prepend(li);
        }); 

        return false;
    })

    // llamamos a la clase Todo y ejecutamos su método all
    // esto podemos hacerlo porque es un método estatico
    Todo.all().then(todos => {
        todos.forEach(todo => {
            // iteramos todos los todos y los insertamos en el contenedor
            let node = buildDOMElement(todo);
            container.append(node);
        });
    }); 

    // funcion que recibe un todo y retorna html
    let buildDOMElement = (todo) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <h1>${todo.title}</h1>
            <button class="close">X</button>
        `;

        li.querySelector(".close").addEventListener("click",(ev)=>{
            todo.destroy(); // realiza la eliminación del registro 
            li.remove(); // removemos del dom
        })

        // al terminar de añadir cada elemento al dom agregamos estos eventos
        editInplace(li.querySelector("h1"),todo); // h1 dentro de node, node es el h1

        return li;
    }

    // nueva función que recibe el node del dom, el todo y la propidad que es el nombre del todo
    let editInplace = (node, todo) => {
        node.addEventListener("click", (ev) =>{
            // reemplazamos el node por un campo de texto
            let inputText = document.createElement("textarea");
            inputText.value = node.innerHTML; // titulo del node
            inputText.autofocus = true;

            node.replaceWith(inputText); // reemplaza el elemento node por el inputText

            // finalizar la edición: Reemplazar el campo de texto por el node
            // evento que se dispara cuando estamos modificando el elemento
            inputText.addEventListener("change", (ev)=> {
                inputText.replaceWith(node);
                todo.title = inputText.value; // el titulo pasa a ser el valor del textarea (ev.target.value tmb puede ser)
                node.innerHTML =  todo.title; // actualizamos en el node del dom

                todo.save().then( r=> console.log(r)); // la respuesta la imprimimos por consola
            })
        })
    }
})
