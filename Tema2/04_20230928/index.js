var $txt = "Hola Mundo";
$posicion = $txt.indexOf("Mundo");
//1
console.log($posicion);
//2
console.log($txt.replace("Mundo", "Universo"));

if ($txt.includes("Mundo")) {
  $txt = $txt.substring(0, $posicion);
  let $word = "Universo";
  var $palabraCom = $txt + $word;
  console.log($palabraCom);
}
//3-4
console.log($palabraCom.toUpperCase());
console.log($palabraCom.toLowerCase());
//5
let $nombre = "Jose Luis";
let $apellido = "Arias Parrado";
let $nombreCompleto = $nombre + " " + $apellido;
console.log($nombreCompleto);
//6
let $paCliente = "Cliente";
let $cli = $paCliente.substring(0, 3);
console.log($cli);

$cli = $paCliente.substring(3);
console.log($cli);
