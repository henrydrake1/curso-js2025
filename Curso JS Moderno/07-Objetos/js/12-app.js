//Object Literal
let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true,
}

//Object Constructor 

function Producto(nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponoble = true
}
const producto2 = new Producto('Monitor 24 pulgadas', 500)
console.log(producto2);

const producto3 = new Producto('Consola Nintendo Switch', 13600)
console.log(producto3);
