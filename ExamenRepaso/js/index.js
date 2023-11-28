let inicio = () => {
  document.getElementById("b1").addEventListener("click", validar);
};
var $usuario;
var $clave;
var $cpostal;
var $provincia;
var $mensaje = [];
var contenido = "";
let vUsuario = () => {
  if ($usuario.length == 0) {
    $mensaje.push("El usuario no puede estar vacio");
    //alert("El usuario no puede estar vacio");
  }
};
let vProvincia = () => {
  if ($provincia == 0) {
    $mensaje.push("El usuario no puede estar vacio");
    //alert("Provicia vacio");
  }
};
let vCpostal = () => {
  if ($cpostal.length == 0) {
    $mensaje.push("El usuario no puede estar vacio o ser menor a 5 digitos");
  } else if (isNaN($cpostal)) {
    $mensaje.push("El codigo postal tiene que un numero.");
  } else if ($cpostal.length < 5) {
    $mensaje.push("Postal menor a 5 digitos.");
  }
  if ($cpostal.substring(0, 2) !== $provincia) {
    $mensaje.push(
      "Los dos primeros dígitos del código postal deben coincidir con la provincia seleccionada."
    );
  }
};

let vClave = () => {
  if ($clave.length == 0) {
    $mensaje.push("La clave no puede estar vacio");
    $bol = true;
  } else if ($clave.length < 8 || isNaN(parseInt($clave.slice(-1)))) {
    $mensaje.push(
      "La clave no puede tener menos de 8 caracteres y el ultimo caracter tiene que ser un numero."
    );
  }
};

let cElementoHtml = () => {
  var div = document.getElementById("mensajeError");

  for (let i = 0; i < $mensaje.length; i++) {
    contenido += "<p>" + $mensaje[i] + "</p>";
  }
  div.innerHTML = contenido;

  if ($mensaje.length === 0) {
    div.innerHTML = " ";
    window.location.href = "formulario.html";
  }
};

let redireccion = () => {
  if (!$mensaje) {
    window.location.href = "formulario.html";
  }
};

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
    cElementoHtml();
  }
};
window.addEventListener("DOMContentLoaded", inicio);
