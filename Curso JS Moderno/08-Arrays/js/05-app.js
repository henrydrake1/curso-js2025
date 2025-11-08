const meses = ['Enero', 'Febrero', 'Marzo']

//Agregar al final del arreglo
meses.push('Abril')
meses.push('Mayo')

console.table(meses);


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
    nombre: 'XBox',
    precio: 400
}

carrito.push(producto2)
carrito.push(producto)
carrito.unshift(producto3)

console.table(carrito);
