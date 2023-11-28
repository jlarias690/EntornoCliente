let inicio = () => {
  document
    .getElementById("ingredientes")
    .addEventListener("click", mostrarIngre);
  document.getElementById("pasos").addEventListener("click", mostrarPasos);
};

let receta = {
  nombre: "Tarta",
  ingredientes: ["manzana", "azucar", "harina"],
  pasos: ["Pelar y cortar", "Mezclar", "Preparar la masa"],
};
//Hacer una lista con uno de los elementos de un objeto literal.
let mostrarIngre = (e) => {
  e.preventDefault();
  var miDiv = document.getElementById("resultadoDiv");
  miDiv.innerHTML = "<h3>Ingredientes:</h3>";
  var ul = document.createElement("ul");
  var ingre = receta.ingredientes;
  for (i = 0; i < ingre.length; i++) {
    var li = document.createElement("li");
    li.textContent = ingre[i];
    ul.appendChild(li);
  }
  miDiv.appendChild(ul);
};
let mostrarPasos = (e) => {
  e.preventDefault();
  var miDiv = document.getElementById("resultadoDiv");
  miDiv.innerHTML = "<h3>Pasos:</h3>";
  var table = document.createElement("table");
  table.setAttribute("id", "TablaIngredientes");
  var recePasos = receta.pasos;
  for (i = 0; i < recePasos.length; i++) {
    var fila = document.createElement("tr");
    var colum = document.createElement("td");
    colum.textContent = recePasos[i];
    colum.style.border = "solid 1px";
    fila.appendChild(colum);
    fila.style.color = "green";

    var col2 = document.createElement("td");
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.addEventListener("click", cambiar);
    check.setAttribute("id", index);
    col2.appendChild(check);
    col2.style.border = "solid 1px";

    fila.appendChild(col2);
    table.appendChild(fila);

    if (index == 0) {
      check.disabled = false;
    } else {
      check.disabled = true;
    }
  }
};
let cambiar = (e) => {
  e.target.disabled = true;
  if (e.target.parentNode.parentNode.nextElementSibling == null) {
    alert("Solo falta el horno");
  } else {
    e.target.parentNode.parentNode.nextElementSibling.children[1].children[0].disabled = false;
  }
};
var tiempoRestante;

tiempo = () => {
  tiempoRestante = 10;
  temporizadorInterval = setInterval(function () {
    tiempoRestante--;
    actualizarTemporizador();
    if (tiempoRestante == 5) {
      audio = document.getElementById("myAudio");
      audio.play();
    }
    if (tiempoRestante <= 0) {
      audio.pause();
      audio.currentTime = 0;
      clearInterval(temporizadorInterval);
      alert("Saca la tarta del horno");
    }
  }, 1000);
};

function actualizarTemporizador() {
  document.getElementById("resultadoDiv").textContent =
    "Timepo restante" + tiempoRestante + "segundos";
}
window.addEventListener("DOMContentLoaded", inicio);
