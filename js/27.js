//POO

//** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
const producto2 = new Producto('Monitor Curvo de 40"', 800, true);
const producto3 = new Producto('Laptop', 300, false);
//Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formateaProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de ${this.precio}`;
}

function formateaProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto2.formateaProducto());
console.log(producto3.formateaProducto());


