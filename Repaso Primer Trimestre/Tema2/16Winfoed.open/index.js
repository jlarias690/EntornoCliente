let inicio = () => {
  document.getElementById("boton1").addEventListener("click", abrir);
  document.getElementById("boton2").addEventListener("click", cerrar);
  document.getElementById("boton3").addEventListener("click", mover1);
  document.getElementById("boton4").addEventListener("click", mover2);
  document.getElementById("boton5").addEventListener("click", aumento);
};

var segundaHTML;
let abrir = () => {
  segundaHTML = window.open(
    "segunda.html",
    "nuevaVentana",
    'toolbar=no,location=no,menubar=no,width=300,height=400,resizable= yes,scrollbars= yes,top= 400,left = 400"'
  );
};

let cerrar = () => {
  segundaHTML.close();
};

//No funciona los botones de moviemientos
let mover1 = () => {
  segundaHTML.moveBy(200, 100);
  segundaHTML.focus();
};
let mover2 = () => {
  segundaHTML.moveTo(500, 200);
  segundaHTML.focus();
};
let aumento = () => {
  segundaHTML.focus();
  segundaHTML.resizeBy(200, 100);
};

window.addEventListener("DOMContentLoaded", inicio);
