"use strict"

let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true
}

// Con use strcit puedes agregar el metodo freeeze en el cual no puedes agregar y eliminar lo que le pones seal pero si lo puedes modificar
Object.seal(producto);

producto.precio = 900
console.log(producto);

