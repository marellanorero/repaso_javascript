//Classes

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;

    }

    formatearProducto(){
        return `El Producto ${producto.nombre} tiene un precio de ${producto.precio}`;
    }
}

const producto2 = new Producto('Monitor Curso de 49"', 800);
const producto3 = new Producto('Laptop', 300);

//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('Javascript - La Revolución', 120, 910313981389139);

console.log(producto2);
console.log(producto3);
console.log(libro);