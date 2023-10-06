//18. Crear una pagina y que cada segundo cambie de color el fondo: naranja / azul hasta
var $tem = window.setInterval(color, 1000);
function color() {
  let fondo = document.body.style.backgroundColor;
  if (fondo == "orange") {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "orange";
  }
}

function detener() {
  clearInterval($tem);
}
