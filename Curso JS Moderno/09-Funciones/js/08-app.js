function sumar(a,b){
    return a + b
}

const resultado = sumar(20,1545)
console.log(resultado);

//* Ejemplo mas avanzado

let total = 0
function agregarCarrito(precio) {
    return total += precio
}

function calcularImpuesto(){

}

total = agregarCarrito(600)
total = agregarCarrito(900)

console.log(total);
