const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']

const carrito = [
    {nombre: 'PlayStation', precio: 600},
    {nombre: 'Xbox', precio: 500},
    {nombre: 'Nintendo Switch', precio: 400},
    {nombre: 'Pantalla LG', precio: 700},
    {nombre: 'Audifonos', precio: 100},
    {nombre: 'Teclado', precio: 30},
]

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.precio);
    
}