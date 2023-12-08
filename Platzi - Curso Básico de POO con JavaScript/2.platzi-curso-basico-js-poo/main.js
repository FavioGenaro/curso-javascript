const natalia = { // objeto literal
  name: "Natalia",
  age: 20,
  cursosAprobados: [ // este arreglo tendrá los métodos del proto de Array
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCursito) { // 1ra forma de crear un método
    // this para hacer referencia al mismo objeto natalia, podemos hacer 
    this.cursosAprobados.push(nuevoCursito);
  },
  aprobarCurso2: function(nuevoCursito){ // 2da forma de crear un método
    this.cursosAprobados.push(nuevoCursito);
  }
};

// acción que realiza el objeto natalia
// cursosAprobados.push("Curso de Responsive Design"); // agregamos un curso, el arreglo tiene acceso al método push

// no es necesario hacer el console.log() porque podemos ir a la consola directamente y colocar 'natalia' y ese aparece automaticamente porque está creada
// console.log(natalia)



// CREAMOS UN PROTOTIPO para los estudiantes
function Student(name, age, cursosAprobados) {
  this.name = name; // this es la propiedad del prototipo y lo igualamos al parámetro que recibimos.
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  this.aprobarCurso2 = function (nuevoCursito) { // 1ra forma de crear métodos en prototipos
    this.cursosAprobados.push(nuevoCursito);
  }
}

// usamos prototype
Student.prototype.aprobarCurso = function (nuevoCursito) { // 2da forma de crear métodos en prototipos, por fuera de la función
  this.cursosAprobados.push(nuevoCursito);
}

// creamos una instancia del prototipo y le pasamos los datos como si fueran parámetros de una función que de hecho es una función.
const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Creación de Personajes",
  ],
);
// console.log(juanita)


// CLASES
class Student2{

  // usamos el método constructor para definir los atributos de la clase
  constructor({ // colocamos un objeto de atributos
    name,
    cursosAprobados = [], // por defecto es un arreglo vacio
    age,
    email,
  }){
    // de igual forma usamos this, que hace referencia a la clase y su atributos
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // esta es una forma de crear funciones, como un atribuo tipo función
    // this.aprobarCurso2 = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // }
  }

  // creamos un método, es una función, pero no necesitamos coloca function
  aprobarCurso(nuevoCursito) {
    // podemos usar this tmb
    this.cursosAprobados.push(nuevoCursito);
  }
}

// instanciamos la clase
// const miguelito = new Student2(
//   "Miguel",
//   ["Curso 1","Curso 2"],
//   28,
//   "miguelito@platzi.com",
// );

// instanciamos la clase, con un objeto como atributo, patrón RORO
const miguelito2 = new Student2({ // vemos que no declaramos el atributo cursosAprobados 
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});

// Ventajas de la programación orientada a objetos

class LearningPath { // completar esta clase

}
// instancias de la clase LearningPath
const escuelaWeb = new LearningPath();
const escuelaData = new LearningPath();
const escuelaVgs = new LearningPath();

class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined, // sin valor, podemos definir esta valor, pero dentro de cada objeto en particular porque esto no es obligatorio.
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [], // arreglo con objetos de la clase LearningPath
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = { // este objeto literal albergará varios atributos, este se convierte en un atributo
      // estos datos son los que estan dentro del objeto que viene de parámetro.
      // estos al no tener el this, no son considerados atributos como tal, no podemos llamarlos de la sgte forma: objeto.twitter
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// instanciamos la clase, el único atributo obligatorio es el objeto literal
const juan2 = new Student3({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [ // añadimos los objetos
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito3 = new Student3({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

