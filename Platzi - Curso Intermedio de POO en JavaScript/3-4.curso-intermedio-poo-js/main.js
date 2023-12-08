function isObject(subject) { // para saber si nuestra variable es un objeto
  return typeof subject == "object";
}

function isArray(subject) {  // para saber si nuestra variable es un arreglo
  return Array.isArray(subject);
}

function deepCopy(subject) { // subject es lo que vamos a copiar (puede ser un arreglo u objeto)
  let copySubject; // objeto que vamos a retornar

  // valores booleanos. Es un arreglo o un objeto
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) { // es un arreglo, subjectIsArray = true
    copySubject = [];
  } else if (subjectIsObject) { // es un objeto, subjectIsObject = true
    copySubject = {};
  } else { // si no es objeto ni arreglo, retornamos lo mismo
    return subject;
  }
 // (let key in obj)
  for (key in subject) { // recorremos los elementos del arreglo u objeto
    const keyIsObject = isObject(subject[key]); // si la propiedad es un objeto

    if (keyIsObject) {
      // añadimos la propiedad (key) al elemento que vamos a retornar (subject[key] = subject.key)
      copySubject[key] = deepCopy(subject[key]);// recursividad, pasamos la propiedad key
    } else {
      if (subjectIsArray) { // si la propiedad es un arreglo
        copySubject.push(subject[key]); // añadimos al arreglo (copySubject seria un arreglo)
      } else {
        copySubject[key] = subject[key]; // asignamos la misma propiedad, si esta no es objeto ni arreglo
      }
    }
  }

  return copySubject;
}


const obj1 = {
  a: 'a',
  b: 'b',
  c: {
      d: 'd',
      e: 'e',
  },
  editA() {
      this.a = 'Abcd'
  }
};


// molde o clase base
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

// con deep copy creamos copias del objeto base, es como si estuvieramos instanciando una clase
const juan = deepCopy(studentBase);

// con defineProperty asignamos un valor a algun dato de juan y además evitamos que se pueda modificar en un futuro
// Object.defineProperty(juan, "name", {
// 	value: "Juanito",
// 	configurable: false // evitamos que se pueda borra esa propiedad
// })

Object.seal(juan); // hace que todas las propiedades tenga configurable: false
// juan.name = "Juanito";

// sirve para verificar que todos los atributos del objeto tienen configurable: false
Object.isSealed(juan);



// Factory pattern y RORO

// Función para validar el ingreso de un parámetro
// Creamos una función con el objetivo de generar un Error el cual
// tendrá un mensaje customizado por nosotros.
// Como parámetro indicamos el nombre del atributo que no se está enviando (String)
function requiredParam(param) { // 👈👈
  throw new Error(param + " es obligatorio"); // Este es el mensaje de error generado
}


// función que sirve para crear estuantes
function createStudent({ // usmaos un objeto como argumento, estamos aplicando RORO
  // por defecto son undefined
  // Invocamos a la nueva función requiredParam en aquellos atributos que deseamos que sean obligatorios. 
  // por defecto esos valores serán un error, que es lo que retorna la función, si no asingamos nada, botará ese error.
	// Indicamos como argumento el nombre de dicho atributo.
  // si al crear un objeto le asignamos un valor a name y email, este error se reemplaza por ese valor y no habria ningun problema
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [], // por defecto son arreglos vacíos
  learningPaths = [],
} = {}) { // por defecto el objeto que recibos debe ser un objeto

  const privateAtributos = { // variables que no queremos que se modifiquen directamente, sino que pasen por una validació
		// '_name' es el atributo privado
		// 'name' es el parámetro que recibe la función
    "_name": name,
  };

  const publicAtributos = {
		// El resto de atributos serán públicos:
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    // changeName(newName) { // queremos que esta función sea pública
    //   privateAtributos["_name"] = newName;
    // },
    // readName() {
    //   return privateAtributos["_name"];
    // }
    get name() { // será ejecutada como juan.name
      return privateAtributos["_name"];
    },
		set name(newName) { // sera ejecutada como juan.name = "zdasdf"
      if(newName.length != 0){
        privateAtributos["_name"] = newName;
      }else{
        console.warn("Tu nombre debe tener al menos un carácter")
      }
    }
  }

  // evitamos que la función pueda ser modificada y eliminada, no asignamos ningun valor(value no lo editamos)
  // Object.defineProperty(publicAtributos, "readName", {
  //   writable: false,
  //   configurable: false,
  // });
  // Object.defineProperty(publicAtributos, "changeName", { // 👈👈
  //   writable: false,
  //   configurable: false,
  // });

  // retorna un objeto, este objeto tiene los atributos y funciones publicas
  return publicAtributos;
}

const juan2 = createStudent({ // sin error
  name: "Juanito",
  age: 18,
  email: "juanito@frijoles.co",
  twitter: "sdjkgfh"
});

// const juan3 = createStudent({}); // error

// const juan4 = createStudent({ email: "juanito@frijoles.co"}); // error