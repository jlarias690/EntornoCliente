do {
  var $num = prompt("Introduce un numero entero positivo");

  if (isNaN($num)) {
    alert("El valor introducido no es correcto introduce un numero positivo.");
  }
} while (isNaN($num) || $num < 0);
var vari1 = $num;
var vari2 = 1;
for ($i = 0; $i < $num; $i++) {
  document.write(vari2 + "<br>");
  vari2 = vari2 + vari1;
  vari1--;
}
for ($j = 0; $num > $i; $i++) {
  document.write($j);
}
