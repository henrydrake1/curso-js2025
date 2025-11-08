
const carrito = []

const producto = {
    nombre: 'Play Station',
    precio: 500
}

const producto2 = {
    nombre: 'Lap-Top',
    precio: 900
}

const producto3 = {
    nombre: 'XBox SeriesX',
    precio: 400
}


let resultado = [...carrito, producto]

resultado = [...resultado, producto2]
resultado = [producto3, ...resultado, ]

console.table(resultado);
