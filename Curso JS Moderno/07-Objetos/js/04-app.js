let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true,
    imagen: "imagen.jpg"
}

const nombreObjet = producto.nombre
const imagenObjeto = producto.imagen
console.log(producto.nombre);
console.log(nombreObjet);
console.log(imagenObjeto);


//Deestrcuturar
const {precio, disponoble} = producto
console.log(precio);
console.log(disponoble);



