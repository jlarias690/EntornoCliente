let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();
alert(añoActual);
let mes = prompt("Mes de tu cumpleaño");
let dia = prompt("Dia de tu cumpleaño");

for (i = Number(añoActual); añoActual < 2100; i++) {
  const fechaCumple = new Date(i, mes - 1, dia);
  if (fechaCumple.getDay() == 0) {
    console.log(i);
  }
}
