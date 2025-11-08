
const producto = {
    nombre: 'PlayStation',
    precio: 600,
    disponibilidad: true
}

const{nombre} = producto
console.log(nombre);

//? Distructuring con Arreglos

const numeros = [10,20,30,40,50]

const [primero] = numeros
const [, ,tercero] = numeros
const [primerPuesto, ...segundoPuesto] = numeros
console.log(primero);
console.log(tercero);
console.log(segundoPuesto);


