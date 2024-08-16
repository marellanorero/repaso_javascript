//Métodos de propiedad, son funciones, pero tienen sintaxis de método
const reproductor = {
    reproducir: function(id){
        console.log(` Reproduciendo Canción con el ID: ${id}` );
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlayList: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproducir la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(` Eliminando la canción: ${id}` )
}

console.log(reproductor);
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Alaba');
reproductor.reproducirPlayList('Alaba');