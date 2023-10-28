var findesemana = () => {
  let nuevaVentana = window.open(
    "",
    "nuevaVentana",
    "toolbar=no,location=no,menubar=no,width=400,height=400,resizable= yes,scrollbars= yes,top= 500,left = 500"
  );
  var fecha = new Date();
  var dia = fecha.getDay();
  if (dia == 0 || dia == 6) {
    nuevaVentana.document.write("<p><img src='./img/feliz.jpg'></p>");
  } else {
    nuevaVentana.document.write("<p><img src='./img/CaraTriste.png'></p>");
  }
};
