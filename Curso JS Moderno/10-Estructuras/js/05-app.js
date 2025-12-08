//* Switch Case

const metodoDePago = 'Tarjeta'

switch (metodoDePago) {
    case "Efectivo":
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    case "Cheque":
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    case "Tarjeta":
        pagar()
        break
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;
}

function pagar() {
    console.log("Pagando....");
    
}