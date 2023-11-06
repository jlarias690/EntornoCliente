var $inputNom;
var $inputApe;
var $error = []; //Declaramos el array vacio.
let inicio = () => {
  $inputNom = document.getElementById("nombre");
  $inputApe = document.getElementById("apellido");
  document.getElementById("validar").addEventListener("click", validar);
};
$error = [];
let validar = () => {
  cadenaNom = $inputNom.value.toUpperCase();
  cadenaApe = $inputApe.value.toUpperCase();
  if (
    cadenaNom.startsWith("A") ||
    cadenaNom.startsWith("E") ||
    cadenaNom.startsWith("I") ||
    cadenaNom.startsWith("O") ||
    cadenaNom.startsWith("U")
  ) {
    alert("0");
    $error.push("El nombre no empieza por una vocal.");
  }

  if (cadenaApe.split(" ").length >= 3) {
    alert("1");
    $error.push("El apellido no puede tener mas de dos palabras");
  }
  //emprimimos el array en los div a traves de los id que tienen.
  document.getElementById("nom").innerHTML = $error[0];
  document.getElementById("nom").style.color = "red";
  document.getElementById("ape").innerHTML = $error[1];
  document.getElementById("ape").style.color = "red";
};

window.addEventListener("DOMContentLoaded", inicio);
