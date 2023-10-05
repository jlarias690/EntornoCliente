let $fecha1 = new Date();
let $fecha2 = new Date(2002, 2, 15);
//Imprime las fechas sin formatear.
document.write($fecha1 + "<br>");
document.write($fecha2 + "<br>");

document.write($fecha1.getFullYear() + "<br>"); // nos pilla el año.
document.write($fecha2.getFullYear() + "<br>");

$fecha1.setFullYear(2022); //cambiamos el año
document.write($fecha1.getFullYear() + "<br>");

document.write($fecha1.toLocaleDateString() + "<br>"); // nos formatea la fecha a dd/mm/yyyy
