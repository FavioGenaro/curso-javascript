// Clase Todo, consultamos la info mediante objetos y métodos
// Accedemos a la información o ejecutamos las acciones por medio del archivo request

import performer from './request.js' // performer es el nombre de la función anonima exportada

export class Todo{

    // método estatico para enlistar todos los tudus
    static async all(){
        let todos = await performer({ // nos retorna una promesa con todos los tudus
            type:"listAll"
        });
        console.log(todos);

        // instanciamos un objeto para cada elemento retornado
        // map retorna un arreglo
        return todos.map(todoJSON => new Todo(todoJSON))
    }

    // contructor de la clase
    constructor (args) { // args del todo
        this.userId = args.userId;
        this.title = args.title;
        this.completed = args.completed;
        this.id = args.id
    }

    save = async () => {

        // si tiene un id, llama a update, sino a create porque es nuevo
        if (this.id) return this.update();
        this.create();
    }

    create = async () => {
        let response = await performer({ // nos retorna una promesa con todos los tudus
            type:"create",
            payload: { // sola pasamos el titulo
                title: this.title
            }
        })
        .then(data => this.id = data.id); // retorna el id del todo creado
        return response; 
    }

    update = async () => {
        let response = await performer({ // nos retorna una promesa con todos los tudus
            type:"update",
            payload: {
                id:this.id,
                title: this.title
            }
        });
        return response; 
    }

    destroy = async () => {
        let response = await performer({ // nos retorna una promesa con todos los tudus
            type:"destroy",
            payload: {
                id:this.id
            }
        });
        return response; 

    }
}