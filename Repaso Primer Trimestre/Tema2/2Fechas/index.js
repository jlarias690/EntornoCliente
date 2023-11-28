let fecha = new Date();
let fechaFin = new Date(2024, 6, 30);
let milisegundosDia = 86400000; //milisegundos en un dia.
let milisec = fechaFin - fecha; //Al restar fecha nos lo devuelve en milisegundos.
let dia = milisec / milisegundosDia;
console.log(Math.round(dia));
