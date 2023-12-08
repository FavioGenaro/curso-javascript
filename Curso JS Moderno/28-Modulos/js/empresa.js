// 5) Heredar una lase exportada...


import { Cliente }  from './cliente.js';

export class Empresa extends Cliente{ // extends para que empresa herede de cliente
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro); // super para usar el contructor de cliente en nombre y ahorro 
        this.categoria = categoria; // categoria es un atributo nuevo por lo que se crea y no se hereda
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
    }
}
