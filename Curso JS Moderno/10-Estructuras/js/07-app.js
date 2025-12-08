
const efectivo = 3
const credito = 597
const disponible = efectivo + credito
const totalPagar = 600

if (efectivo>=totalPagar || credito >= totalPagar || disponible >= totalPagar) {
    console.log("Puedes pagar la tarjeta");
}
else {
    console.log('fondos insufucientes');
    
}