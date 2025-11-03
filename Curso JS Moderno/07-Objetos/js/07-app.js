let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true
}

producto.disponoble = false
delete producto.nombre
console.log(producto);

console.log(producto.disponoble);
