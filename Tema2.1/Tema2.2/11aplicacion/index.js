//var $nombre = prompt("Escribe el nombre");
//var $apellido = prompt("Escribe tu apellido.");
let $salario = Number(prompt("Salario"));
var $edad = Number(prompt("¿EDAD?"));
var $salarioDecimales = Number($salario.toFixed(2));
var $total = 0;
//document.write('Salario normal '+$salarioDecimales);

if ($salarioDecimales >= 1000 || ($salarioDecimales <= 2000 && $edad >= 45)) {
  let $subidaPorcentual = $salarioDecimales * 0.03;
  $total = $salarioDecimales + $subidaPorcentual;
  document.write(`Salario con la subida: ${$total.toFixed(2)}`);
} else if (
  $salarioDecimales >= 1000 ||
  ($salarioDecimales <= 2000 && $edad < 45)
) {
  let $subidaPorcentual = $salarioDecimales * 0.1;
  $total = $salarioDecimales + $subidaPorcentual;
  document.write(`Salario con la subida: ${$total.toFixed(2)}`);
}

if ($salarioDecimales < 1000) {
  if ($edad < 30) {
    $total = 1100;
    document.write(
      "El salario es menor a 1000 y tiene menos de 30 años: " + $total + "<br>"
    );
  } else if ($edad >= 30 || $edad < 45) {
    let $subidaPorcentual = $salarioDecimales * 0.03;
    $total = $salarioDecimales + $subidaPorcentual;
    document.write(`Salario con la subida: ${$total.toFixed(2)}`);
  } else if ($edad > 45) {
    let $subidaPorcentual = $salarioDecimales * 0.15;
    $total = $salarioDecimales + $subidaPorcentual;
    document.write(`Salario con la subida: ${$total.toFixed(2)}`);
  }
}
