//"use strict"; //Correr JS en modo estricto
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible:true
}

Object.seal(producto);  //.freeze .seal seal si te permite modificar las propiedades existentes pero ninguno de los dos te permite eliminar algo existente
producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto));

console.log(producto);