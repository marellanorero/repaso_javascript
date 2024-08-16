//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//ej de un carrito de compras
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televison 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

// forEach - se ejecuta al menos una vez por cada elemento en el arreglo
meses.forEach(function(mes) {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes - funciona bien en un array plano
let resultado = meses.includes('Diciembre');
const resultado2 = carrito.includes('Celular'); //acá no funciona

//en este caso utilizar Some, que es ideal para objetos
//resultado = carrito.some(function(producto){
//    return producto.nombre === 'Celular PRO'
//})

//con arrow function
resultado = carrito.some(producto => producto.nombre === 'CelularPRO');



//cómo podría calcular el total de ese carrito de compras
//Reduce
//resultado = carrito.reduce(function(total, producto) {
//    return total+producto.precio
//}, 0);

//con arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


//si quisiera obtener ciertos elementos del carrito
//Filter
resultado = carrito.filter(function(producto){
    return producto.nombre == 'Celular';
});
console.log(resultado);