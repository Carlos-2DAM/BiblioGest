const modal = document.getElementById("modal-proximas-devoluciones");
const filas = document.querySelectorAll("#proximas-devoluciones tbody tr");
const botonCerrar = document.getElementById("cerrar-modal");

filas.forEach(function (fila) {
    const botonVer = fila.querySelector(".btn-ver");
    if (!botonVer) return;

    botonVer.addEventListener("click", function () {
        const celdas = fila.querySelectorAll("td");

        document.getElementById("modal-socio").textContent = celdas[0].textContent;
        document.getElementById("modal-libro").textContent = celdas[1].textContent;
        document.getElementById("modal-hora-limite").textContent = celdas[2].textContent;
        document.getElementById("modal-estado").textContent = celdas[3].textContent;

        if (modal) {
            modal.classList.add("abierto");
        }
    });
});

if (botonCerrar && modal) {
    botonCerrar.addEventListener("click", function () {
        modal.classList.remove("abierto");
    });
}