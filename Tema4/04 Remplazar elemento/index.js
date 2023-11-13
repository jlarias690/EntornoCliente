//Creamos el nuevo elemento junto con su nuevo nodo hijo y los enlazamos.
let elemento = document.createElement("p");
let newNode = document.createTextNode("This new");
elemento.appendChild(newNode);
//Obtenemos el nodo que queremos remplazar con la funcion children que nos devuelve un array de elementos y seleccionamos el primero que seria la posicion 0 del array
let oldNode = document.getElementById("div1").children[0];
//Por ultimo remplazamos el oldNode con el elemento
document.getElementById("div1").replaceChild(elemento, oldNode);
