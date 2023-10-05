const nombreInput = document.getElementById("nombre");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const agregarButton = document.getElementById("agregar");
const citasContainer = document.getElementById("citas");

agregarButton.addEventListener("click", () => {
    const nombre = nombreInput.value;
    const fecha = fechaInput.value;
    const hora = horaInput.value;


    if (nombre && fecha) {
        const citaCard = document.createElement("div");
        citaCard.classList.add("cita-card");
        citaCard.innerText = `<h2>${nombre}</h2> <p>Fecha: ${fecha}</p> <p2>Hora: ${hora}</p2>`;
        citasContainer.appendChild(citaCard);

        nombreInput.value = "";
        fechaInput.value = "";
        horaInput.value = "";

    } else {
        alert("Por favor, complete todos los campos.");
    }
});
