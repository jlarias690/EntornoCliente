posicion = 0;
avance = 5;
var $tem;

let correr = () => {
  imagen1 = document.getElementById("foto1");
  imagen2 = document.getElementById("foto2");

  posicion += 3;

  imagen1.style.left = posicion + "%";
  imagen2.style.left = posicion + "%";
  if (posicion >= 90) {
    posicion = 0;
  }
};

let inicio = () => {
  $tem = window.setInterval(correr, 100);
};
let stop = () => {
  clearInterval($tem);
};

/*
var imagen = document.getElementById("foto1");

var posicion = 0;

function inicio() {
  alert(imagen.style.left);
  imagen.style.left = "300px";
 
  posicion += 10;
  image.style.left = posicion + "px";
}
*/
