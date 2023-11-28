let fecha = new Date();
let dia1 = fecha.getDay();
let mes1 = fecha.getMonth();
let año1 = fecha.getFullYear();
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
console.log(`${dia1}/${mes1}/${año1}`);
console.log(fecha.toString());
console.log(`${dia1}/${mes1}/${año1}
${horas}:${minutos}:${segundos} `);
console.log(`${horas}:${minutos}:${segundos}`);
