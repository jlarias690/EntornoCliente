let inicio = () => {
  document.getElementById("detener").addEventListener("click", detener);
};

let cambioColor = () => {
  console.log("hola");
  fondo = window.document.body.style.backgroundColor;
  if (fondo == "orange") {
    window.document.body.style.backgroundColor = "blue";
  } else {
    window.document.body.style.backgroundColor = "orange";
  }
};

let detener = () => {
  clearInterval(temp);
};
var temp = setInterval(cambioColor, 1000);
window.addEventListener("DOMContentLoaded", inicio);
