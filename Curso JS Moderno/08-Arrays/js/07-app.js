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

const producto4 = {
    nombre: 'Nintendo Switch',
    precio: 450
}

carrito.push(producto2)
carrito.push(producto)
carrito.unshift(producto3)
carrito.push(producto4)

console.table(carrito);


//?Eliminar ultimo elemento del Arreglo
//carrito.pop()
//console.table(carrito);

//?Eliminar Inicio del carrito
//carrito.shift()
//console.table(carrito);

//*Eliminar los elementos en posiciones diferentes
carrito.splice(1,2)
console.table(carrito);
