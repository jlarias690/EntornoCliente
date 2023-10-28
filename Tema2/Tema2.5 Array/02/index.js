pal1 = window.prompt("Escribe la palabra 1");
pal2 = window.prompt("Escribe la palabra 2");
pal3 = window.prompt("Escribe la palabra 3");
const a = [pal1, pal2, pal3];

if (pal1 == null) {
  pal1.push(" ");
}
if (pal2 == null) {
  pal2.push(" ");
}
if (pal3 == null) {
  pal3.push(" ");
}

a.forEach((y) => {
  console.log(y);
});
// Se crear el filtro para que solo seleccione la palabra que empiece por la letra C mayuscuala.
const filtro = a.filter((letraC) => letraC.startsWith("C"));
console.log(filtro);
