var numero = Number(prompt("Introduce un número:"));
document.write("Los 50 números impares a partir de " + numero + " son:<br>");

for (var i = numero; i < numero + 100; i++) {
  if (i % 2 !== 0) {
    document.write(i + "<br>");
  }
}
