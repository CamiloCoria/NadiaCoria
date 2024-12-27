// let EntradasDisponibles = 200
// let PrecioEntrada = 75

// function saludar(){
//     alert( "Bienvenidos");
// }

// saludar()

// let CantidadEntradas= parseInt(prompt("Ingrese la cantidad de entradas a reservar"));
// function ReservarEntradas(){
    
//     while (CantidadEntradas <= 0 || CantidadEntradas > EntradasDisponibles) {
//         if (CantidadEntradas <= 0) {
//             alert("Lo siento, la cantidad debe ser mayor a cero.");
//         } else {
//             alert("Entradas insuficientes. Solo quedan " + EntradasDisponibles + " entradas disponibles.");
//         }
//         CantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas a reservar nuevamente"));
//     }

//     return CantidadEntradas;
// }

// ReservarEntradas();

// let CostoTotal = CantidadEntradas  * PrecioEntrada;
// let Confirmacion= confirm("Esta seguro de reservar " + CantidadEntradas + " entradas por el total de " + CostoTotal);
// if (Confirmacion){
//     alert("¡Las entradas ya son tuyas!");
// } else{
//     alert("Reserva CANCELADA.");
// }

// console.log ("hola como estas, el precio total es de " + CostoTotal )



const Producto = function(nombre, precio, stock){
    this.nombre= nombre
    this.precio = precio
    this.stock = stock
}
let producto1  = new Producto("Camiseta-roja-25",100000,50)
let producto2  = new Producto("camiseta-azul.2025",100000,40)
let producto3  = new Producto("short-blanco-25",70000,45)
let producto4  = new Producto("piluso-2025",30000,40)
let producto5  = new Producto("camiseta-roja-niños",60000,50)


let lista = [producto1,producto2,producto3,producto4,producto5]

function agregarProducto(){
let nombre= prompt("ingresar el nombre del producto")
let precio = prompt("ingresar el precio del producto")
let stock = prompt("ingresar el stock del producto")

if(isNaN(precio) || isNaN(stock) || nombre == ""){
    alert("valor incorrecto, colocar uno valido")
    return
}
let producto = new Producto (nombre,precio,stock)
lista.push(producto)
console.table(lista)
}