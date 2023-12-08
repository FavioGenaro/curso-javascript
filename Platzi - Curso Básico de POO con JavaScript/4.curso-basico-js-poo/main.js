class Comment {
  constructor({
    content, // contenido del comentario
    studentName,
    studentRole = "estudiante", // esta es el único atributo no obligatorio, por defecto es estudiante, puede ser profesor o fredy
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0; // este atributo no lo recibimos, crearemos un método para modificarlo
  }

  publicar() { // publicar un comentario
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}



function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({
    name,
    classes = [],
    isFree = false, // nñadimos este nuevo atributo, para saber si el curso es gratis
    lang = "spanish", // idioma en el que esta el curso
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true, // curso es gratis
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english", // curso en ingles
});


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
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
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





class Student { // clase madre
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

  // los estudiantes pueden publicar comentarios
  publicarComentario(commentContent) {
    const comment = new Comment({ // creamos el objeto
      content: commentContent, // contenido
      studentName: this.name, // nombre del estudiante
      // el rol por defecto es estudiante
    });
    comment.publicar(); // publicamos el comentario
  }
}

class FreeStudent extends Student { // clase hija, hereda de Student
  constructor(props) { // recibimos todas las propiedades de nuestras instancias(objetos) en la variable props(props es el objeto literal)
    super(props); // el método super nos permite llamar al constructor de nuestro clase madre. super = constructor de Student
    // a este constructor le pasamos nuestro objeto literal props con los atributos de las instancias (objetos)
  }

  // definimos un método en esta clase para ver si puede tomar el curso
  approveCourse(newCourse) { // recibe el nuevo curso
    if (newCourse.isFree) { // solo puede tomar los cursos gratis
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") { // no puede tomar los cursos que estan en idioma "english"
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) { // puede tomar todos los cursos
    this.approvedCourses.push(newCourse);
  }
}

// nuevo tipo de estudiante
class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) { // creamos el método con el mismo nombre que la clase madre
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor", // le cambiamos el rol a profesor
    });
    comment.publicar(); // publica comentario
  }
}

const juan = new FreeStudent({ // es un estudiante sin suscripción
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito = new BasicStudent({ // estudiante con suscripción basica
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const freddy = new TeacherStudent({ // es un profesor
  name: "Freddy Vega",
  username: "freddier",
  email: "f@gep.com",
  instagram: "freddiervega",
});