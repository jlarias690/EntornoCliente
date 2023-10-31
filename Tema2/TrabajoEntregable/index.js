posicion1 = 0;
posicion2 = 0;
var $tem;

//correr()->Empatan las dos figuras
let correr = () => {
  imagen1 = document.getElementById("foto1");
  imagen2 = document.getElementById("foto2");

  posicion1 += 1;

  imagen1.style.left = posicion1 + "%";
  imagen2.style.left = posicion1 + "%";
  //Cada vez que llegue al noventa porciento de la pantalla se resetea a la posicion 0.
  if (posicion1 >= 90) {
    posicion1 = 0;
  }
  //document.getElementById("empate").disabled = true; // Belen
  document.getElementById("gana").disabled = true;
};
//correrGanaEl2()-> La segunda figura gana.
let correrGanaEl2 = () => {
  imagen1 = document.getElementById("foto1");
  imagen2 = document.getElementById("foto2");

  posicion1 += 1;
  posicion2 += 2;
  imagen1.style.left = posicion1 + "%";
  imagen2.style.left = posicion2 + "%";

  if (posicion1 >= 90) {
    posicion1 = 0;
  }
  if (posicion2 >= 90) {
    posicion2 = 0;
  }
  document.getElementById("empate").disabled = true;
  //document.getElementById("gana").disabled = true;//Belen
};
// reinicio()-> Reiniciamos las posiciones a 0.
let reinicio = () => {
  posicion1 = 0;
  posicion2 = 0;
  imagen1.style.left = posicion1 + "%";
  imagen2.style.left = posicion2 + "%";

  //Habilitamos los botones que se desactivaron anteriormente,
  document.getElementById("empate").disabled = false;
  document.getElementById("gana").disabled = false;
};
let inicio = () => {
  $tem = window.setInterval(correr, 100);
};
let inicio2 = () => {
  $tem = window.setInterval(correrGanaEl2, 100);
};
let stop = () => {
  clearInterval($tem);
};
/*Muy bien Jose Luis, para que puedas parar y continuar la carrera sin comenzar desde 
principio, el botón empate solo deshabilita el de ganar, y el de ganar solo deshabilita
el de empatar. 
*/
