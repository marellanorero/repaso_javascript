//Tipos de datos
//string o cadenas de texto
//const producto = "Monitor de 20 pulgadas"; //Esta es la que más se utiliza
//const producto2=String('Monitor 30 pulgadas');
//const producto3=new String('Monitor 50 puladas');
//const producto4="Monitor de 20\""//coloqué el \ para que no confunda la " de pulgadas con el cierre de "
//más sencillo usar '' pero si no se pudiera puedes usar el \

//console.log(producto)
//console.log(producto2)
//console.log(producto3);

const tweet = "Aprendiendo JavaScript";
const producto6 = "Monitor HD";
const email = 'correo@correo.com';

console.log(tweet.length); //para saber la extensión de una cadena
console.log(producto6);

//IndexOf, retorna los carácteres donde se encuentra lo que buscas
console.log(tweet.indexOf('JavaScript'));
console.log(producto6.indexOf('Tablet')); //si da un valor -1 es porque no lo encontró
console.log(email.indexOf('@'));

//Includes, retorna true or false
console.log(tweet.includes('JavaScript'));
console.log(producto6.includes('Tablet'));
