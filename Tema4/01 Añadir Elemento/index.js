//Creamos un elemento p
let elemento = document.createElement("p");
//Creamos un nodo tipo texto que ira enlazado con el elemento p creado anteriormente.
let nodoTexto = document.createTextNode(
  "Nuevo nodo añadido junto con su elemento"
);
//Enlazamos el nodo texto con el elemento
elemento.appendChild(nodoTexto);
//Por ultimo tenemos que enlazar el elemento creado con el elemtno padre que esta en el HTML  para que se llegue a mostrar
document.getElementById("div1").appendChild(elemento);
