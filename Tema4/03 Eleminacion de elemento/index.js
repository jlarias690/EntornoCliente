//Creamos un elemento p
let elemento = document.createElement("p");
//Creamos un nodo tipo texto que ira enlazado con el elemento p creado anteriormente.
let nodoTexto = document.createTextNode(
  "Nuevo nodo añadido antes que el primero existente"
);
//Enlazamos el nodo texto con el elemento
elemento.appendChild(nodoTexto);
//Por ultimo tenemos enlamos he insertamos el elemento creado antes que el creado con anterioridad
document
  .getElementById("div1")
  .insertBefore(elemento, document.getElementById("p1"));
