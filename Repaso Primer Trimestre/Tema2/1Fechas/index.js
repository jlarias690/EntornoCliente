let fecha = new Date();
let dia = fecha.getDay();
let mes = fecha.getMonth();
let añoMilisegundos = fecha.setFullYear(2022); //Cambiamos el año.
let año = fecha.getFullYear();
console.log(`La fecha actual es: ${dia}:${mes}:${año}`);

let fechaCumpleaños = new Date(2002, 3, 15);
let diaCum = fechaCumpleaños.getDay();
let mesCum = fechaCumpleaños.getMonth();
let añoCum = fechaCumpleaños.getFullYear();
console.log(`La fecha de mi cumpleaños es: ${diaCum}:${mesCum}:${añoCum}`);
