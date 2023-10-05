const nombreInput = document.getElementById("nombre");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const agregarButton = document.getElementById("agregar");
const citasContainer = document.getElementById("citas");

agregarButton.addEventListener("click", () => {
    const nombre = nombreInput.value;
    const fecha = fechaInput.value;
    const hora = horaInput.value;


    if (nombre && fecha && hora) {
        const citaCard = document.createElement("div");
        citaCard.classList.add("cita-card");
        citaCard.innerHTML = `<h2>Cita de ${nombre}</h2> <p>Fecha: ${fecha}</p> <p2>Hora: ${hora}</p2>`;
        citasContainer.appendChild(citaCard);

        nombreInput.value = "";
        fechaInput.value = "";
        horaInput.value = "";

    } else {
        alert("Por favor, complete todos los campos.");
    }
});

const $tiempo=document.querySelector('.tiempo'),
$fecha= document.querySelector('.fecha');

function Relojdigital(){
    let f=new Date(),
    dia= f.getDate(),
    mes= f.getMonth()+1,
    anio= f.getFullYear(),
    diaSemana=f.getDay();

    dia= ('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2)

    let timeString= f.toLocaleTimeString();
    $tiempo.innerHTML=timeString;

    let semana=['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
    let showSemana= (semana[diaSemana])
    $fecha.innerHTML = `${showSemana} ${dia}-${mes}-${anio}`
}
setInterval(() =>{
    Relojdigital()
},1000);
