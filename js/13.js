const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible:true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//No se modifican los datos originales por buenas prácticas
//Acá estamos uniendo dos productos, pero sin modificar el original
const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);