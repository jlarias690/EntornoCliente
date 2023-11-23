let inicio = () => {
  var ingredientes = document.getElementById("ingredientes");
  var pasos = document.getElementById("pasos");
  var horno = document.getElementById("horno");
  var resultadoDiv = document.getElementById("resultadoDiv");
  document
    .getElementById("ingredientes")
    .addEventListener("click", mIngredientes);
  document.getElementById("pasos").addEventListener("click", mPasos);
  document.getElementById("horno").addEventListener("click", mHorno);
};

let receta = {
  nombre: "Tarta",
  ingredientes: ["manzana", "azucar", "harina"],
  pasos: ["Pelar y cortar", "Mezclar", "Preparar la masa"],
};

let mIngredientes = (e) => {
  e.preventDefault();
  let elemento = document.createElement("tr");
  let elementotd = document.createElement("td");
  elemento.appendChild(elementotd);
  nodo = document.createTextNode(receta.ingredientes);
  elementotd.appendChild(nodo);

  document.getElementById("resultadoDiv").appendChild(elemento);
};

let mPasos = (e) => {
  e.preventDefault();
  let elemento = document.createElement("tr");
  nodo = document.createTextNode(receta.pasos);
  elemento.appendChild(nodo);

  document.getElementById("resultadoDiv").appendChild(elemento);
};
let detener = () => {
  clearInterval($tem);
};

let crom = () => {
  x = 10;
  document.write(x);
  x += --x;
};
let sonido = () => {
  $audio = document.getElementById("myAudio");
  $audio.play();
};

let mHorno = (e) => {
  e.preventDefault();
  window.setTimeout(detener, 10000);
  var $tem = window.setInterval(crom, 1000);
  window.setTimeout(sonido, 5000);

  document.getElementById("resultadoDiv").appendChild(elemento);
};
window.addEventListener("DOMContentLoaded", inicio);
