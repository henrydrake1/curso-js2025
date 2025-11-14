iniciarApp()


function iniciarApp() {
    console.log('Iniciando App..');
    segundaFuncion()
    
}

function segundaFuncion() {
    console.log('Iniciando segunda funcion');   
    usuarioAutenticado('Enrique')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente ${usuario}`); 
}
