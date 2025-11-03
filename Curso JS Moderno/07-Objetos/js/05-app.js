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

console.log(producto);
console.log(producto.informacion.fabricacion.pais);



