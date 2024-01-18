let contenido;

let inicio = () => {
  document.getElementById("b1").addEventListener("click", crearDivResultado);
  contenido = document.getElementById("charactersContainer");
  mostrarResultados();
};

async function mostrarResultados() {
  try {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character/");

    if (!respuesta.ok) {
      console.error(
        `Error en la solicitud: ${respuesta.status}, ${respuesta.statusText}`
      );
      return;
    }

    const json = await respuesta.json();
    let resultados = json.results;

    resultados.forEach((element, index) => {
      let divResultado = crearDivResultado(element, index);

      contenido.appendChild(divResultado);
    });
  } catch (error) {
    console.error("Error en la operación asíncrona:", error);
  }
}

function crearDivResultado(element, index) {
  let divResultado = document.createElement("div");
  divResultado.id = index;
  console.log(element.image);
  console.log(element.id);

  divResultado.innerHTML = `<img src= ${element.image} > <p>id: ${element.id} </p> <p>Nombre ${element.name}</p><p>Estado:${element.status}
  <p>Especie: ${element.species}<p>Total Episodio: ${element.episode.length} </p>`;

  console.log(divResultado.innerHTML);
  let espacio = document.createElement("br");
  divResultado.appendChild(espacio);
  return divResultado;
}

window.addEventListener("DOMContentLoaded", inicio);
