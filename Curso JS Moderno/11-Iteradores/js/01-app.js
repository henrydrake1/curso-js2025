/* for(let i = 0; i < 100000; i+=300){
    console.log(`Numero: ${i}`);   
}
 */

/* for(let i = 1; i<=20; i++){
    if(i % 2 === 0 ){
        console.log(`El numero ${i} es par`);
    }
    else{
        console.log(`El numero ${i} es impar`);
    }
    
} */


const carrito = [
    {nombre: 'PlayStation', precio: 600},
    {nombre: 'Xbox', precio: 500},
    {nombre: 'Nintendo Switch', precio: 400},
    {nombre: 'Pantalla LG', precio: 700},
    {nombre: 'Audifonos', precio: 100},
    {nombre: 'Teclado', precio: 30},
]

console.log(carrito[0]);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
    
    
}




