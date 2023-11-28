var num = prompt(`1) Potencia
2) Raiz
3) Redondeo`);

if (num == 1) {
  var x = prompt("Escribe un numero");
  var y = prompt("Escribe un exponente");
  document.write(`La pontencia de ${x} elevada a ${y}=`);
  document.write(Math.pow(x, y));
} else if (num == 2) {
  var x = prompt("Escribe un numero");
  if (x >= 0) {
    document.write(`La raiz cuadrada de ${x} es ${Math.sqrt(x)}`);
  }
} else if (num == 3) {
  var x = prompt("Escribe un numero");
  document.write(
    `El redondeado al superior seria = ${Math.round(
      x
    )} y al inferior = ${Math.floor(x)} `
  );
}
