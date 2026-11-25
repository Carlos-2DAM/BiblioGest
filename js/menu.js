const enlacesMenu = document.querySelectorAll("nav a");
const vistas = document.querySelectorAll(".vista");

function cambiarVista(evento) {
    const enlacePulsado = evento.currentTarget;
    const destino = enlacePulsado.getAttribute("href");

    let vistaElegida;
    for (const vista of vistas) {
        if (`#${vista.id}` === destino) {
            vistaElegida = vista;
            break;
        }
    }

    if (!vistaElegida) {
        return;
    }

    evento.preventDefault();

    for (const vista of vistas) {
        vista.hidden = vista !== vistaElegida;
    }

    for (const enlace of enlacesMenu) {
        enlace.classList.remove("enlace-activo");
    }

    enlacePulsado.classList.add("enlace-activo");
}

for (const enlace of enlacesMenu) {
    enlace.addEventListener("click", cambiarVista);
}

/*
const enlacesMenu = document.querySelectorAll('');
const vistas = document.querySelectorAll("");

function cambiarVista(evento) {

    const enlacePulsado = evento.currentTarget;
    const destino = enlacePulsado.getAttribute("href");

    let vistaElegida;
    for (const vista of vistas) {
        if(`#${vista.id}` === destino){
            vistaElegida = vista;
            break;
        }
    }

    if (!vistaElegida) {
        return;
    }

    evento.preventDefault();

    for (const vista of vistas) {
        vista.hidden = vista !== vistaElegida;
    }

    for (const enlace of enlacesMenu) {
        enlace.classList.remove("enlace-activo");
    }

    enlacePulsado.classList.add("enlace-activo");

}

for (const enlace of enlacesMenu) {
    enlace.addEventListener("click", cambiarVista);
}
*/