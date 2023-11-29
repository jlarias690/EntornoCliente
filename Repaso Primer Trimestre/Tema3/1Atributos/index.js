// Recuperar los nombres de los elementos del formulario y mostrarlos con alert
const formulario = document.getElementById("formulario");
const elementos = formulario.elements;
let nombres = "";
for (let i = 0; i < elementos.length; i++) {
  nombres += elementos[i].name + "\n";
}
alert("Nombres de los elementos del formulario:\n" + nombres);

// Mostrar solo los inputs de tipo texto con alert
let inputsTexto = "";
for (let i = 0; i < elementos.length; i++) {
  if (elementos[i].type === "text") {
    inputsTexto += elementos[i].name + "\n";
  }
}
alert("Inputs de tipo texto:\n" + inputsTexto);
