//Arrow function
// Expresión de la función, se detecta más como una variable
// en este caso si se llama la función antes, dará un error, ya que al ser una variable debe llamarse después
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5,10);

//Estructura básica de arrow function
const nombreFuncion = () => {

}

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('JavaScript');

//en array methods brillas los arrow function

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
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//con arrow function - diferecia en código 15
resultado = carrito.some(producto => producto.nombre === 'CelularPRO');

//cómo podría calcular el total de ese carrito de compras
//Reduce - diferecia en código 15
resultado = carrito.reduce( (total, producto) => total+producto.precio, 0);

//si quisiera obtener ciertos elementos del carrito
//Filter - diferecia en código 15
resultado = carrito.filter( producto => producto.nombre == 'Celular' );
console.log(resultado);