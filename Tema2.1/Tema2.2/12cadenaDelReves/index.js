$cadena = prompt(`Escribe una cadena de caracteres`);
$array = $cadena.split("");
for (i = $cadena.length - 1; i >= 0; i--) {
  document.write($array[i]);
}
