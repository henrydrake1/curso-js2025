let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

//Une los dos arreglos
const resultado = Object.assign(producto, medidas)
console.log(resultado);

//Spreed Operator o Rest Operator
const resultado2 = {...producto, ...medidas}
console.log(resultado2);
