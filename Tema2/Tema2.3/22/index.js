//22. Crear una página ‘window.html’ que contenga un título y un botón ‘Abrir Página’, de forma que al pulsarlo
//se abra otra ventana: ‘datos.html’. Esta segunda pantalla tendrá 3 cuadros de texto donde el usuario tendrá
//que introducir su nombre y sus apellidos y un cuadro de tipo fecha (type=”date”) dónde seleccionará la
//fecha de nacimiento. Tendrá un botón ‘Mostrar’, para que muestre en la página principal los datos del
//usuario junto con su fecha de nacimiento en formato dd/mm/yyyy. Y deberá mostrar los años bisiestos que
//ha habido desde que nació.
function abrirVentana() {
  var $nuevaVentana = window.open(
    "datos.html",
    "ventana",
    "toolbar=no,location=no,menubar=no,width=1000,height=1000,resizable= yes,scrollbars= yes,top= 300,left = 300"
  );
}
function mostrar() {
  window.location.href = "index.html";
  document.write.name(fname);
}
