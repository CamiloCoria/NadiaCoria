let EntradasDisponibles = 200
let PrecioEntrada = 75

function saludar(){
    alert( "Bienvenidos");
}

saludar()

let CantidadEntradas= parseInt(prompt("Ingrese la cantidad de entradas a reservar"));
function ReservarEntradas(){
    
    while (CantidadEntradas <= 0 || CantidadEntradas > EntradasDisponibles) {
        if (CantidadEntradas <= 0) {
            alert("Lo siento, la cantidad debe ser mayor a cero.");
        } else {
            alert("Entradas insuficientes. Solo quedan " + EntradasDisponibles + " entradas disponibles.");
        }
        CantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas a reservar nuevamente"));
    }

    return CantidadEntradas;
}

ReservarEntradas();

let CostoTotal = CantidadEntradas  * PrecioEntrada;
let Confirmacion= confirm("Esta seguro de reservar " + CantidadEntradas + " entradas por el total de " + CostoTotal);
if (Confirmacion){
    alert("¡Las entradas ya son tuyas!");
} else{
    alert("Reserva CANCELADA.");
}

console.log ("hola como estas, el precio total es de " + CostoTotal )