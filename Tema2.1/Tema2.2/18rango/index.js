var $num1 = Number(prompt("Escribe el primer del rango "));
var $num2 = Number(prompt("Escribe el segundo del rango "));
var $i = $num1 + 1;
for (; $i <= $num2 - 1; $i++) {
  document.write(` ${$i} <br>`);
}
