//Arreglos o arrays

const numeros = [10,20,30,40,50];
//console.log(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
//console.log(meses);
//console.table(meses);

//const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];
//console.log(arreglo);

//Acceder a los valores de un arreglo
//console.log(numeros[0]);
//console.log(numeros[1]);
//console.log(numeros[2]);
//console.log(numeros[3]);
//console.log(numeros[4]);
//console.log(numeros[10]); //Esto me dira undefined, ya que no está definido

//Conocer la extensión de un arreglo
//console.log(meses.length);

//Esto se llama iterar:
//meses.forEach( function (numero){
//    console.log(numero)
//});

//numeros[5]=60;
//numeros[6]=70; //esto arregla elementos al arreglo, en el final, pero no se utiliza mucho, ya que si agrego un numeros[2] que ya existe, lo modificará
//console.table(numeros);

//numeros.push(60); //Este método agrega algo al final del array
//console.log(numeros); //no se utiliza mucho, ya que no se recomienda modificar los datos originales

//numeros.unshift(-10,-20,-30); //agrega al incio del arreglo
//meses.pop();//este elimina el último elemento del arreglo
//meses.shift();//Este elimina el primer elemento del arreglo

//meses.splice(2, 1)//indice, cuantos quiero eliminar desde esa posición
//console.table(meses);

//Rest Operator o Spread Operator
const nuevoArreglo = ['Junio', ...meses];
console.log(nuevoArreglo)
