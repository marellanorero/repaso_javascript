//This

//const reservacion = { //esta sería la información y es accesible, pero no iterable. por esto tendría que tener un reservacion2, 3 y etc... entonces, usas this
//    nombre : 'Laura',
//    apellido : 'Arellano',
//    total: 5000,
//    pagado: false,
//    informacion : function(){ 
//        console.log( ` El cliente ${reservacion.nombre} reservó y su cantdad a pagar es de ${reservacion.total} ` )
//    }
//}

const reservacion = { //this hace referencia al objeto sobre el cual se está mandando a llamar esa función
    nombre : 'Lukas', 
    apellido : 'Arellano',
    total:5000,
    pagado: false,
    informacion: function(){ //el arrow function no hace referencia al mismo objeto, si no a la ventana global (window) puedes agregar otra variable, o usarla de esta forma
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}
reservacion.informacion();