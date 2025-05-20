function verificarClave() {
    const claveCorrecta = "1234"; // cámbiala si quieres
    const entrada = document.getElementById("claveEntrada").value;
    const loginMensaje = document.getElementById("loginMensaje");

    if (entrada === claveCorrecta) {
        document.getElementById("loginContainer").classList.add("oculto");
        document.getElementById("diarioContainer").classList.remove("oculto");
        mostrarFecha();
        cargarTexto();
    } else {
        loginMensaje.textContent = "Clave incorrecta. Intenta de nuevo.";
    }
}

function mostrarFecha() {
    const fecha = new Date().toLocaleDateString("es-ES");
    document.getElementById("fechaActual").textContent = fecha;
}

function guardarTexto() {
    const texto = document.getElementById("textoDiario").value;
    localStorage.setItem("diarioGuardado", texto);
    alert("¡Guardado con éxito!");
}

function cargarTexto() {
    const texto = localStorage.getItem("diarioGuardado");
    if (texto) {
        document.getElementById("textoDiario").value = texto;
    }
}

function borrarTexto() {
    localStorage.removeItem("diarioGuardado");
    document.getElementById("textoDiario").value = "";
    alert("Texto borrado.");
}

function exportarTexto() {
    const texto = document.getElementById("textoDiario").value;
    const blob = new Blob([texto], { type: "text/plain" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "mi-diario.txt";
    enlace.click();
}
