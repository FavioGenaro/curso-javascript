// Previamente vimos getclientRect, que nos permitia identificar cuando un elemento estaba visible, existe otra API llamada Intersection Observer, veamos como utilizarla..


document.addEventListener('DOMContentLoaded', () => {
    
    // Indentifica si un elemento es visible en el viewport del navegador
    // podemos crear scroll infinito y el lazy loading de imagenes(que carguen cuando llegue a ellas)

    const observer = new IntersectionObserver( entries => { // creamos el objeto
        // entries almacenara informacion del elemento la visiblidad es uno de ellos
        // segun este o no visible, nos lo reportara en el entries
        console.log(entries[0]); // la propiedad Intersecting retorna si esta o no visible
        // cada que este visible o no nos imprime en la consola

        if(entries[0].isIntersecting) { // true por defecto
            console.log('Ya esta visible...')
        }
    })


    // El Elemento a observar, 
    // con el observer creado debemos pasarle un elemento, que es el elemento que va a observar
    observer.observe(document.querySelector('.premium'));
});

