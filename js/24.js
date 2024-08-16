//For Loops

//for( let i = 0; i < 10; i++ ){
//    console.log(i);
//}

//for( let i = 1; i <= 10; i++ ){
//    if( i % 2 === 0 ){
//        console.log(`El número ${i} es par`);
//    } else {
//        console.log(`El número ${i} es impar`);
//    }
//}

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

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

//While Loop
//let i = 1; //indice

//while(i <= carrito.length) {
//    console.log(carrito[i].nombre);
//    i++; //incremento
//}

//Do While Loop, la diferencia con while es que si en el while no se cumple, no se ejecuta
//do while el código se ejecuta al menos una vez y luego ve si se cumple
let i = 100;

do{
    console.log(i);
    i++
}while( i < 10)
