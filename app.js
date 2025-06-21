const citaParrafo = document.querySelector(".cita");
const autorParrafo = document.querySelector(".autor");
const btnElemento = document.querySelector(".btn");
let citasCargadas = [];

async function cargarCitas() {
  try {
    const res = await fetch("app.json");
    if (!res.ok) {
      throw new Error(`Error al cargar las citas: ${res.status} ${res.statusText || ''}`);
    }
    const data = await res.json();
    citasCargadas = data;
    console.log("citas cargadas exitosamente", citasCargadas);
    mostrarCita();
  } catch (error) {
    console.error("Erro al cargar las citas", error);
    citaParrafo.innerText = "Error al cargar las citas";
    autorParrafo.innerText = "-Por favor recarga la pagina";
  }
}

const mostrarCita = () => {
  if (citasCargadas.length === 0) {
    citaParrafo.innerText = "Citas no disponibles";
    autorParrafo.innerText = "-Sin autor";
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * citasCargadas.length);
  const citaSeleccionada = citasCargadas[indiceAleatorio];

  citaParrafo.innerText = `"${citaSeleccionada.cita}"`
  autorParrafo.innerText = `- ${citaSeleccionada.autor}`;
};

btnElemento.addEventListener("click", mostrarCita);

cargarCitas();
