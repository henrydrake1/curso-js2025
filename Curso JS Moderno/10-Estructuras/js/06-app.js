const usuario = false
const puedePagar = false


if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} 
else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
    
}
else if(!usuario)
{console.log('Inicia sesion o registrate');
}

else if(!puedePagar){
    console.log('No tienes saldo suficiente');
    
}
