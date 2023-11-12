let elementoHijo1 = document.createElement("p");
let nodoTexto1 = document.createTextNode("Lorem ipsum dolor sit amet co");
elementoHijo1.append(nodoTexto1);

let elementoHijo2 = document.createElement("p");
let nodoTexto2 = document.createTextNode("Lorem ipsum dolor sit amet co");
elementoHijo2.append(nodoTexto2);

let elementoHijo3 = document.createElement("p");
let nodoTexto3 = document.createTextNode("Lorem ipsum dolor sit amet co");
elementoHijo3.append(nodoTexto3);

//Preguntar a Belen
//let tab = document.createElement("br");

document.getElementsByTagName("body")[0].append("elementoHijo1");
document.getElementsByTagName("body")[0].append("elementoHijo2");
document.getElementsByTagName("body")[0].append("elementoHijo3");
