const reproductor = {
    cancion: '',
    reproducir: id=> console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id=> console.log(`Borrando cancion ${id}` ),
    crearPlayList: nombre =>console.log(`Creando una PlayList de ${nombre}`),
    borrarPlayList: nombre => console.log(`Borrar la PlayList ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion
        console.log(`Anadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Aerials'
reproductor.obtenerCancion

reproductor.reproducir(30)
reproductor.reproducir(101)
reproductor.pausar()


reproductor.borrar(30)
reproductor.crearPlayList('Metal')
reproductor.crearPlayList('Pop')
reproductor.borrarPlayList('Metal')
