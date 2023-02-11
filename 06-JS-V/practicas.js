


function Motos(marca,modelo,color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

Motos.prototype.presentacion = function(){
    return 'My name is Joa ' + 'and this is my vehicle: ' + this.marca + this.modelo + this.color; 
}

let yamaha = new Motos('Yamaha ','2011 ','Blue.');

console.log(yamaha.presentacion());
