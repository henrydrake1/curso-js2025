const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//! Esta es la version del and esto quiere decir que solo se cumple si todo el arreglo tiene esa condicion
const resultado = carrito.every(producto => producto.precio < 400)
console.log(resultado);

//! Esta es la version del or esto quiere decir que si solo una cimple marca true
const resultado2 = carrito.some(producto => producto.precio < 400)
console.log(resultado2);
