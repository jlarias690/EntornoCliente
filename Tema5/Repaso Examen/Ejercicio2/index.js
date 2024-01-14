let inicio = () => {
  document.getElementById("btn").addEventListener("click", getResponse);
};

async function getResponse() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  json = await response.json();
  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  } else {
    json.forEach((element) => {
      const cuerpo = document.getElementsByTagName("body")[0];
      tabla = document.createElement("table");
      const fila = tabla.insertRow();
      const celda1 = fila.insertCell(0);
      const celda2 = fila.insertCell(1);

      cuerpo.appendChild(tabla);
      celda1.textContent = element.title;
      celda2.textContent = element.body;
    });
  }
}

document.addEventListener("DOMContentLoaded", inicio);
