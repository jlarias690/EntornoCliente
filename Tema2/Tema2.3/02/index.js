let $fechaActual = new Date();
let $finCurso = new Date(2024, 5, 30);
let $fechaActualMilesegundos = $fechaActual.getTime();
let $finCursoMilesegundos = $finCurso.getTime();

console.log($finCursoMilesegundos);
console.log($fechaActualMilesegundos);

let $milesegundoTotal = $finCursoMilesegundos - $fechaActualMilesegundos;
let $totalDia = $milesegundoTotal / 86400000;
console.log(Number($totalDia.toFixed(0)));
