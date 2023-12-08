
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail')

// variables para los campos del formulario
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// la mejor forma de validar es con una expresión regular, podemos copiar la expresion regular para email en javaScript de https://emailregex.com/
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp) // cuando se inicia la pagina

    //validación de campos
    email.addEventListener('blur', validarFormulario) // cuando entro al input y luego salgo
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

    // reinicia el formulario
    btnReset.addEventListener('click',resetearFormulario)

    // enviar email
    formulario.addEventListener('submit', enviarEmail); //evento submit, para el envio
}

// FUNCIONES
function iniciarApp(){
    // deshabilitamos el boton al cargar la pagina,
    btnEnviar.disable = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50') // añadimos estas clases de tailwind - cursor prohibido y opacidad
}

function validarFormulario(e){
    // recordar que e.target es el campo en el que estamos, value es para obtener su contenido
    if (e.target.value.length > 0){ // si dentro del campo se escribio algo
        // eliminamos el mensaje de error
        const error = document.querySelector('p.error')
        if(error){// si existe ese elemento
            error.remove();
        }
        
        e.target.classList.remove('border-red-500') // le quita el borde rojo
        e.target.classList.add('border-green-500')

    }else{ // si no hay nada dentro del formulario
        e.target.classList.remove('border-green-500') // quitamos el borde verde
        e.target.classList.add('border-red-500') // le agrega un borde rojo
        mostrarError('Todos los campos son obligatorios');
    }

    // e.target.type, retorna el type del elemento: email, text, textArea
    if(e.target.type === 'email'){ // si el input es de tipo email debemos validarlo diferente
        // como es un input usamos value en vez de textContent
        // const contenido = e.target.value.indexOf('@'); // busca dentro del string un arroba. retorna -1 si no hay y retorna su posición en el texto si lo hay
        
        // la mejor forma de validar es con una expresión regular, podemos copiar la expresion regular para email en javaScript de https://emailregex.com/
        if(er.test(e.target.value)){ // .test para evaluar el contenido entre parentesis
            // eliminamos el mensaje de error
            const error = document.querySelector('p.error')
            if(error){// si existe ese elemento
                error.remove();
            }

            e.target.classList.remove('border-red-500') // le quita el borde rojo
            e.target.classList.add('border-green-500')

        }else{ // email no valido
            e.target.classList.remove('border-green-500') // quitamos el borde verde
            e.target.classList.add('border-red-500') // le agrega un borde rojo
            mostrarError('Email no válido')
        }
    }

    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){ // usamos la expresion regular para el email
        // pasamos la validacion
        btnEnviar.disable = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50')
    }


}

function mostrarError(mensajeE){ // muestra el tipo de error en la parte inferior
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensajeE;
    mensajeError.classList.add('border','border-red-500', 'background-color-100','text-red-500','p-3','mt-5', 'text-center', 'error')

    const errores = document.querySelectorAll('.error'); // all para que seleccione todos aquellos que tienen esa clase en forma de arreglo
    if(errores.length === 0){ // si no hay nada dentro del arreglo,  esto para que el mensaje de error no se repita
        formulario.appendChild(mensajeError) // muestra el mensaje
    }

}

function enviarEmail(e){
    e.preventDefault();

    // agregaremos un espiner, que es una animación de cargando, ocultado por css

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex'; 

    // despues de 3s ocultamos el spinner y mostramos el mensaje
    setTimeout(()=>{
        spinner.style.display = 'none'; // ocualtamos el spinner
        // mostramos un mensaje de enviado
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El correo se envio correctamente';
        parrafo.classList.add('text-center', 'my-10','p-2', 'bg-green-500', 'text-white', 'font-blod','uppercase')

        // insertamos el parrafo antes del spinner, igual no se muestra el spinner por lo que aparece antes de los botones
        formulario.insertBefore(parrafo,spinner)    
        
        
        setTimeout(()=>{
            parrafo.remove(); // luego de 5 segundos eliminamos el mensaje
            resetearFormulario()
        }, 5000);

    }, 3000);

    // setTimeout(()=>{
    //     console.log('se ejecuta despues de 3 segundos')
    // }, 3000); // ejecuta la funcion despues del tiempo que colocamos, este se coloca en milisegundo 1s = 1000

    // setInterval(()=>{ // cada 3 segundo se ejecuta la función
    //     console.log('se ejecuta cada 3 segundos')
    // }, 3000); // ejecuta la funcion cada tiempo que colocamos, este se coloca en milisegundo 1s = 1000

}

function resetearFormulario(){
    formulario.reset();//resetea el formulario
    iniciarApp(); // para que el boton se deshabilite

    // faltaria quitar los estilos de los input, ya que estos se quedan
}