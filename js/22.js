
//const puntaje = 1000;

//if(puntaje == 1000) { //== es comparación no estricta
//    console.log('sí, el puntaje es 1000');
//} else { //si no se cumple
//    console.log('No')
//}

//if(puntaje === 1000) { //=== es comparación estricta, revisa valor y tipo de dato
//    console.log('sí, el puntaje es 1000');
//}

//if(puntaje !== 1000) { //!== es comparación estricta, que no sea igual 
//    console.log('sí, el puntaje es distinto a 1000');
//}

//const efectivo = 1000;
//const carrito = 800;

//if(efectivo > carrito) {
//    console.log('El usuario puede pagar')
//}else {
//    console.log('Fondos insuficientes')
//}

const rol = 'VISITANTE';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol ==='EDITOR'){
    console.log('Eres editor, puedes entrar, pero no puedes hacer mucho');
} else {
    console.log('No tienes acceso');
}