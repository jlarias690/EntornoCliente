let inicio = () => {
  document.getElementById("btn").addEventListener("click", getResponse);
};

async function getResponse() {
  const response = await fetch("https://randomuser.me/api/");
  json = await response.json();
  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  } else {
    contenedor = document.getElementById("contenedor");
    let resultados = json.results;
    resultados.forEach((resultado) => {
      contenedor.innerHTML =
        "<p>Nombre " +
        resultado.name.first +
        " " +
        resultado.name.last +
        "</p><p>Email: " +
        resultado.email +
        "</p><p>Ciudad: " +
        resultado.location.city +
        "</p><img src='" +
        resultado.picture.large +
        "' alt='Foto persona'>";
    });
  }
}

document.addEventListener("DOMContentLoaded", inicio);
