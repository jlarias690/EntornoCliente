let inicio = (e) => {
  e.preventDefault();
  document.getElementById("b1").addEventListener("click", validar);
};
var $usuario;
var $clave;
var $cpostal;
var $provincia;
var $mensaje = [];
let validar = (e) => {
  e.preventDefault();
  $usuario = document.getElementById("usuario").value;
  $clave = document.getElementById("clave").value;
  $cpostal = document.getElementById("cpostal").value;
  const formulario = document.getElementById("formularioLogin");
  $provincia = formulario.elements.provincia.value;
  if (vUsuario && vClave && vCpostal && vProvincia && confirm("¿Enviar?")) {
    vUsuario();
    vProvincia();
    vCpostal();
    vClave();
  }
};
let vUsuario = () => {
  if ($usuario.length == 0) {
    $mensaje = "El usuario no puede estar vacio";
    alert("El usuario no puede estar vacio");
  }
};
let vProvincia = () => {
  if ($provincia == 0) {
    $mensaje = "El usuario no puede estar vacio";
    alert("Provicia vacio");
  }
};
let vCpostal = () => {
  if ($cpostal.length == 0) {
    $mensaje = "El usuario no puede estar vacio o ser menor a 5 digitos";
    alert("Postal vacio");
  } else if ($cpostal.length < 5) {
    alert("Postal menor a 5 digitos.");
  }
  if ($cpostal.substring(0, 2) !== $provincia) {
    //tiene que ir por dom
    document.getElementById("mensajeError").textContent =
      "Los dos primeros dígitos del código postal deben coincidir con la provincia seleccionada.";
  }
};
let vClave = () => {
  if ($clave.length == 0) {
    $mensaje = "El usuario no puede estar vacio";
    alert("Clave vacio");
  }
};

window.addEventListener("DOMContentLoaded", inicio);
