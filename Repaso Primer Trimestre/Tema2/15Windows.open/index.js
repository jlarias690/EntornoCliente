let nuevaVentana = window.open(
  "",
  "NuevaVentana",
  'toolbar=no,location=no,menubar=no,width=200,height=80,resizable= yes,scrollbars= yes,top= 500,left = 500"'
);
nuevaVentana.document.write("Como hago lo del foco");
nuevaVentana.focus();
