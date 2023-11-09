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
  var nom = false;
  var ape = false;
  if (
    cadenaNom.startsWith("A") ||
    cadenaNom.startsWith("E") ||
    cadenaNom.startsWith("I") ||
    cadenaNom.startsWith("O") ||
    cadenaNom.startsWith("U")
  ) {
    var nom = true;
    $error.push("El nombre no puede empezar por una vocal.");
  } else if (cadenaNom.empy)
    if (cadenaApe.split(" ").length >= 3) {
      var ape = true;
      $error.push("El apellido no puede tener mas de dos palabras");
    }

  if (nom == true && ape == true) {
    abrirCeu();
  }
  if ($error.length > 0) {
    //emprimimos el array en los div a traves de los id que tienen.
    document.getElementById("nom").innerHTML = $error[0];
    document.getElementById("nom").style.color = "red";
    document.getElementById("ape").innerHTML = $error[1];
    document.getElementById("ape").style.color = "red";
  }
};
function abrirCeu() {
  let nuevaVentana = (window.location.href = "https://ceu.es.");
}

window.addEventListener("DOMContentLoaded", inicio);
