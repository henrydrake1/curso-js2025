let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true,
    imagen: "imagen.jpg",
    informacion: {
        medidas: {
            peso: 'ikg',
            medida: '1m'
        },
        fabricacion:{
            pais: "China"
        }
    }
}


const {nombre, informacion:{fabricacion, fabricacion:{pais}}} = producto
console.log(pais);
console.log(nombre)
console.log(fabricacion);


