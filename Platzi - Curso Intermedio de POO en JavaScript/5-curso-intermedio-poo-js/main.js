function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}


function SuperObject() {} // prototipo base
// de esta forma se agregan funciones estaticas a prototipos
SuperObject.isObject = function (subject) {
  if(Array.isArray(subject)){ // lo arreglo tmb se consideran objetos(heredan de Array y este de Object) por eso debemos hacer una validación previa
		return false
	}
  return typeof subject == "object";
}
SuperObject.deepCopy = function (subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}


function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

// Función para crear LearningPaths
function LearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
  // const private = {
  //   "_name": name,
  //   "_courses": courses,
  // };

  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses() { // solo hacemos un get de cursos, no un set porque no queremos editar la lista de cursos
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [], // debemos validar que solo se añadan objetos de tipo LearningPath
} = {}) {

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = { // definimos como propiedad privada
    "_learningPaths": [],
  };

  // con esto creamos las funciones get y set
  // this hace referencia al prototipo actual
  Object.defineProperty(this, "learningPaths", { // añadimos la propiedad learningPaths, que tendrá de valor de get(this.learningPaths) y set (this.learningPaths = "a")
    get() {
      return private["_learningPaths"]; // devolvemos del objeto private la propiedad _learningPaths
    },
    set(newLp) {
      if (newLp instanceof LearningPath) {
        private["_learningPaths"].push(newLp); // push al objeto privado
      } else {
        console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath");
      }
    },
    // configurable: false // esto porsi queremos hacer la eliminación de get o set
    // writeble: false // esto si se quiere modificar get, pero no es necesario porque si hacemos learningPaths = algo, activara set y este ya tiene las validaciones
  });

  // quitamos la validación si es un arreglo, que podemos añadirlo si queremos
  // iteramos la lista de learningPaths que nos manda el usuario y las agregamos a la lita
  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex]; // esto llamará al set
  }

  // const private = {
  //   "_name": name,
  //   "_learningPaths": learningPaths,
  // };

  // const public = {
  //   email,
  //   age,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   // eliminamos la variable learningPaths, será reemplazado por el get y set
  //   get learningPaths() {
  //     return private["_learningPaths"];
  //   },
  //   set learningPaths(newLP) {
  //     // hacemos las validaciones de lo que debe contener la variable que nos pasan
  //     if (!newLP.name) { // debe tener name
  //       console.warn("Tu LP no tiene la propiedad name");
  //       return;//sale de la función
  //     }

  //     if (!newLP.courses) { // debe tener courses
  //       console.warn("Tu LP no tiene courses");
  //       return;
  //     }

  //     if (!isArray(newLP.courses)) { // courses debe ser un arreglo
  //       console.warn("Tu LP no es una lista (*de cursos)");
  //       return;
  //     }
      
  //     private["_learningPaths"].push(newLP); // si pasa las validaciones se añade
  //   },
  // };

  // return public;
}

// const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });



const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [
    escuelaWeb,
    escuelaData,
    {name: "svfsdgdsg", courses: []} // no se agregará porque no es instancia de LearningPath
  ],
});
