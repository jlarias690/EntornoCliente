let elementoHijo = document.createElement("p");
let nodoTexto = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis repudiandae placeat provident dolor, ea reiciendis quia architecto hic harum aperiam sequi, dolore excepturi eos in vel sit quis vitae!"
);
elementoHijo.append(nodoTexto);
document.getElementsByTagName("body")[0].append(elementoHijo);
