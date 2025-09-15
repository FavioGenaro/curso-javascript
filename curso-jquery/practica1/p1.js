$(document).ready(function () {

    // 
    $("#contador").click(function () {
        let funcion = $("#contador").val(); // valor del texto del boton
        if (funcion == "Ver nº enlaces") {
            // contamos el número de enlaces
            let enlaces = $("a");
           // console.log(enlaces)

            $("#mostrar").val(enlaces.length); // cantidad de enlaces
            $("#contador").val("ver nº parrafos"); // cambiamos el texto del boton
        }
        else {
            // contamos los parrafos
            let parrafos = $("p");
            $("#mostrar").val(parrafos.length);
            $("#contador").val("Ver nº enlaces");
        }
    });

    $("#parrafos").click(function () {

        let funcion = $("#parrafos").val();
        let nuevo_parrafo = "<p>NUEVO PÁRRAFO</p>";

        if (funcion == "Añadir párrafo") {
            // añadimos un parrafo
            $("#contenido").append(nuevo_parrafo);
            $("#parrafos").val("Eliminar parrafo");
        } else {
            // Eliminamos un parrafo
            let parrafos = $("p");
            let parrafo = parrafos[parrafos.length - 1];
            parrafo.remove();
            $("#parrafos").val("Añadir párrafo");
        }
    });

    $("#fondo").click(function () {
        let funcion = $("#fondo").val();

        if (funcion == "Poner fondo") { 
            // añadimso un fondo
            $("#contenido").css("background-color", "cyan");
            $("#fondo").val("quitar fondo");
        } else {
            // quitamos un parrafo
            $("#contenido").css("background-color", "white");
            $("#fondo").val("Poner fondo");
        }
    });
});