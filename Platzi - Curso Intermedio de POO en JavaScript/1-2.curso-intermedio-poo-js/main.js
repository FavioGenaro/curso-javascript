// creamos objeto literal
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) { // método para el objeto
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse); // this referencia a la propiedad del propio objeto
  }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// console.log(Object.getOwnPropertyDescriptors(juan));

// recibe el nombre del objeto, el nombre de la nueva propiedad
// y tmb recibe un objeto con la lista de atributos writable, enumerable y configurable
Object.defineProperty(juan, "pruebaNASA", {
	value: "extraterrestres",
	writable: false,
	enumerable: false,
	configurable: false
});


Object.defineProperty(juan, "navigator", { // Creamos un nuevo atributo
	value: "Chrome",
	enumerable: false, // 👀
	writable: true,
	configurable: true,
});

Object.defineProperty(juan, "editor", { // Creamos un nuevo atributo
	value: "VSCode",
	enumerable: true,
	writable: false, // 👀
	configurable: true,
});

Object.defineProperty(juan, "terminal", { // Creamos un nuevo atributo
	value: "WSL",
	enumerable: true,
	writable: true,
	configurable: false, // 👀
});

// console.log(Object.getOwnPropertyDescriptors(juan));


// Object.seal(juan) // cambia configurable a false para todos los atributos, evitando que nuestros atributos sean borrados.
Object.freeze(juan) // cambia configurable y writable a false para todos los atributos,  evitando que nuestros atributos sean editados y borrados.

console.log(Object.getOwnPropertyDescriptors(juan));


// Shallow copy

const obj1 = {
	a: "a",
	b: "b",
	c: {
		d: "d",
		e: "e"
	}
}

const obj2 = {}
// traramos de copiar manualmente las propiedades de obj1 hacia obj2
for (propiedad in obj1) {
	obj2[propiedad] = obj1[propiedad]; // es lo mismo que obj2.propiedad=obj1.propiedad solo que no podemos colocar el ., no lo hace bien
}

obj2.a = "atributo a";
obj2.b = "atributo b";
obj2.c.d = "objeto dentro de otro";

console.log(obj2);
console.log(obj1);

// Ahora usaremos algunos métodos estaticos de Object.
// El Object.assign nos permite realizar el mismo shallow copy que podemos hacer con el bucle for.
// obj3 es igual a ese objeto vacio y dentro de este objeto vacio se copian las propiedades de obj1
const obj3 = Object.assign({}, obj1);

// Con esto podemos crear copias exactas
console.log(obj1); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
console.log(obj3); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }

// Sin embargo, si hacemos modificaciones en los nested objects...
obj1.c.d = "COPIA DESDE EL OBJ1";

// se verán afectados los demás objetos copiados
console.log(obj3); // { a: 'a', b: 'b', c: { d: 'COPIA DESDE EL OBJ1', e: 'e' } }


// Object.create: Nos permite crear un objeto que tenga como parte de su prototipo a los atributos de otro objeto
// obj4 tendrá en el proto las propiedades de obj1
const obj4 = Object.create(obj1);



// convertimos en String y el resultado lo asignamos en un variable:
const stringifiedComplexObj = JSON.stringify(obj1);
// convertimos el string a objeto y lo asignamos al nuevo objeto:
const obj5 = JSON.parse(stringifiedComplexObj);

console.log(obj1);
console.log(obj5);

// Si hacemos modificaciones en un de los objetos...
obj5.c.d = "nested object";
obj5.c.e = "nested object11";
// El objeto original no se vería afectado
console.log(obj1);
console.log(obj5);

const obj6 = {
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


const stringifiedComplexObj2 = JSON.stringify(obj6);

// console.log(stringifiedComplexObj2);
// "{\\"a\\":\\"a\\",\\"b\\":\\"b\\",\\"c\\":{\\"d\\":\\"d\\",\\"e\\":\\"e\\"},\\"f\\":[1,\\"2\\",3]}"

const obj7 = JSON.parse(stringifiedComplexObj2);

// console.log(obj7);
// {a: "a", b: "b", c: {d: "d", e: "e"}}