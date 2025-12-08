/* for(let i = 0; i <= 10; i++){
    if (i === 5) {
        console.log(`Cinco`);   
        continue;
    }
    console.log(`Numero es: ${i}`);
} */

const carrito = [
    {nombre: 'PlayStation', precio: 600},
    {nombre: 'Xbox', precio: 500},
    {nombre: 'Nintendo Switch', precio: 400, descuento: true},
    {nombre: 'Pantalla LG', precio: 700},
    {nombre: 'Audifonos', precio: 100},
    {nombre: 'Teclado', precio: 30},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue
    }
    console.log(carrito[i].nombre);
    
    
}
