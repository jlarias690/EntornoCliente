do {
  var $num = prompt("Introduce un numero entero positivo");

  if (isNaN($num)) {
    alert("El valor introducido no es correcto introduce un numero positivo.");
  }
} while (isNaN($num) || $num < 0);
var vari1 = "*";
var vari2 = "";
for ($i = 0; $i < $num; $i++) {
  vari2 = vari2 + vari1;

  document.write(vari2 + "<br>");
}
