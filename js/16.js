//Functions

//Declaración de la función
function sumar(){
    console.log(10 * 10);
}

//Ejecución del código
sumar();

// Expresión de la función, se detecta más como una variable
// en este caso si se llama la función antes, dará un error, ya que al ser una variable debe llamarse después
const sumar2 = function(){
    console.log(3 + 3);
}

sumar2();

//IIFE: se llaman a si mismas
//No se recomiendan para reutilizarse, se usan para proteger las variables
(function(){
    console.log('Esto es una función');
})();

