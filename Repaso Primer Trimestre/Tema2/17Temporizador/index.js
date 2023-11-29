let inicio = () => {
  document.getElementById("laMancha").addEventListener("click", mancha);
  document.getElementById("parar").addEventListener("click", para);
  document.getElementById("3Segundos").addEventListener("click", segundos);
  document.getElementById("abrir").addEventListener("click", abrir);
};

var $temporizador;
var $nuevaVentana;
let abrir = () => {
  $nuevaVentana = window.open(
    "",
    "ventana",
    "toolbar=no,location=no,menubar=no,width=300,height=300,resizable= yes,scrollbars= yes,top= 300,left = 300"
  );
};

let segundos = () => {
  let impreso = () => {
    console.log("Han pasado 3 segundos.");
  };
  setTimeout(impreso, 3000);
};

let mancha = () => {
  let empri = () => {
    console.log("En un lugar de la Mancha");
  };
  $temporizador = window.setInterval(empri, 2000);
};

let para = () => {
  clearInterval($temporizador);
};
window.addEventListener("DOMContentLoaded", inicio);
