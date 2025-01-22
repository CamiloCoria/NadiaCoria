let lista = [];


const inputElemento = document.getElementById("inputElemento");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const listaElementos = document.getElementById("listaElementos");


function actualizarLista() {
    
    listaElementos.innerHTML = "";

    
    lista.forEach((elemento, index) => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaElementos.appendChild(li);
    });
}


btnAgregar.addEventListener("click", function() {
    const nuevoElemento = inputElemento.value.trim();

    if (nuevoElemento !== "") {
        lista.push(nuevoElemento); 
        inputElemento.value = "";  
        actualizarLista();         
    } else {
        alert("Por favor ingrese un elemento.");
    }
});


btnEliminar.addEventListener("click", function() {
    if (lista.length > 0) {
        lista.pop();  
        actualizarLista();  
    } else {
        alert("No hay elementos para eliminar.");
    }
});