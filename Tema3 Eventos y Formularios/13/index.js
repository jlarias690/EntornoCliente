/*Validar el formulario antes de enviarlo. Para ello se debe comprobar que el nombre, apellidos y edad tienen valor.
La edad además debe ser un número y sus valores deben estar comprendidos entre 0 y 105. También se debe validar
que se ha seleccionado alguna provincia.
Si se cumplen todas las validaciones, debe preguntarse al usuario con un mensaje si deseas enviar el formulario. En
caso afirmativo, se enviará. En caso negativo no hará nada.
Cuando no se cumpla alguna validación debe aparecer el mensaje correspondiente en la etiqueta div
(id=”resultado”) del final en color rojo.*/
var $inputNombre;
var $inputApellidos;
var $inputEdad;
var $inputProvicia;

let inicio = () => {
  document.getElementById("limpiar").addEventListener("click", validar);
  document.getElementById("enviar").addEventListener("click", validar);
};

let validar = (e) => {
  e.preventDefault(); //evita que se autorecargue la pagina tras clickar en el boton submit

  $inputNombre = document.getElementById("nombre").value;
  $inputApellidos = document.getElementById("apellidos").value;
  $inputEdad = document.getElementById("edad").value;
  $inputProvicia = document.getElementById("provincia").value;

  if (
    validarNombre &&
    validarApellido &&
    validarEdad &&
    validarProvincia &&
    confirm("¿Enviar?")
  ) {
    return true;
  } else {
    //Cancelamos el evento de envio por defecto asignado al boton.
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").style.color = "red";
    return false;
  }
};

let validarNombre = () => {
  if ($inputNombre.length == 0) {
    mensaje = "El nombre no puede estar vacio";
  }
};

let validarApellido = (e) => {
  e.preventDefault();
  if ($inputApellidos.length == 0) {
    mensaje = "El apellido no puede estar vacio";
  }
};

let validarEdad = (e) => {
  e.preventDefault();
  if (isNaN($inputEdad)) {
    mensaje = "El apellido no puede estar vacio";
  }
};

let validarProvincia = () => {};
window.addEventListener("DOMContentLoaded", inicio);
