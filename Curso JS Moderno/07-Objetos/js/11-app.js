// this sirve para llamar a dentro del objeto que fue declararo

let producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponoble: true,
    mostrarInfo: function(){
        console.log(`El Producto ${this.nombre} tiene un precio ${this.precio} dolarucos`);
        
    }
}

producto.mostrarInfo()
