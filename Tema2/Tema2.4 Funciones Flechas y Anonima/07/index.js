let nuevaVentana = window.open(
  "",
  "nuevaVentana",
  "toolbar=no,location=no,menubar=no,width=700,height=300,resizable= yes,scrollbars= yes,top= 500,left = 500"
);

var num = 0;

do {
  var num = nuevaVentana.prompt("Introduce un numero entre el 1 y el 20");
} while (num <= 1 || num >= 20);

nuevaVentana.close();

let printar = () => {
  for (i = 1; i <= num; i++) {
    document.write(`<li>${i}</li>`);
  }
};
printar();
