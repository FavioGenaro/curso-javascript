const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {

    const SpeechRecognition =  webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // start recognition
    recognition.start(); // ejecutamos la grabación


    // Esto se ejecuta cuando se inicia el servicio de reconocimiento de voz.
    recognition.onstart = function() { // miestras inicia la grabación
        salida.classList.add('mostrar');
        salida.innerHTML = "Escuchando...";
    };
    
    recognition.onspeechend = function() { // cuando dejamos de hablar
        salida.innerHTML = "Se detuvo de ejecutar";
        recognition.stop();
    };

    // Esto se ejecuta cuando el servicio de reconocimiento de voz devuelve el resultado.
    recognition.onresult = function(e) {

        console.log(e.results);

        var transcript = e.results[0][0].transcript; // texto transcrito, 0 0 es SpeechRecognitionAlternativ
        var confidence = e.results[0][0].confidence; // confianza de la transcripción

				// insertamos en el HTML
        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML =  `Seguridad:  ${ parseInt( confidence*100) } %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };

}