//forEach y map
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

//ForEach - listado y mostrar información en pantalla
const arreglo1 = carrito.forEach(producto => console.log(producto.nombre)); //con console log o para imprimir en un HTML

//map - crear un nuevo arreglo
const arreglo2 = carrito.map(producto => producto.nombre);
//crear un nuevo arreglo, con otro formato
const arreglo3 = carrito.map(producto =>  ` ${producto.nombre} - ${producto.precio} ` )

console.log(arreglo1); //si solo quiero iterar o mostrar algo por consola
console.log(arreglo2); //se da por implicito que quiero crear un nuevo arreglo con lo que yo quiera retornar
console.log(arreglo3);

