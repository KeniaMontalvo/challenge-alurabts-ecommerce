/*Validación*/

const form = document.getElementById("form");
const nombre = document.getElementById("name");
const mensaje = document.getElementById("mensaje");

const advertenciaNombre = document.getElementById("advertenciaNombre");
const advertenciaMensaje = document.getElementById("advertenciaMensaje");
const advertenciaGeneral = document.getElementById("advertenciaGeneral");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    resetearMensajes();

    if (nombre.value.length === 0) {
        mostrarAdvertencia(advertenciaNombre, "Ingrese un nombre");
    }
    if (mensaje.value.length === 0) {
        mostrarAdvertencia(advertenciaMensaje, "Ingrese un mensaje");    
    }
    else {
        advertenciaGeneral.innerHTML = "¡Tu mensaje se ha enviado!";
    }
});

function resetearMensajes() {
    advertenciaNombre.innerHTML = "";
    advertenciaMensaje.innerHTML = "";
    advertenciaGeneral.innerHTML = "";
}

function mostrarAdvertencia(elemento, mensaje) {
    elemento.innerHTML = mensaje;
}