let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true,
    imagen: "imagen.jpg"
}

//Agregar nuevas propiedads al objeto
producto.imagen2 = "imagen2.jpg";

//Eliminar propiedades del objeto
delete producto.imagen

console.log(producto);
