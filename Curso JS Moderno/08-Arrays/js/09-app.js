const carrito = [
    {nombre: 'PlayStation', precio: 600},
    {nombre: 'Xbox', precio: 500},
    {nombre: 'Nintendo Switch', precio: 400},
    {NOMBRE: 'Pantalla LG', precio: 700},
    {NOMBRE: 'Audifonos', precio: 100},
    {NOMBRE: 'Teclado', precio: 30},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

carrito.forEach(function(producto){
    console.log(`${producto.nombre} -- ${producto.precio}$ `);
    
})

