function videoPlay(id) { // recibe el id del video
  // url del video, es el video en sí
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass { // clase para las clases de platzi
  constructor({
    name,
    videoID, // no queremos que todas las personas entren al enlace del video solo pasamos el ID no el enlace completo
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  // las clases son videos
  reproducir() {
    // invocamos a las funciones externas, les pasamos le ID para obtener el enlace del video
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}





// Clase cursos
class Course {
  constructor({
    name,
    classes = [], // lista de clases, podriamos una clase Clases, porque puede que repitamos clases entre cursos y seria bueno ahorranos código
    comments = [] // comentarios generales de los cursos
  }) {
    this._name = name; // _ para indicar al resto del equipo que es "privado", aunque en realidad no lo sea
    this.classes = classes;
  }

  // GET y SET 
  // name() // podemos crearlo sin el get, pero la forma de invocar la función cambia
  get name() {
    return this._name;
  }

  // changeName(nuevoNombrecito){ // esta esa una función que permite cambiar los atributos
  //   this._name = nuevoNombrecito; 
  // }

  set name(nuevoNombrecito) {
    // podemos añadir condicionales para restringir el cambio del atributo para ciertos valores
    if (nuevoNombrecito === "Curso Malito de Programación Básica") { // que no tenga esta nombre
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }

}

// creamos los cursos
const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

// cursoProgBasica.name // esto ejecuta el get
// cursoProgBasica.name() // esto ejecuta la función name() sin el get

// cursoProgBasica.name = "" // esta es una forma(1ra) de cambiar el valor de los atributos si no tenemos un set u otra función
// cursoProgBasica.changeName("") // esto con la función changeName
// cursoProgBasica.name = "" // igual que la 1ra forma, nos permite modificar el atributo llamando al método set, si ya lo tenemos definido.


const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});


// ruta de aprendizaje
class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,// asignamos cursos a las rutas de aprendizaje
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness", // abria que crear objetos para estos cursos
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});
