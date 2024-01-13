async function getResponse() {
  const response = await fetch("https://yesno.wtf/api");
  const json = await response.json();
  const divhtml = document.getElementById("tab");
  json.forEach((element) => {
    const fila = divhtml.insertRow();
    const celda1 = fila.insertCell(0);
    const celda2 = fila.insertCell(1);
    celda1.textContent = element.title;
    celda2.textContent = element.body;
  });
  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  }
}

const inicio = () => {
  document.getElementById("btd").addEventListener("click", getResponse);
};

document.addEventListener("DOMContentLoaded", inicio);
