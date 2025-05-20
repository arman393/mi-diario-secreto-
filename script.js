
const claveSecreta = "1234";

function verificarClave() {
    const entradaClave = document.getElementById("claveEntrada").value;
    if (entradaClave === claveSecreta) {
        document.getElementById("loginContainer").classList.add("oculto");
        document.getElementById("diarioContainer").classList.remove("oculto");
        cargarTexto();
        mostrarFecha();
    } else {
        document.getElementById("loginMensaje").textContent = "Contraseña incorrecta.";
    }
}

function mostrarFecha() {
    const hoy = new Date();
    const fechaTexto = hoy.toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    document.getElementById("fechaActual").textContent = fechaTexto;
}

function guardarTexto() {
    const texto = document.getElementById("textoDiario").value;
    localStorage.setItem("diario", texto);
    alert("Texto guardado.");
}

function cargarTexto() {
    const texto = localStorage.getItem("diario");
    if (texto) {
        document.getElementById("textoDiario").value = texto;
    }
}

function borrarTexto() {
    document.getElementById("textoDiario").value = "";
    localStorage.removeItem("diario");
}

function exportarTexto() {
    const texto = document.getElementById("textoDiario").value;
    const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "mi_diario.txt";
    enlace.click();
}
