let palabra = prompt("Introduce una palabra");
if (palabra != null) {
  if (!palabra) {
    document.write("Cadena vacia");
  } else {
    document.write(`Palabra introducida: ${palabra} <br>`);
    const arr = palabra.split("");
    palIvertido = arr.reverse();
    palIvertido = palIvertido.join("");
    document.write(`Palabra invertida: ${palIvertido}`);
  }
}
