/* Almacenamo en la variable cadena el valor que extraemos del input
para ello tenemos que usar el VALUE.
*/

var $input;
var $audio;
var inicio = () => {
  $input = document.getElementById("nomApe"); //Ponemos el sinbolo $ para indicar que estamos seleccionando el objeto en este caso seria el input.
  /*Seleccionamos el input con id nomApe y le agregamos el evento correspondiente
  junto con el enlace de la funcion flecha.
  */
  document.getElementById("nomApe").addEventListener("blur", mayuscula);
  $audio = document.getElementById("audio");
  document.getElementById("play").addEventListener("click", play);
  document.getElementById("stop").addEventListener("click", stop);
};

var mayuscula = () => {
  let cadena = $input.value;
  let mayCadena = cadena.toUpperCase();
  $input.value = mayCadena;
  $input.select();
};

var play = () => {
  alert("play");
  alert($audio);
  $audio.play(); // Reproduce el audio.
};
var stop = () => {
  $audio.pause();
  $audio.currentTime = 0;
};
//Para evitar que el archivo js se cargue antes que el html ponemos la siguiente linea de codigo.
window.addEventListener("DOMContentLoaded", inicio);
