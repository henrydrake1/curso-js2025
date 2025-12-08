const dinero = 500
const totalAPagar = 3000
const tarjeta =  true

if (dinero >= totalAPagar) {
    console.log("Se realizo el pago");
    }else if (tarjeta) {
        console.log("Puedes pagar con tarjeta, credito aceptado");    
    }
    else{
        console.log("Dinero insuficiente, ingrese mas dinero");
        
    }

