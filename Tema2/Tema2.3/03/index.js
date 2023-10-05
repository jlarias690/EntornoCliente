var $dia = prompt("Dia de tu cumpleaño.");
var $mes = prompt("Pon tu mes de cumpleaños.");
var $anyo = new Date().getFullYear();

//getDay(0) el cero representa el Domingo
//Crear un programa que pida al usuario dos números: el día y el mes de tu cumpleaños, y saque todos los
//años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100

for ($i = $anyo; $i <= 2100; $i++) {
  var $fecha = new Date($i, $mes - 1, $dia);
  if ($fecha.getDate() == 0) {
    console.log($dia + "/" + $mes + "/" + $i);
  }
}
