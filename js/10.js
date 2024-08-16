//Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

//Mejor así:
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible:true
}

console.log(producto)
//Acceder solo al precio:
//console.log(producto.precio);
//otra forma:
//console.log(producto['precio']);

//agregar algo al objeto
producto.imagen = 'imagen.jpg';
console.log(producto)

//eliminar algo al objeto
delete producto.disponible;
console.log(producto)

//por ejemplo, en nodejs hago una consulta a la base de datos y no tiene una imagen
//o quiero eliminar algo, esta es la solución