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
    return total * 1.15
}

total = agregarCarrito(600)
total = agregarCarrito(900)

const totalPagar = calcularImpuesto(total)
console.log(`El monto total que se tiene que pagar es ${totalPagar}`);

console.log(total);
