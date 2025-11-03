"use strict"

let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true
}

// Con use strcit puedes agregar el metodo freeeze en el cual no puedes modificar, agregar o eliminar lo que le pones freeze
Object.freeze(producto);

producto.imagen = "Imagen.jpg"

