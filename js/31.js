const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado))
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación', {
        icon:'img/uvas.png',
        body:'Código con Juan, los mejores tutoriales'
    })
}