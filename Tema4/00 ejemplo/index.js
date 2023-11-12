// Obtener el elemento padre
var myDiv = document.getElementById("myDIV");

// Obtener los nodos hijos del elemento padre
var childNodes = myDiv.childNodes;

// Recorrer los nodos hijos y encontrar los elementos <p>
for (var i = 0; i < childNodes.length; i++) {
  var node = childNodes[i];

  // Verificar si el nodo es un elemento <p>
  if (node.nodeName === "P") {
    // Cambiar el fondo del primer <p> a amarillo
    if (i === 1) {
      node.style.backgroundColor = "yellow";
    }
    // Cambiar el fondo del segundo <p> a naranja
    else if (i === 3) {
      node.style.backgroundColor = "orange";
    }
  }
}
