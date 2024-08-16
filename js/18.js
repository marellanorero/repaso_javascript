function sumar(numero1= 0, numero2= 0){ //numero1, 2 son parámetros
    console.log(numero1  * numero2 );
}

//Ejecución del código
sumar(10, 10); //argumentos o valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1, 2);
sumar(1);

// Expresión de la función, se detecta más como una variable
// en este caso si se llama la función antes, dará un error, ya que al ser una variable debe llamarse después
const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}

sumar2(5, 10);