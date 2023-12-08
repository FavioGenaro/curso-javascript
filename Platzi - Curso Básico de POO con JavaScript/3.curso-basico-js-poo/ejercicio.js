class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
      // Tu código aquí 👈
        return this._name;
    }

    set name(nuevoNombrecito) {
      // Tu código aquí 👈
        if (typeof nuevoNombrecito === 'string') {
            const palabras = nuevoNombrecito.split(" ");
    
            for (let i = 0; i < palabras.length; i++) {
                // console.log(palabras[i])
                palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1)//+ palabras[i].substr(1);
            }
    
            nuevoNombrecito = palabras.join(" ");
            this._name = nuevoNombrecito;
            console.log(nuevoNombrecito)
        }
    }
}

const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})

nombreMaysuculas.name = "Hola mundo"
// nombreMayusculas.name