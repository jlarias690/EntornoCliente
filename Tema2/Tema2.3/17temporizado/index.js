//Imprimir el mensaje cada dos segundo y deternerlo cuando hagas click en el boton detener
var $tem = window.setInterval(mancha, 2000);
function detener() {
  clearInterval($tem);
}

function mancha() {
  let $mensaje = "";
  if ($mensaje == "") {
    console.log("En un lugar de la Mancha");
  } else {
    $mensaje = "";
  }
}

//Imprime un solo mensaje cuando llama a la funcion con el boton.
function impreso() {
  window.setTimeout(impresoFX, 3000);
}
function impresoFX() {
  console.log("Han pasado 3 segundos");
}

//Usar otro botón para abrir una ventana nueva de 300x300 y escribir un texto con <p> en su interior
//desde js. Esta ventana nueva debe mostrar la hora actual en formato HH:MM:SS. Se tiene que
//actualizar continuamente como un reloj.
//Parar el reloj a los 5 segundos.
//Cerrarla tras 10 segundos.

var $nuevaVentana;
var $tempo1 = window.setInterval(tiempo, 1000);
//var $tempo2 = window.setInterval(, 10000);

function abrirVentana() {
  $nuevaVentana = window.open(
    "",
    "ventana",
    "toolbar=no,location=no,menubar=no,width=200,height=80,resizable= yes,scrollbars= yes,top= 300,left = 300"
  );

  tiempo();
}

function tiempo() {
  let $fecha = new Date();
  let $horas = $fecha.getHours();
  let $minutos = $fecha.getMinutes();
  let $segundos = $fecha.getSeconds();
  $nuevaVentana.document.write(
    "<p>" + $horas + "/" + $minutos + "/" + $segundos + "</p>"
  );
  setTimeout(detenerReloj, 5000);
  setTimeout(cerrarVentana, 10000);
}

function cerrarVentana() {
  $nuevaVentana.window.close();
}

function detenerReloj() {
  clearInterval($tempo1);
}
