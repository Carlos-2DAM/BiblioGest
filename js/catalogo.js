const modal = document.getElementById("modal-libro");
const filas = document.querySelectorAll("tbody tr");
const botonCerrar = document.getElementById("cerrar-modal");

filas.forEach(function (fila) {
    
    const botonVer = fila.querySelector(".btn-ver");
    botonVer.addEventListener("click", function () {

        const celdas = fila.querySelectorAll("td");

        document.getElementById("modal-isbn").textContent = celdas[0].textContent;
        document.getElementById("modal-titulo").textContent = celdas[1].textContent;
        document.getElementById("modal-autor").textContent = celdas[2].textContent;
        document.getElementById("modal-categoria").textContent = celdas[3].textContent;
        document.getElementById("modal-estado").textContent = celdas[4].textContent;
        
        modal.showModal();
    });
});

botonCerrar.addEventListener("click", function () {
    modal.close();
});