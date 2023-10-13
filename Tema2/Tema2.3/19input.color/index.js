function abrirVentana() {
  var nuevaVentana = window.open(
    "selector.html",

    "nuevaVentana",

    "toolbar=no,location=no,menubar=no,width=200,height=80,resizable= yes,scrollbars= yes,top= 500,left = 500"
  );
}

function cambiarColor() {
  color = formulario.color.value;

  window.opener.document.body.style.background = color;

  window.close();
}
// nuevaVentana.document.write("<H1>Elige color</H1>");
