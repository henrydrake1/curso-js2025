const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);   
    },
    borrar: function(id){
    console.log(`Borrando cancion ${id}` );
    },
    crearPlayList: function(nombre){
        console.log(`Creando una PlayList de ${nombre}`);
    },
    borrarPlayList: function(nombre){
        console.log(`Borrar la PlayList ${nombre}`);
        
    }

}

reproductor.reproducir(30)
reproductor.reproducir(101)
reproductor.pausar()


reproductor.borrar(30)
reproductor.crearPlayList('Metal')
reproductor.crearPlayList('Pop')
reproductor.borrarPlayList('Metal')