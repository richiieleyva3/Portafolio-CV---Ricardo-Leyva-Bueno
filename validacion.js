//Validación en javascript del formulario

const formulario = document.getElementById("form");
const enviar = document.getElementById("enviar");

const nombre = document.getElementById("nombre");
const nombreError = document.getElementsByClassName("nombre");

const correo = document.getElementById("correo");
const correoError = document.getElementsByClassName("correo");

const asunto = document.getElementById("asunto");
const asuntoError = document.getElementsByClassName("asunto");

const mensaje = document.getElementById("mensaje");
const mensajeError = document.getElementsByClassName("mensaje");

nombre.addEventListener("input", function() {
    if (nombre.value === "") {
        nombreError[0].classList.add("invalid");
    } else {
        nombreError[0].classList.remove("invalid");
    }
});

correo.addEventListener("input", function() {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo.value)) {
        correoError[0].classList.add("invalid");
    } else {
        correoError[0].classList.remove("invalid");
    }
});

asunto.addEventListener("input", function() {
    if (asunto.value === "") {
        asuntoError[0].classList.add("invalid");
    } else {
        asuntoError[0].classList.remove("invalid");
    }
});

mensaje.addEventListener("input", function() {
    if (mensaje.value === "") {
        mensajeError[0].classList.add("invalid");
    } else {
        mensajeError[0].classList.remove("invalid");
    }
});

enviar.addEventListener("click", function(event) {
    event.preventDefault();

    var correcto = true;

    if (nombre.value === "") {
        nombreError[0].classList.add("invalid");
        correcto = false;
    } else {
        nombreError[0].classList.remove("invalid");
    }

    if (correo.value === "") {
        correoError[0].classList.add("invalid");
        correcto = false;
    } else {
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo.value)) {
            correoError[0].classList.add("invalid");
            correcto = false;
        } else {
            correoError[0].classList.remove("invalid");
        }
    }

    if (asunto.value === "") {
        asuntoError[0].classList.add("invalid");
        correcto = false;
    } else {
        asuntoError[0].classList.remove("invalid");
    }

    if (mensaje.value === "") {
        mensajeError[0].classList.add("invalid");
        correcto = false;
    } else {
        mensajeError[0].classList.remove("invalid");
    }

    if (correcto) {
        enviarCorreo();
        limpiarFormulario();
    } else {
        alert("Por favor, rellene todos los campos correctamente.");
    }
});

function enviarCorreo() {
    const datos = {
        nombre: nombre.value,
        correo: correo.value,
        asunto: asunto.value,
        mensaje: mensaje.value
    };

    emailjs.send("portafolio_ricardo_leyva","portafolio",{
        nombre_js: nombre.value,
        asunto_js: asunto.value,
        mensaje_js: mensaje.value,
        correo_js: correo.value,
        });
    alert("Correo enviado correctamente.");
}

function limpiarFormulario() {
    // Clear the input fields
    nombre.value = '';
    correo.value = '';
    asunto.value = '';
    mensaje.value = '';

    // Remove the 'invalid' class from the error messages
    nombreError[0].classList.remove("invalid");
    correoError[0].classList.remove("invalid");
    asuntoError[0].classList.remove("invalid");
    mensajeError[0].classList.remove("invalid");
}



