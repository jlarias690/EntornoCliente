let elementoHijo1 = document.createElement("p");
let nodoTexto1 = document.createTextNode("Lorem ipsum dolor sit amet co");
elementoHijo1.appendChild(nodoTexto1);

let elementoHijo2 = document.createElement("p");
let nodoTexto2 = document.createTextNode("Lorem ipsum dolor sit amet co");
elementoHijo2.appendChild(nodoTexto2);

let elementoHijo3 = document.createElement("p");
let nodoTexto3 = document.createTextNode("Lorem ipsum dolor sit amet co");
elementoHijo3.appendChild(nodoTexto3);

//Preguntar a Belen
let tab = document.createElement("br");

document.getElementsByTagName("body")[0].appendChild(elementoHijo1);
document.getElementsByTagName("body")[0].appendChild(tab);
document.getElementsByTagName("body")[0].appendChild(elementoHijo2);
document.getElementsByTagName("body")[0].appendChild(tab);
document.getElementsByTagName("body")[0].appendChild(elementoHijo3);
document.getElementsByTagName("body")[0].appendChild(tab);

document.getElementsByTagName("body")[0].removeChild(elementoHijo1);
