//Extraemos las variables.

let fecha = document.getElementById("fecha");
let nombreCompleto = document.getElementById("nombre").value;
nombreCompleto +=
  " " +
  document.getElementById("apellido1") +
  " " +
  document.getElementById("apellido2");
alert(nombreCompleto);

alert("DATOS DE TEXTO CON NAME");
nombreName = document.formulario.nombre.value;
nombreName =
  " " +
  document.formulario.apellido1.value +
  " " +
  document.formulario.apellido2.value;

alert(nombreName);
