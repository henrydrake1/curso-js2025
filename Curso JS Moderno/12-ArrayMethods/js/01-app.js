const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

/* meses.forEach((mes)=>{
    console.log(mes);
})

const resultado = meses.includes('Noviembre')
console.log(resultado);
 */
// En un arreglo de objetos se utuliza .some

const existe = carrito.some(producto =>  producto.nombre === 'PHROIN')
console.log(existe);

const existe2 = meses.some(mes => mes === 'Marzo')
console.log(existe2);

