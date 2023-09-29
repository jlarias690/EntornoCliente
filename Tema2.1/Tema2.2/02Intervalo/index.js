do {
  var $num = Number(prompt("Escribe un numero entre 0 y 23"));
} while ($num < 0 || $num > 23);

if (isNaN($num)) {
  alert("Debe ser un numero");
} else if ($num >= 6 || $num <= 11) {
  document.write("Buenas días");
} else if ($num >= 12 || $num <= 20) {
  document.write("Buenas tardes");
} else if ($num >= 6 || $num <= 21) {
  document.write("Buenas noches");
}
