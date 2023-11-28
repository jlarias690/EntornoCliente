dia = prompt("Dia de nacimiento");
mes = prompt("Mes de nacimiento");
año = prompt("Año de nacimiento");
milisegundosAno = 31536000000;
let fechaActual = new Date();
let fechaNacimiento = new Date(año, mes, dia);
let milisegundos = fechaActual - fechaNacimiento;
let anoActuales = milisegundos / milisegundosAno;
console.log(Math.floor(anoActuales));
